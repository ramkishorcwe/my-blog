import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Rocket, Users, Briefcase } from "lucide-react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* HERO */}
        <section className="text-center space-y-4">
          <Badge className="bg-slate-800 text-white border border-slate-700">
            About Me
          </Badge>

          <h1 className="text-4xl font-bold sm:text-5xl">Ram Kishor</h1>

          <p className="mx-auto max-w-2xl text-gray-400 text-lg">
            Frontend Developer with 3+ years of experience building scalable
            React applications with clean architecture and modern UI systems.
          </p>
        </section>

        {/* CONTACT BOXES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            {
              icon: <Phone className="h-5 w-5" />,
              label: "+91 8868988610",
              link: "tel:+918868988610",
            },
            {
              icon: <Mail className="h-5 w-5" />,
              label: "iamrkishoryadav@gmail.com",
              link: "mailto:iamrkishoryadav@gmail.com",
            },
            {
              icon: <Linkedin className="h-5 w-5" />,
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/ram-kishor-47734a206",
            },
            {
              icon: <Github className="h-5 w-5" />,
              label: "GitHub",
              link: "https://github.com/ramkishorcwe",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-slate-900 to-slate-800 
                 border border-slate-700 
                 rounded-2xl p-6 
                 flex flex-col items-center justify-center 
                 text-gray-300 hover:text-white 
                 hover:scale-105 
                 transition duration-300 
                 shadow-lg"
            >
              <div className="mb-3">{item.icon}</div>
              <span className="text-sm text-center">{item.label}</span>
            </motion.a>
          ))}
        </section>
        <Separator className="bg-slate-800" />

        {/* EXPERIENCE */}
        <section className="grid gap-6 md:grid-cols-2">
          <Card className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Briefcase className="h-5 w-5" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400 space-y-2">
              <p>
                <strong>Frontend Developer</strong>
              </p>
              <p>OKRUTI IT CONSULTING PVT LTD</p>
              <p>Feb 2023 – Present</p>
              <p>
                Worked on enterprise-level e-commerce and HRMS platforms using
                React, TypeScript & Dynamics 365.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Rocket className="h-5 w-5" />
                Key Contributions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400 space-y-2">
              <p>✔ Delivered PLP, PDP, Cart & Account modules</p>
              <p>✔ Implemented JWT authentication & route guards</p>
              <p>✔ Built Excel import & PDF export system</p>
              <p>✔ Optimized checkout & validation logic</p>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-slate-800" />

        {/* PROJECT HIGHLIGHTS */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Project Highlights</h2>
            <p className="text-gray-400">Real-world enterprise applications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700">
              <CardHeader>
                <CardTitle>Komatsu</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Built enterprise e-commerce modules with React & TypeScript,
                improving B2B/B2C customer navigation.
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700">
              <CardHeader>
                <CardTitle>RCRMT NRW</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Developed mining parts portal with reusable cart logic and
                custom UI components.
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700">
              <CardHeader>
                <CardTitle>WorkNest HRMS</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Built secure HRMS system with CRUD, Excel import, PDF export &
                real-time chat.
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-slate-800" />

        {/* SKILLS */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Tech Stack</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "TypeScript",
              "Redux Toolkit",
              "Tailwind CSS",
              "Material UI",
              "Ant Design",
              "Appwrite",
              "Node.js",
              "Git",
            ].map((tech) => (
              <Badge
                key={tech}
                className="bg-slate-800 border border-slate-700 text-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <Separator className="bg-slate-800" />

        {/* EDUCATION */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400 space-y-2">
              <p>MCA – MMMUT (79.3%)</p>
              <p>B.Sc – JS University</p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Code className="h-5 w-5" />
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400">
              Badminton • Traveling • Music • Cricket
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
