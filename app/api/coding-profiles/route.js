import { codingProfilesFallback } from "@/data/portfolio";

export const revalidate = 21600; // 6 hours

const CODEFORCES_HANDLE = "S_Nagar";
const LEETCODE_USERNAME = "S_Nagar";

async function fetchCodeforces() {
  const [infoRes, ratingRes, statusRes] = await Promise.allSettled([
    fetch(`https://codeforces.com/api/user.info?handles=${CODEFORCES_HANDLE}`, {
      next: { revalidate: 21600 },
    }),
    fetch(`https://codeforces.com/api/user.rating?handle=${CODEFORCES_HANDLE}`, {
      next: { revalidate: 21600 },
    }),
    fetch(
      `https://codeforces.com/api/user.status?handle=${CODEFORCES_HANDLE}&from=1&count=10000`,
      {
        next: { revalidate: 21600 },
      }
    ),
  ]);

  let profile = { ...codingProfilesFallback.codeforces };

  if (infoRes.status === "fulfilled" && infoRes.value.ok) {
    const json = await infoRes.value.json();

    if (json.status === "OK" && json.result?.length > 0) {
      const user = json.result[0];

      profile = {
        ...profile,
        rating: user.rating ?? profile.rating,
        maxRating: user.maxRating ?? profile.maxRating,
        rank: user.rank ?? profile.rank,
        maxRank: user.maxRank ?? profile.maxRank,
      };
    }
  }

  if (ratingRes.status === "fulfilled" && ratingRes.value.ok) {
    const json = await ratingRes.value.json();

    if (json.status === "OK") {
      profile.contests = json.result.length;
    }
  }

  if (statusRes.status === "fulfilled" && statusRes.value.ok) {
    const json = await statusRes.value.json();

    if (json.status === "OK") {
      const solvedSet = new Set();

      for (const submission of json.result) {
        if (submission.verdict !== "OK") continue;

        const problem = submission.problem;
        const key = `${problem.contestId || "gym"}-${problem.index}-${problem.name}`;
        solvedSet.add(key);
      }

      profile.solved = solvedSet.size;
    }
  }

  return profile;
}

async function fetchLeetCode() {
  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          ranking
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        badges {
          id
        }
      }
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
        badge {
          name
        }
      }
    }
  `;

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: {
          username: LEETCODE_USERNAME,
        },
      }),
      next: { revalidate: 21600 },
    });

    if (!res.ok) throw new Error("LeetCode request failed");

    const json = await res.json();

    const matchedUser = json.data?.matchedUser;
    const contest = json.data?.userContestRanking;

    if (!matchedUser) throw new Error("LeetCode user not found");

    const solved = matchedUser.submitStats?.acSubmissionNum || [];

    const getSolved = (difficulty) => {
      return solved.find((item) => item.difficulty === difficulty)?.count || 0;
    };

    return {
      ...codingProfilesFallback.leetcode,
      username: matchedUser.username || LEETCODE_USERNAME,
      rating: contest?.rating ? Math.round(contest.rating) : codingProfilesFallback.leetcode.rating,
      level: contest?.badge?.name || codingProfilesFallback.leetcode.level,
      globalRanking:
        contest?.globalRanking || codingProfilesFallback.leetcode.globalRanking,
      attendedContests:
        contest?.attendedContestsCount ||
        codingProfilesFallback.leetcode.attendedContests,
      topPercentage:
        contest?.topPercentage || codingProfilesFallback.leetcode.topPercentage,
      totalSolved: getSolved("All") || codingProfilesFallback.leetcode.totalSolved,
      easySolved: getSolved("Easy") || codingProfilesFallback.leetcode.easySolved,
      mediumSolved:
        getSolved("Medium") || codingProfilesFallback.leetcode.mediumSolved,
      hardSolved: getSolved("Hard") || codingProfilesFallback.leetcode.hardSolved,
      profileRank:
        matchedUser.profile?.ranking || codingProfilesFallback.leetcode.profileRank,
      badges: matchedUser.badges?.length || codingProfilesFallback.leetcode.badges,
    };
  } catch {
    return codingProfilesFallback.leetcode;
  }
}

export async function GET() {
  const [codeforces, leetcode] = await Promise.allSettled([
    fetchCodeforces(),
    fetchLeetCode(),
  ]);

  return Response.json({
    codeforces:
      codeforces.status === "fulfilled"
        ? codeforces.value
        : codingProfilesFallback.codeforces,
    leetcode:
      leetcode.status === "fulfilled"
        ? leetcode.value
        : codingProfilesFallback.leetcode,
    codechef: codingProfilesFallback.codechef,
    updatedAt: new Date().toISOString(),
  });
}