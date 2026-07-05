"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const TESTIMONIALS = [
  {
    quote: "Fawaz delivered exceptional code on the Elite Hotel project. His understanding of microservices is top-notch.",
    name: "Alex Morgan",
    role: "Project Manager, Elite Hotel",
    initials: "AM",
  },
  {
    quote: "The Nxtcart platform is blazing fast. Fawaz's optimization skills significantly improved our conversion rates.",
    name: "Sarah Chen",
    role: "CTO, Nxtcart",
    initials: "SC",
  },
  {
    quote: "A true professional. He transformed our messy codebase into a clean, scalable architecture.",
    name: "David Smith",
    role: "Lead Dev, TechStart",
    initials: "DS",
  },
  {
    quote: "Incredible attention to detail. The UI animations he implemented made our app feel world-class.",
    name: "Emily Davis",
    role: "Product Designer",
    initials: "ED",
  },
];

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", role: "", quote: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      setFormState({ name: "", role: "", quote: "" });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-20 overflow-hidden bg-white py-32" id="testimonials">
      <div className="relative z-10 container mx-auto mb-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 text-5xl font-bold tracking-tight text-black md:text-7xl"
        >
          Kind Words
        </motion.h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-black/60">
          Feedback from clients and collaborators I&apos;ve had the pleasure of working with.
        </p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsModalOpen(true)}
          className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
        >
          Write a Review
        </motion.button>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 z-20 h-full w-32 bg-linear-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-20 h-full w-32 bg-linear-to-l from-white to-transparent" />

        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div
                key={index}
                className="w-[350px] shrink-0 rounded-2xl border border-black/10 bg-white p-8 md:w-[450px]"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black text-lg font-bold text-white">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">{item.name}</h4>
                    <p className="text-sm text-black/50">{item.role}</p>
                  </div>
                </div>
                <p className="italic leading-relaxed text-black/70">
                  &quot;{item.quote}&quot;
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-2xl"
            >
              <h3 className="relative z-10 mb-2 text-2xl font-bold text-black">
                Submit a Testimonial
              </h3>
              <p className="relative z-10 mb-6 text-black/60">
                Your feedback helps me improve and grow. Thank you!
              </p>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-black/60">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-black transition-colors focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-black/60">Role / Company</label>
                  <input
                    type="text"
                    required
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-black transition-colors focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-black/60">Testimonial</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.quote}
                    onChange={(e) => setFormState({ ...formState, quote: e.target.value })}
                    className="w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-black transition-colors focus:border-black focus:outline-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 rounded-xl border border-black/10 py-3 font-medium text-black transition-colors hover:bg-black/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 rounded-xl bg-black py-3 font-bold text-white transition-opacity hover:opacity-80 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : submitStatus === "success" ? "Sent!" : submitStatus === "error" ? "Retry" : "Submit"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
