"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-20 overflow-hidden bg-white py-32 px-4 md:px-12" id="contact">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-5xl font-bold tracking-tight text-black md:text-7xl">
              Let&apos;s work together.
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-black/60">
              I&apos;m currently available for freelance projects and open to full-time opportunities.
              If you have a project that needs some creative touch, I&apos;d love to hear about it.
            </p>

            <div className="mb-12 flex flex-col gap-6">
              <a
                href="mailto:gsumanthreddy2004@gmail.com"
                className="group flex items-center gap-4 text-black transition-opacity hover:opacity-60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-colors group-hover:bg-black group-hover:text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="text-lg">gsumanthreddy2004@gmail.com</span>
              </a>

              <a
                href="tel:+918074241025"
                className="group flex items-center gap-4 text-black transition-opacity hover:opacity-60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-colors group-hover:bg-black group-hover:text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="text-lg">+91 8074241025</span>
              </a>

              <div className="flex items-center gap-4">
                <SocialLink href="https://github.com/sumanth-com" icon={<GithubIcon />} label="GitHub" />
                <SocialLink href="https://linkedin.com/in/" icon={<LinkedinIcon />} label="LinkedIn" />
                <SocialLink href="https://twitter.com/" icon={<TwitterIcon />} label="Twitter" />
              </div>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white transition-opacity hover:opacity-80"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-black/10 bg-white p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-black/60">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-black transition-colors focus:border-black focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-black/60">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-black transition-colors focus:border-black focus:outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-black/60">Message</label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-black transition-colors focus:border-black focus:outline-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ opacity: 0.85 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 font-bold text-white transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 border-t border-black/10 pt-8 text-center font-mono text-sm text-black/50">
          <p>&copy; {new Date().getFullYear()} Sumanth Reddy. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-black transition-all hover:bg-black hover:text-white hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
