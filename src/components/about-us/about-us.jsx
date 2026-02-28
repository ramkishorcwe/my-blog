// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Badge } from "@/components/ui/badge"
// // // import { Separator } from "@/components/ui/separator"
// // // import { Code, Rocket, Users } from "lucide-react"

// // // export default function About() {
// // //   return (
// // //     <div className="min-h-screen bg-background px-6 py-12">
// // //       <div className="mx-auto max-w-6xl space-y-16">

// // //         {/* HERO */}
// // //         <section className="text-center space-y-4">
// // //           <Badge variant="secondary" className="text-sm">
// // //             About Us
// // //           </Badge>
// // //           <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
// // //             We Build Modern Web Experiences
// // //           </h1>
// // //           <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
// // //             Passionate about clean code, scalable architecture, and beautiful user experiences.
// // //           </p>
// // //         </section>

// // //         {/* MISSION / VISION */}
// // //         <section className="grid gap-6 md:grid-cols-2">
// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle className="flex items-center gap-2">
// // //                 <Rocket className="h-5 w-5" />
// // //                 Our Mission
// // //               </CardTitle>
// // //             </CardHeader>
// // //             <CardContent className="text-muted-foreground">
// // //               To create fast, secure, and scalable applications using modern
// // //               technologies while delivering real value to users.
// // //             </CardContent>
// // //           </Card>

// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle className="flex items-center gap-2">
// // //                 <Users className="h-5 w-5" />
// // //                 Our Vision
// // //               </CardTitle>
// // //             </CardHeader>
// // //             <CardContent className="text-muted-foreground">
// // //               To become a trusted name in building high-quality digital products
// // //               with strong performance and elegant design.
// // //             </CardContent>
// // //           </Card>
// // //         </section>

// // //         {/* SKILLS / TECH */}
// // //         <section className="space-y-6">
// // //           <div className="text-center">
// // //             <h2 className="text-3xl font-semibold">Tech We Love</h2>
// // //             <p className="text-muted-foreground">
// // //               Tools and technologies we use daily
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
// // //             {[
// // //               "React",
// // //               "Vite",
// // //               "Tailwind CSS",
// // //               "shadcn/ui",
// // //               "Redux",
// // //               "Appwrite",
// // //               "Node.js",
// // //               "Git & GitHub",
// // //             ].map((tech) => (
// // //               <Card key={tech} className="text-center">
// // //                 <CardContent className="p-4 font-medium">
// // //                   {tech}
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </section>

// // //         <Separator />

// // //         {/* ABOUT DEVELOPER / TEAM */}
// // //         <section className="grid gap-8 md:grid-cols-2 items-center">
// // //           <div className="space-y-4">
// // //             <h2 className="text-3xl font-semibold">Who We Are</h2>
// // //             <p className="text-muted-foreground leading-relaxed">
// // //               We are developers who love solving real-world problems using clean,
// // //               maintainable code. From personal projects to production-ready apps,
// // //               we focus on performance, UX, and scalability.
// // //             </p>
// // //             <p className="text-muted-foreground leading-relaxed">
// // //               This portfolio showcases projects built with modern best practices
// // //               and real backend integrations.
// // //             </p>
// // //           </div>

// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle className="flex items-center gap-2">
// // //                 <Code className="h-5 w-5" />
// // //                 What Makes Us Different
// // //               </CardTitle>
// // //             </CardHeader>
// // //             <CardContent className="space-y-2 text-muted-foreground">
// // //               <p>✔ Clean & scalable architecture</p>
// // //               <p>✔ Modern UI & UX principles</p>
// // //               <p>✔ Real backend integrations</p>
// // //               <p>✔ Performance-focused development</p>
// // //             </CardContent>
// // //           </Card>
// // //         </section>

// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // // export default AboutUs;

// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Separator } from "@/components/ui/separator";
// // import { Button } from "@/components/ui/button";
// // import { Code, Rocket, Users, Upload } from "lucide-react";

// // export default function About() {
// //   return (
// //     <div className="min-h-screen bg-background px-6 py-12">
// //       <div className="mx-auto max-w-6xl space-y-16">
// //         {/* HERO */}
// //         <section className="text-center space-y-4">
// //           <Badge variant="secondary" className="text-sm">
// //             About Me
// //           </Badge>

// //           <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
// //             Hi, I'm Ram Kishor 👋
// //           </h1>

// //           <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
// //             React Developer focused on building scalable web applications with
// //             clean architecture and modern UI practices.
// //           </p>

// //           {/* Resume Buttons */}
// //           <div className="flex justify-center gap-4 pt-4 flex-wrap">
// //             <Button asChild>
// //               <a href="/resume.pdf" download>
// //                 Download Resume
// //               </a>
// //             </Button>

// //             <label>
// //               <Button variant="outline" asChild>
// //                 <span className="cursor-pointer flex items-center gap-2">
// //                   <Upload className="h-4 w-4" />
// //                   Upload Resume
// //                 </span>
// //               </Button>
// //               <input type="file" className="hidden" />
// //             </label>
// //           </div>
// //         </section>

// //         <Separator />

// //         {/* EXPERIENCE */}
// //         <section className="grid gap-6 md:grid-cols-2">
// //           <Card>
// //             <CardHeader>
// //               <CardTitle className="flex items-center gap-2">
// //                 <Rocket className="h-5 w-5" />
// //                 Professional Experience
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="text-muted-foreground space-y-2">
// //               <p>• Built HRMS system using React</p>
// //               <p>• Developed User Management (CRUD operations)</p>
// //               <p>• Implemented XLSX bulk import & PDF export</p>
// //               <p>• Created Employee creation & search modules</p>
// //               <p>• Built authentication (Forgot/Reset Password)</p>
// //             </CardContent>
// //           </Card>

// //           <Card>
// //             <CardHeader>
// //               <CardTitle className="flex items-center gap-2">
// //                 <Users className="h-5 w-5" />
// //                 What I Focus On
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="text-muted-foreground space-y-2">
// //               <p>✔ Clean & maintainable code</p>
// //               <p>✔ Reusable components</p>
// //               <p>✔ Performance optimization</p>
// //               <p>✔ Modern UI/UX principles</p>
// //               <p>✔ Scalable architecture</p>
// //             </CardContent>
// //           </Card>
// //         </section>

// //         <Separator />

// //         {/* TECH STACK */}
// //         <section className="space-y-6">
// //           <div className="text-center">
// //             <h2 className="text-3xl font-semibold">Tech Stack</h2>
// //             <p className="text-muted-foreground">Technologies I work with</p>
// //           </div>

// //           <div className="flex flex-wrap justify-center gap-4">
// //             {[
// //               "React",
// //               "Vite",
// //               "TypeScript",
// //               "Tailwind CSS",
// //               "shadcn/ui",
// //               "Material UI",
// //               "Redux",
// //               "Appwrite",
// //               "Node.js",
// //               "Git & GitHub",
// //             ].map((tech) => (
// //               <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
// //                 {tech}
// //               </Badge>
// //             ))}
// //           </div>
// //         </section>

// //         <Separator />

// //         {/* ABOUT */}
// //         <section className="max-w-3xl mx-auto text-center space-y-4">
// //           <h2 className="text-3xl font-semibold">Who I Am</h2>
// //           <p className="text-muted-foreground leading-relaxed">
// //             I am a passionate frontend developer who enjoys building real-world
// //             applications with modern technologies. I focus on writing scalable,
// //             clean, and maintainable code while ensuring great user experience.
// //           </p>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import { Code, Briefcase, GraduationCap, Rocket, Download } from "lucide-react";

// export default function About() {
//   return (
//     <div className="min-h-screen bg-background text-stone-50 px-6 py-12">
//       <div className="mx-auto max-w-6xl space-y-16">
//         {/* HERO */}
//         <section className="text-center space-y-4">
//           <Badge variant="secondary">About Me</Badge>

//           <h1 className="text-4xl font-bold sm:text-5xl">Ram Kishor</h1>

//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Passionate Frontend Developer specializing in React and modern
//             JavaScript frameworks, focused on building scalable,
//             high-performance web applications with clean architecture and
//             excellent user experience.
//           </p>

//           <div className="pt-4">
//             <Button asChild>
//               <a href="/resume.pdf" download>
//                 <Download className="mr-2 h-4 w-4" />
//                 Download Resume
//               </a>
//             </Button>
//           </div>
//         </section>

//         <Separator />

//         {/* EXPERIENCE */}
//         <section className="space-y-6">
//           <h2 className="text-3xl font-semibold text-center">
//             Professional Experience
//           </h2>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Briefcase className="h-5 w-5" />
//                 Frontend Developer – OKRUTI IT CONSULTING PVT LTD
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2 text-muted-foreground">
//               <p>📅 Feb 2023 – Present</p>
//               <p>• Designed and extended core application features.</p>
//               <p>
//                 • Built reusable services and UI components for consistent
//                 experience.
//               </p>
//               <p>• Optimized data processing workflows for scalability.</p>
//               <p>
//                 • Collaborated with backend and cross-functional teams globally.
//               </p>
//             </CardContent>
//           </Card>
//         </section>

//         <Separator />

//         {/* PROJECTS */}
//         <section className="space-y-8">
//           <h2 className="text-3xl font-semibold text-center">Major Projects</h2>

//           {/* Komatsu */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Komatsu – React • TypeScript • Dynamics 365</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2 text-muted-foreground">
//               <p>
//                 • Delivered PLP, PDP, Cart, Account, PunchOut, Order Management
//                 modules.
//               </p>
//               <p>• Improved B2B & B2C navigation experience.</p>
//               <p>
//                 • Reduced checkout/login issues with optimized validation logic.
//               </p>
//               <p>• Worked with global teams to meet business requirements.</p>
//             </CardContent>
//           </Card>

//           {/* RCRMT NRW */}
//           <Card>
//             <CardHeader>
//               <CardTitle>RCRMT NRW – Mining Parts Sales Portal</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2 text-muted-foreground">
//               <p>
//                 • Cloned and reused Dynamics 365 Cart module to save development
//                 time.
//               </p>
//               <p>
//                 • Built custom UI: part-number search, filters, stock badges.
//               </p>
//               <p>• Integrated pricing, checkout, and inventory logic.</p>
//             </CardContent>
//           </Card>

//           {/* WorkNest */}
//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 WorkNest – HRMS (React • TypeScript • Ant Design)
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2 text-muted-foreground">
//               <p>• Implemented JWT authentication with token refresh.</p>
//               <p>• Built Employee CRUD with role-based access.</p>
//               <p>• Added Excel bulk import (SheetJS) & PDF/CSV export.</p>
//               <p>• Developed attendance & leave dashboard.</p>
//               <p>• Integrated document upload & real-time chat (Socket.io).</p>
//             </CardContent>
//           </Card>
//         </section>

//         <Separator />

//         {/* SKILLS */}
//         <section className="space-y-6">
//           <h2 className="text-3xl font-semibold text-center">Skills</h2>

//           <div className="flex flex-wrap justify-center gap-3">
//             {[
//               "JavaScript (ES6+)",
//               "TypeScript",
//               "React.js",
//               "Redux Toolkit",
//               "Tailwind CSS",
//               "Ant Design",
//               "Material UI",
//               "Appwrite",
//               "Node.js",
//               "Express.js",
//               "Git",
//               "GitHub",
//               "Postman",
//             ].map((skill) => (
//               <Badge key={skill} variant="outline">
//                 {skill}
//               </Badge>
//             ))}
//           </div>
//         </section>

//         <Separator />

//         {/* EDUCATION */}
//         <section className="space-y-6">
//           <h2 className="text-3xl font-semibold text-center">Education</h2>

//           <Card>
//             <CardContent className="space-y-2 text-muted-foreground">
//               <p>
//                 🎓 MCA – Madan Mohan Malviya University of Technology (79.3%)
//               </p>
//               <p>🎓 B.Sc – JS University (64%)</p>
//               <p>🎓 Intermediate – Pali Inter College (71%)</p>
//               <p>🎓 High School – Pali Inter College (81%)</p>
//             </CardContent>
//           </Card>
//         </section>

//         <Separator />

//         {/* HOBBIES */}
//         <section className="text-center space-y-4">
//           <h2 className="text-3xl font-semibold">Hobbies</h2>
//           <div className="flex justify-center gap-4 flex-wrap">
//             <Badge variant="secondary">🏸 Badminton</Badge>
//             <Badge variant="secondary">✈ Traveling</Badge>
//             <Badge variant="secondary">🎵 Listening Music</Badge>
//             <Badge variant="secondary">🏏 Playing Cricket</Badge>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

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
