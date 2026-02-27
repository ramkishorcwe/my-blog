import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Blog Portal",
    description:
      "A full-stack blog platform with authentication, image uploads, and CRUD operations using Appwrite.",
    tech: ["React", "Redux", "Appwrite", "Ant Design"],
    live: "https://my-blog-frontend.vercel.app/",
    github: "https://github.com/ramkishorcwe/my-blog",
  },
  {
    title: "Stream Gemini",
    description:
      "Youtube-like video platform with Gemini AI integration for content search and recommendations.",
    tech: ["React", "Gemini AI", "Tailwind", "tmdb API"],
    live: "https://my-blog-zeta-liard.vercel.app/",
    github: "https://github.com/ramkishorcwe/StreamGenie",
  },
  {
    title: "Portfolio Hub",
    description:
      "Main portfolio app that connects multiple projects with single sign-on support.",
    tech: ["React", "SSO", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce UI",
    description:
      "Modern e-commerce frontend with product listing, filters, and cart management.",
    tech: ["React", "Redux", "Stripe"],
    live: "#",
    github: "#",
  },
];

export default function ProjectsListPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center text-4xl font-bold tracking-tight"
      >
        My Projects
      </motion.h1>

      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-xl">
              <CardContent className="flex h-full flex-col p-6">
                <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
                <p className="mb-4 text-sm text-white/70">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <Button variant="secondary" className="flex-1 gap-2" asChild>
                    <a href={project.live} target="_blank">
                      <ExternalLink size={16} /> Live
                    </a>
                  </Button>

                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a href={project.github} target="_blank">
                      <Github size={16} /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
