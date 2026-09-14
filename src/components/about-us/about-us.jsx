// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Code, Rocket, Users, Briefcase } from "lucide-react";
// import { Mail, Phone, Linkedin, Github, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// const projects = [
//   {
//     id: "komatsu",
//     title: "Komatsu",
//     tag: "B2B & B2C",
//     tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
//     shortDesc:
//       "Enterprise B2B/B2C e-commerce platform for purchasing genuine Komatsu parts online.",
//     tech: ["React.js", "TypeScript", "D365 Commerce", "SCSS", "REST APIs"],
//     role: "Software Developer",
//     fullTech:
//       "React.js, TypeScript, JavaScript, SCSS, Microsoft Dynamics 365 Commerce, Node.js, REST APIs",
//     overview:
//       "Developed and enhanced an enterprise-level B2B and B2C e-commerce platform for Komatsu, enabling customers and businesses to search, configure, and purchase genuine heavy equipment parts online.",
//     highlights: [
//       "Built responsive React.js components for PLP, PDP, Cart, Checkout, Account, Order History, Search & Store Selection.",
//       "Implemented PLP/PDP functionality: refiners, sorting, quick view, pricing, availability.",
//       "Worked on Buy Box, Mini Cart, Header, Search Result Container & Checkout experiences.",
//       "Role-based customer experiences & SAP PunchOut / OCI / cXML integrations.",
//       'Developed "My Equipment" & Microsoft Graph API integrations.',
//       "Resolved production/UAT issues: pricing, product refiners, checkout, auth, API.",
//     ],
//     areas: {
//       "E-commerce":
//         "PLP, PDP, Search, Cart, Checkout, Order History, Store Selector, Buy Box, Quick View",
//       Integrations: "SAP PunchOut, OCI, cXML, LinkOne, Graph API, REST",
//     },
//   },
//   {
//     id: "rcrmt",
//     title: "RCRMT NRW",
//     tag: "Mining Portal",
//     tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
//     shortDesc:
//       "Mining parts portal with reusable cart logic and custom UI components.",
//     tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind"],
//     role: "Frontend Developer",
//     fullTech: "React.js, TypeScript, Redux Toolkit, Tailwind CSS, REST APIs",
//     overview:
//       "Developed a mining parts portal for NRW (RCRMT) with reusable cart logic, custom UI components, and state management using Redux Toolkit.",
//     highlights: [
//       "Built modular cart system with persistent state and local storage sync.",
//       "Created reusable UI library (buttons, modals, tables) with Tailwind CSS.",
//       "Integrated REST APIs for parts inventory and order processing.",
//       "Improved performance via code-splitting and lazy loading.",
//     ],
//     areas: {
//       "Core Modules": "Cart, Inventory, Order Flow, Reusable UI Library",
//       Integrations: "REST APIs, Local Storage",
//     },
//   },
//   {
//     id: "worknest",
//     title: "WorkNest HRMS",
//     tag: "HRMS",
//     tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
//     shortDesc:
//       "Secure HRMS system with CRUD, Excel import, PDF export & real-time chat.",
//     tech: ["React", "Node.js", "Appwrite", "Material UI"],
//     role: "Full Stack Developer (Frontend heavy)",
//     fullTech: "React.js, Node.js, Appwrite, Material UI, REST APIs",
//     overview:
//       "Built a secure HRMS system with CRUD operations, Excel import, PDF export, and real-time chat using Appwrite.",
//     highlights: [
//       "Employee management, attendance, leave tracking & payroll modules.",
//       "Excel import/export for bulk data and PDF report generation.",
//       "Real-time chat with Appwrite Realtime & authentication.",
//       "Material UI components with custom theming and responsive design.",
//     ],
//     areas: {
//       "Core Modules": "Employees, Attendance, Leave, Payroll, Reports",
//       Features: "Excel Import/Export, PDF Reports, Realtime Chat",
//     },
//   },
// ];

// export default function About() {
//   const [expandedId, setExpandedId] = useState(null);

//   const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

//   return (
//     <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
//       <div className="mx-auto max-w-6xl space-y-16">
//         {/* HERO */}
//         <section className="text-center space-y-4">
//           <Badge className="bg-slate-800 text-white border border-slate-700">
//             About Me
//           </Badge>

//           <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
//             Ram Kishor
//           </h1>

//           <p className="mx-auto max-w-2xl text-gray-400 text-lg">
//             Frontend Developer with 3+ years of experience building scalable
//             React applications with clean architecture and modern UI systems.
//           </p>
//         </section>

//         {/* CONTACT BOXES */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
//           {[
//             {
//               icon: <Phone className="h-5 w-5" />,
//               label: "+91 8868988610",
//               link: "tel:+918868988610",
//             },
//             {
//               icon: <Mail className="h-5 w-5" />,
//               label: "iamrkishoryadav@gmail.com",
//               link: "mailto:iamrkishoryadav@gmail.com",
//             },
//             {
//               icon: <Linkedin className="h-5 w-5" />,
//               label: "LinkedIn",
//               link: "https://www.linkedin.com/in/ram-kishor-47734a206",
//             },
//             {
//               icon: <Github className="h-5 w-5" />,
//               label: "GitHub",
//               link: "https://github.com/ramkishorcwe",
//             },
//           ].map((item, index) => (
//             <motion.a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 80,
//                 delay: index * 0.15,
//               }}
//               viewport={{ once: true }}
//               className="group bg-gradient-to-br from-slate-900 to-slate-800
//                  border border-slate-700
//                  rounded-2xl p-6
//                  flex flex-col items-center justify-center
//                  text-gray-300 hover:text-white
//                  hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10
//                  transition duration-300
//                  shadow-lg"
//             >
//               <div className="mb-3 group-hover:scale-110 transition duration-300">
//                 {item.icon}
//               </div>
//               <span className="text-sm text-center break-all">
//                 {item.label}
//               </span>
//             </motion.a>
//           ))}
//         </section>

//         <Separator className="bg-slate-800" />

//         {/* EXPERIENCE */}
//         <section className="grid gap-6 md:grid-cols-2">
//           <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-white">
//                 <Briefcase className="h-5 w-5 text-blue-400" />
//                 Experience
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="text-gray-400 space-y-2">
//               <p className="text-slate-200 font-semibold text-lg">
//                 Frontend Developer
//               </p>
//               <p className="text-slate-300">OKRUTI IT CONSULTING PVT LTD</p>
//               <p className="text-sm">Feb 2023 – Present</p>
//               <p>
//                 Worked on enterprise-level e-commerce and HRMS platforms using
//                 React, TypeScript & Dynamics 365.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-white">
//                 <Rocket className="h-5 w-5 text-blue-400" />
//                 Key Contributions
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="text-gray-400 space-y-2">
//               <p>✔ Delivered PLP, PDP, Cart & Account modules</p>
//               <p>✔ Implemented JWT authentication & route guards</p>
//               <p>✔ Built Excel import & PDF export system</p>
//               <p>✔ Optimized checkout & validation logic</p>
//             </CardContent>
//           </Card>
//         </section>

//         <Separator className="bg-slate-800" />

//         {/* PROJECT HIGHLIGHTS — expandable cards */}
//         <section className="space-y-6">
//           <div className="text-center">
//             <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
//               Project Highlights
//             </h2>
//             <p className="text-gray-400 mt-1">
//               Real-world enterprise applications — click a card to expand
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 items-start">
//             {projects.map((project) => {
//               const isOpen = expandedId === project.id;
//               return (
//                 <motion.div
//                   key={project.id}
//                   layout
//                   onClick={() => toggle(project.id)}
//                   whileHover={{ y: -4 }}
//                   className={`cursor-pointer rounded-2xl border bg-gradient-to-br from-slate-900 to-slate-800/90 p-6 transition-all duration-300 shadow-lg ${
//                     isOpen
//                       ? "border-blue-500/60 shadow-2xl shadow-blue-500/10"
//                       : "border-slate-700 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
//                   }`}
//                 >
//                   <div className="flex items-start justify-between gap-2">
//                     <h3 className="text-xl font-bold text-white">
//                       {project.title}
//                     </h3>
//                     <span
//                       className={`text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border whitespace-nowrap ${project.tagColor}`}
//                     >
//                       {project.tag}
//                     </span>
//                   </div>

//                   <p className="text-slate-400 text-sm mt-3 leading-relaxed">
//                     {project.shortDesc}
//                   </p>

//                   <div className="flex flex-wrap gap-1.5 mt-4 text-[11px] font-medium">
//                     {project.tech.map((t) => (
//                       <span
//                         key={t}
//                         className="bg-slate-700/60 text-slate-300 px-2 py-0.5 rounded"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex items-center justify-between mt-4 text-xs text-slate-400">
//                     <span className="opacity-70">
//                       {isOpen ? "Click to collapse" : "Click to view details"}
//                     </span>
//                     <motion.span
//                       animate={{ rotate: isOpen ? 180 : 0 }}
//                       transition={{ duration: 0.25 }}
//                       className="text-blue-400"
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.span>
//                   </div>

//                   <AnimatePresence initial={false}>
//                     {isOpen && (
//                       <motion.div
//                         key="content"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.35, ease: "easeInOut" }}
//                         className="overflow-hidden"
//                       >
//                         <div className="mt-4 pt-4 border-t border-slate-700/60 text-sm text-slate-400 space-y-3">
//                           <p>
//                             <strong className="text-slate-200">Role:</strong>{" "}
//                             {project.role}
//                           </p>
//                           <p>
//                             <strong className="text-slate-200">
//                               Technologies:
//                             </strong>{" "}
//                             {project.fullTech}
//                           </p>
//                           <p>{project.overview}</p>

//                           <div>
//                             <p className="font-medium text-slate-300 mb-1">
//                               Key Highlights:
//                             </p>
//                             <ul className="list-disc pl-5 space-y-1 marker:text-blue-400/70">
//                               {project.highlights.map((h, i) => (
//                                 <li key={i}>{h}</li>
//                               ))}
//                             </ul>
//                           </div>

//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
//                             {Object.entries(project.areas).map(
//                               ([key, value]) => (
//                                 <div
//                                   key={key}
//                                   className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-2.5"
//                                 >
//                                   <span className="text-slate-200 font-medium block mb-0.5">
//                                     {key}
//                                   </span>
//                                   <span className="text-slate-400">
//                                     {value}
//                                   </span>
//                                 </div>
//                               ),
//                             )}
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>

//         <Separator className="bg-slate-800" />

//         {/* SKILLS */}
//         <section className="space-y-6">
//           <div className="text-center">
//             <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
//               Tech Stack
//             </h2>
//           </div>

//           <div className="flex flex-wrap justify-center gap-3">
//             {[
//               "React",
//               "TypeScript",
//               "Redux Toolkit",
//               "Tailwind CSS",
//               "Material UI",
//               "Ant Design",
//               "Appwrite",
//               "Node.js",
//               "Git",
//               "Dynamics 365",
//               "SCSS",
//             ].map((tech) => (
//               <Badge
//                 key={tech}
//                 className="bg-slate-800 border border-slate-700 text-white hover:border-blue-500/50 transition px-4 py-2"
//               >
//                 {tech}
//               </Badge>
//             ))}
//           </div>
//         </section>

//         <Separator className="bg-slate-800" />

//         {/* EDUCATION */}
//         <section className="grid md:grid-cols-2 gap-6">
//           <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-white">
//                 <Users className="h-5 w-5 text-blue-400" />
//                 Education
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="text-gray-400 space-y-2">
//               <p className="text-slate-200 font-medium">
//                 MCA – MMMUT{" "}
//                 <span className="text-slate-400 font-normal">(79.3%)</span>
//               </p>
//               <p>B.Sc – JS University</p>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-white">
//                 <Code className="h-5 w-5 text-blue-400" />
//                 Interests
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="text-gray-400">
//               Badminton • Traveling • Music • Cricket
//             </CardContent>
//           </Card>
//         </section>
//       </div>
//     </div>
//   );
// }

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Rocket, Users, Briefcase } from "lucide-react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ChevronDown,
  GraduationCap,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ──────────────────────────────────────────────────────────────
   Professional technology categorization
   ────────────────────────────────────────────────────────────── */
const techStack = [
  {
    category: "Core Frontend",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Zustand", "React Context API"],
  },
  {
    category: "UI Frameworks & Component Libraries",
    items: ["Material UI", "Ant Design", "Tailwind CSS"],
  },
  {
    category: "Styling & Design Systems",
    items: ["SCSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend & BaaS",
    items: ["Node.js", "Appwrite", "REST APIs"],
  },
  {
    category: "Enterprise Platforms & Integrations",
    items: [
      "Microsoft Dynamics 365 Commerce",
      "SAP PunchOut / OCI / cXML",
      "Microsoft Graph API",
    ],
  },
  {
    category: "Tooling & DevOps",
    items: ["Git", "Azure DevOps", "Jira", "Vite / Webpack"],
  },
];

/* ──────────────────────────────────────────────────────────────
   Project data — enriched with categorized tech
   ────────────────────────────────────────────────────────────── */
const projects = [
  {
    id: "komatsu",
    title: "Komatsu",
    tag: "B2B & B2C E-commerce",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    shortDesc:
      "Enterprise B2B/B2C e-commerce platform for purchasing genuine Komatsu parts online.",
    techPreview: [
      "React.js",
      "TypeScript",
      "D365 Commerce",
      "SCSS",
      "REST APIs",
    ],
    role: "Software Developer",
    techBreakdown: [
      {
        category: "Core Frontend",
        items: ["React.js", "TypeScript", "JavaScript", "SCSS"],
      },
      {
        category: "Enterprise Platform",
        items: ["Microsoft Dynamics 365 Commerce"],
      },
      {
        category: "Backend & Integrations",
        items: ["Node.js", "REST APIs"],
      },
      {
        category: "Enterprise Integrations",
        items: ["SAP PunchOut", "OCI", "cXML", "Microsoft Graph API"],
      },
    ],
    overview:
      "Developed and enhanced an enterprise-level B2B and B2C e-commerce platform for Komatsu, enabling customers and businesses to search, configure, and purchase genuine heavy equipment parts online.",
    highlights: [
      "Built responsive React.js components for PLP, PDP, Cart, Checkout, Account, Order History, Search & Store Selection.",
      "Implemented PLP/PDP functionality: refiners, sorting, quick view, pricing, and availability.",
      "Worked on Buy Box, Mini Cart, Header, Search Result Container & Checkout experiences.",
      "Implemented role-based customer experiences and SAP PunchOut / OCI / cXML integrations.",
      'Developed "My Equipment" and Microsoft Graph API integrations.',
      "Resolved production/UAT issues: pricing, refiners, checkout, authentication, and API integrations.",
    ],
    areas: {
      "E-commerce Modules":
        "PLP, PDP, Search, Cart, Checkout, Order History, Store Selector, Buy Box, Quick View",
      "Enterprise Integrations":
        "SAP PunchOut, OCI, cXML, LinkOne, Graph API, REST",
    },
  },
  {
    id: "rcrmt",
    title: "RCRMT NRW",
    tag: "Mining Portal",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    shortDesc:
      "Mining parts portal with reusable cart logic and custom UI components.",
    techPreview: ["React", "TypeScript", "Redux Toolkit", "Tailwind"],
    role: "Frontend Developer",
    techBreakdown: [
      {
        category: "Core Frontend",
        items: ["React.js", "TypeScript"],
      },
      {
        category: "State Management",
        items: ["Redux Toolkit"],
      },
      {
        category: "Styling & UI",
        items: ["Tailwind CSS", "Custom Component Library"],
      },
      {
        category: "Backend Integration",
        items: ["REST APIs", "Local Storage"],
      },
    ],
    overview:
      "Developed a mining parts portal for NRW (RCRMT) with reusable cart logic, custom UI components, and centralized state management using Redux Toolkit.",
    highlights: [
      "Built modular cart system with persistent state and local storage synchronization.",
      "Created a reusable UI library (buttons, modals, tables) with Tailwind CSS.",
      "Integrated REST APIs for parts inventory and order processing.",
      "Improved performance via code-splitting and lazy loading.",
    ],
    areas: {
      "Core Modules": "Cart, Inventory, Order Flow, Reusable UI Library",
      "State & Persistence": "Redux Toolkit, Local Storage",
    },
  },
  {
    id: "worknest",
    title: "WorkNest HRMS",
    tag: "HRMS",
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    shortDesc:
      "Secure HRMS system with CRUD, Excel import, PDF export & real-time chat.",
    techPreview: ["React", "Node.js", "Appwrite", "Material UI"],
    role: "Full Stack Developer (Frontend-heavy)",
    techBreakdown: [
      {
        category: "Core Frontend",
        items: ["React.js", "JavaScript"],
      },
      {
        category: "UI Framework",
        items: ["Material UI", "Custom Theming"],
      },
      {
        category: "Backend & BaaS",
        items: ["Node.js", "Appwrite", "REST APIs"],
      },
      {
        category: "Realtime & Auth",
        items: ["Appwrite Realtime", "Appwrite Authentication"],
      },
    ],
    overview:
      "Built a secure HRMS system with CRUD operations, Excel import, PDF export, and real-time chat using Appwrite.",
    highlights: [
      "Employee management, attendance, leave tracking & payroll modules.",
      "Excel import/export for bulk data and PDF report generation.",
      "Real-time chat with Appwrite Realtime & authentication.",
      "Material UI components with custom theming and responsive design.",
    ],
    areas: {
      "Core Modules": "Employees, Attendance, Leave, Payroll, Reports",
      Features: "Excel Import/Export, PDF Reports, Realtime Chat",
    },
  },
];

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */
export default function About() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* HERO */}
        <section className="text-center space-y-4">
          <Badge className="bg-slate-800 text-white border border-slate-700">
            About Me
          </Badge>

          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Ram Kishor
          </h1>

          <p className="mx-auto max-w-3xl text-slate-300 text-base leading-relaxed">
            I'm a Software Developer with 3+ years of experience building
            scalable B2B & B2C web applications with{" "}
            <span className="text-white font-medium">
              React.js, TypeScript, Node.js & Express.js
            </span>
            . I've delivered enterprise e-commerce platforms, reusable UI
            systems, secure REST APIs, and integrations with{" "}
            <span className="text-white font-medium">
              SAP PunchOut, OCI & cXML
            </span>
            . My toolkit spans Redux, MongoDB, PostgreSQL, Azure, Docker, and
            I'm currently exploring{" "}
            {/* <span className="text-white font-medium">
              RAG & AI-powered solutions
            </span> */}
            .
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
              className="group bg-gradient-to-br from-slate-900 to-slate-800 
                 border border-slate-700 
                 rounded-2xl p-6 
                 flex flex-col items-center justify-center 
                 text-gray-300 hover:text-white 
                 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10
                 transition duration-300 
                 shadow-lg"
            >
              <div className="mb-3 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>
              <span className="text-sm text-center break-all">
                {item.label}
              </span>
            </motion.a>
          ))}
        </section>

        <Separator className="bg-slate-800" />

        {/* EXPERIENCE */}
        {/* EXPERIENCE & KEY CONTRIBUTIONS */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* EXPERIENCE */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Briefcase className="h-5 w-5 text-blue-400" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400 space-y-4">
              <div className="space-y-1">
                <p className="text-slate-100 font-semibold text-lg">
                  Software Developer
                </p>
                <p className="text-slate-300">OKRUTI IT CONSULTING PVT LTD</p>
                <p className="text-sm text-slate-500">
                  Feb 2023 – Present · 3+ Years
                </p>
              </div>

              <p className="text-sm leading-relaxed">
                Working across the full stack to build enterprise-grade B2B and
                B2C applications — from responsive React.js frontends to
                scalable Node.js APIs — with a focus on performance, security,
                and clean architecture.
              </p>

              <div className="space-y-2 text-sm">
                <p className="flex gap-2">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Frontend:
                    </span>{" "}
                    React.js, TypeScript, Redux, SCSS, reusable component
                    libraries
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>
                    <span className="text-slate-200 font-medium">Backend:</span>{" "}
                    Node.js, Express.js, REST APIs, MongoDB, MySQL, PostgreSQL
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Security:
                    </span>{" "}
                    OAuth 2.0, JWT, CAPTCHA-based authentication flows
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Integrations:
                    </span>{" "}
                    SAP PunchOut, OCI, cXML, LinkOne, Microsoft Graph API
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Cloud & DevOps:
                    </span>{" "}
                    Microsoft Azure, Docker, Git, Azure DevOps, Jira
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      AI / Modern:
                    </span>{" "}
                    Retrieval-Augmented Generation (RAG), AI-powered solutions
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* KEY CONTRIBUTIONS */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Rocket className="h-5 w-5 text-blue-400" />
                Key Contributions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400 space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Enterprise E-commerce Delivery
                    </span>{" "}
                    — Built PLP, PDP, Cart, Checkout, Account, and Order History
                    modules for large-scale B2B/B2C platforms.
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Full-Stack API Development
                    </span>{" "}
                    — Designed and implemented REST APIs with Node.js &
                    Express.js, integrating MongoDB, MySQL, and PostgreSQL.
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Secure Authentication Systems
                    </span>{" "}
                    — Implemented JWT, OAuth 2.0, route guards, and
                    CAPTCHA-based protection across user-facing applications.
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Enterprise Procurement Integrations
                    </span>{" "}
                    — Delivered SAP PunchOut, OCI, cXML, and LinkOne
                    integrations for B2B purchasing workflows.
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Data Import / Export Systems
                    </span>{" "}
                    — Built Excel import pipelines and PDF export utilities for
                    bulk data operations and reporting.
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Performance & Scalability
                    </span>{" "}
                    — Optimized checkout flows, validation logic,
                    code-splitting, and reusable component architecture.
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      Cloud Deployment & DevOps
                    </span>{" "}
                    — Supported deployments across PT, UT, and UAT environments
                    using Azure, Docker, and Azure DevOps pipelines.
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <span>
                    <span className="text-slate-200 font-medium">
                      AI / RAG Exploration
                    </span>{" "}
                    — Hands-on experience building Retrieval-Augmented
                    Generation applications and AI-driven features.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-slate-800" />

        {/* PROJECT HIGHLIGHTS — expandable cards */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Project Highlights
            </h2>
            <p className="text-gray-400 mt-1">
              Real-world enterprise applications — click a card to expand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {projects.map((project) => {
              const isOpen = expandedId === project.id;
              return (
                <motion.div
                  key={project.id}
                  layout
                  onClick={() => toggle(project.id)}
                  whileHover={{ y: -4 }}
                  className={`cursor-pointer rounded-2xl border bg-gradient-to-br from-slate-900 to-slate-800/90 p-6 transition-all duration-300 shadow-lg ${
                    isOpen
                      ? "border-blue-500/60 shadow-2xl shadow-blue-500/10"
                      : "border-slate-700 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border whitespace-nowrap ${project.tagColor}`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4 text-[11px] font-medium">
                    {project.techPreview.map((t) => (
                      <span
                        key={t}
                        className="bg-slate-700/60 text-slate-300 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4 text-xs text-slate-400">
                    <span className="opacity-70">
                      {isOpen ? "Click to collapse" : "Click to view details"}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-blue-400"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-slate-700/60 text-sm text-slate-400 space-y-4">
                          <p>
                            <strong className="text-slate-200">Role:</strong>{" "}
                            {project.role}
                          </p>

                          {/* Categorized tech breakdown */}
                          <div>
                            <p className="font-medium text-slate-300 mb-2">
                              Technology Stack:
                            </p>
                            <div className="space-y-2">
                              {project.techBreakdown.map((group) => (
                                <div
                                  key={group.category}
                                  className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-2.5"
                                >
                                  <span className="text-slate-200 font-medium text-xs block mb-1.5">
                                    {group.category}
                                  </span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((item) => (
                                      <span
                                        key={item}
                                        className="text-[11px] bg-slate-700/60 text-slate-300 px-2 py-0.5 rounded"
                                      >
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <p>{project.overview}</p>

                          <div>
                            <p className="font-medium text-slate-300 mb-1">
                              Key Highlights:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 marker:text-blue-400/70">
                              {project.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                            {Object.entries(project.areas).map(
                              ([key, value]) => (
                                <div
                                  key={key}
                                  className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-2.5"
                                >
                                  <span className="text-slate-200 font-medium block mb-0.5">
                                    {key}
                                  </span>
                                  <span className="text-slate-400">
                                    {value}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        <Separator className="bg-slate-800" />

        {/* TECH STACK — categorized */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <p className="text-gray-400 mt-1">Organized by domain expertise</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="bg-gradient-to-br from-slate-900 to-slate-800/90 border border-slate-700 rounded-2xl p-5 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-800/80 border border-slate-700/80 text-slate-300 px-2.5 py-1 rounded-full hover:border-blue-500/50 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-slate-800" />

        {/* EDUCATION */}
        <section className="grid md:grid-cols-1 gap-6">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-400 space-y-2">
              <p className="text-slate-200 font-medium">
                Master of Computer Applications (MCA) – {"\n"} Madan Mohan
                Malaviya University of Technology, Gorakhpur{" "}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Heart className="h-5 w-5 text-blue-400" />
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
