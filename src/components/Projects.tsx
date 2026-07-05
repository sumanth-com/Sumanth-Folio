"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: "elite-hotel",
    title: "Elite Hotel",
    subtitle: "Microservices Platform",
    fileCount: "8 Services",
    status: "Shipped",
    previewImage:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    description:
      "Scalable hotel management system with 5+ Node.js microservices, Docker, and Kubernetes.",
    techStack: ["Node.js", "Docker", "Kubernetes", "Redis", "RabbitMQ", "Next.js"],
    repo: "https://github.com/fawazv/Elite-hotel",
    demo: "#",
  },
  {
    id: "nxtcart",
    title: "Nxtcart",
    subtitle: "E-Commerce Suite",
    fileCount: "24 Modules",
    status: "Live",
    previewImage:
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    description:
      "Modern shopping platform with Stripe payments, admin dashboard, and automated workflows.",
    techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Shadcn UI"],
    repo: "https://github.com/fawazv/nxt-cart",
    demo: "#",
  },
  {
    id: "dropbox-clone",
    title: "Cloud Vault",
    subtitle: "File Storage App",
    fileCount: "1.2k Files",
    status: "Shipped",
    previewImage:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    description:
      "Secure cloud storage clone with drag-and-drop uploads, metadata, and real-time sync.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    repo: "https://github.com/fawazv/dropbox-clone",
    demo: "#",
  },
  {
    id: "blog-microservices",
    title: "Blog Engine",
    subtitle: "Event-Driven APIs",
    fileCount: "6 Services",
    status: "Shipped",
    previewImage:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    description:
      "User, Post, and Comment services with API Gateway, RabbitMQ, and Docker Compose.",
    techStack: ["Node.js", "RabbitMQ", "Docker"],
    repo: "https://github.com/fawazv/blog-microservice",
    demo: "#",
  },
  {
    id: "bookstore-app",
    title: "Bookstore",
    subtitle: "MERN Stack App",
    fileCount: "18 Endpoints",
    status: "Live",
    previewImage:
      "https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    description:
      "Full book management platform with REST APIs, MongoDB, and a responsive React frontend.",
    techStack: ["MongoDB", "Express", "React"],
    repo: "https://github.com/fawazv/bookstoreapp",
    demo: "#",
  },
];

function DocumentStack({ hovered }: { hovered?: boolean }) {
  return (
    <div
      className={`relative h-[68px] w-[84px] transition-all duration-500 ease-out ${
        hovered ? "scale-90 -translate-y-2 opacity-0" : "scale-100 opacity-100"
      }`}
      aria-hidden
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 h-[50px] w-[38px] rounded-[5px] border border-black/15 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
          style={{
            transform: `translate(calc(-50% + ${(i - 1) * 9}px), calc(-50% + ${(i - 1) * -3}px)) rotate(${(i - 1) * 7}deg)`,
          }}
        >
          <div className="space-y-1.5 px-2 pt-2.5">
            <div className="h-[2px] w-full rounded-full bg-black/15" />
            <div className="h-[2px] w-[82%] rounded-full bg-black/15" />
            <div className="h-[2px] w-[68%] rounded-full bg-black/15" />
            <div className="h-[2px] w-[88%] rounded-full bg-black/15" />
          </div>
        </div>
      ))}
    </div>
  );
}

function MenuDots() {
  return (
    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" aria-hidden>
      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
      <circle cx="9" cy="2" r="1.5" fill="currentColor" />
      <circle cx="16" cy="2" r="1.5" fill="currentColor" />
    </svg>
  );
}

function FilesIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" />
    </svg>
  );
}

function FolderTab({ title }: { title: string }) {
  return (
    <div className="relative inline-flex">
      <div className="relative rounded-t-[14px] bg-black px-4 py-2.5">
        <h3 className="whitespace-nowrap text-[14px] font-bold leading-tight text-white">
          {title}
        </h3>
      </div>
      <div
        className="absolute -right-[18px] bottom-0 h-[18px] w-[18px] bg-black"
        style={{
          clipPath: "polygon(0 0, 0 100%, 100% 100%)",
          borderBottomRightRadius: "6px",
        }}
        aria-hidden
      />
    </div>
  );
}

function ProjectFolderCard({
  project,
  index,
  onSelect,
}: {
  project: (typeof projects)[0];
  index: number;
  onSelect: (id: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="w-full"
    >
      <button
        type="button"
        onClick={() => onSelect(project.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2"
      >
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.14)]">
          <div className="relative min-h-[200px] overflow-hidden bg-neutral-100">
            <div
              className={`absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300 transition-opacity duration-500 ease-out ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
              aria-hidden
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.previewImage}
              alt={`${project.title} preview`}
              className={`absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 ease-out ${
                hovered ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <DocumentStack hovered={hovered} />
            </div>
          </div>

          <div className="relative bg-black px-5 pb-5 pt-0">
            <div className="flex items-end justify-between gap-3">
              <div className="-mt-7">
                <FolderTab title={project.title} />
              </div>
              <span className="mb-2 shrink-0 text-white/50">
                <MenuDots />
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-4">
              <div>
                <p className="text-[12px] text-white/55">{project.subtitle}</p>
                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-wider text-white/35">
                  {project.status}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-white/40">
                <FilesIcon />
                <span>{project.fileCount}</span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section
      className="relative z-20 min-h-screen overflow-hidden bg-white py-32 px-4 md:px-12"
      id="projects"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-black md:text-7xl">
            Selected Works
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-black/60">
            Five shipped products — organized, built, and ready to explore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((project, index) => (
            <ProjectFolderCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedId}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
              />
              <div className="pointer-events-auto fixed inset-0 z-70 flex items-center justify-center p-4 md:p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 20 }}
                  className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[28px] border border-black/10 bg-white shadow-2xl"
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute right-5 top-5 z-20 rounded-full border border-black/10 p-2 text-black transition-colors hover:bg-black hover:text-white"
                    aria-label="Close"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="relative h-44 overflow-hidden rounded-t-[28px] bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedProject.previewImage}
                      alt={selectedProject.title}
                      className="h-full w-full object-cover grayscale"
                    />
                  </div>

                  <div className="p-8">
                    <p className="mb-1 text-xs uppercase tracking-wider text-black/45">
                      {selectedProject.subtitle}
                    </p>
                    <h3 className="mb-4 text-3xl font-bold text-black">
                      {selectedProject.title}
                    </h3>
                    <p className="mb-8 leading-relaxed text-black/65">
                      {selectedProject.description}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-black/10 px-3 py-1.5 text-xs font-medium text-black/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 border-t border-black/10 pt-6">
                      <a
                        href={selectedProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center rounded-xl bg-black py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-85"
                      >
                        View Code
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center rounded-xl border border-black/10 py-3.5 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
