// app/contact/page.jsx

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    const subject = encodeURIComponent(formData.subject);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setStatus("Opening your email client...");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="pt-16 min-h-screen bg-slate-50 dark:bg-zinc-900">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Get In Touch
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Contact
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Reach out for collaboration, project discussions, or technical
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card className="dark:bg-black dark:border-zinc-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>

                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Email
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {personalInfo.email}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="dark:bg-black dark:border-zinc-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>

                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Phone
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {personalInfo.phone}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="dark:bg-black dark:border-zinc-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>

                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Location
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        {personalInfo.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="dark:bg-black dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">
                    Profiles
                  </CardTitle>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <Github />
                    </a>

                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="md:col-span-2 dark:bg-black dark:border-zinc-800">
              <CardHeader>
                <CardTitle className="dark:text-white">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  This form opens your email client with the message filled in.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium dark:text-gray-300"
                      >
                        Name
                      </label>

                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium dark:text-gray-300"
                      >
                        Email
                      </label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium dark:text-gray-300"
                    >
                      Subject
                    </label>

                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                      className="dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium dark:text-gray-300"
                    >
                      Message
                    </label>

                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      rows={6}
                      required
                      className="dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>

                  {status && (
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {status}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}