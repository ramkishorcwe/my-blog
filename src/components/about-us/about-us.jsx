// import React from 'react';
// import { Flex, Card } from 'antd';
// import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

// const AboutUs = () => {
//   const containerStyle = {
//     padding: '20px',
//     maxWidth: '100%',
//     margin: '0 auto',
//     fontFamily: 'Arial, sans-serif',
//     color: '#282c34',
//     textAlign: 'center',
//   };

//   const headingStyle = {
//     fontSize: '32px',
//     marginBottom: '20px',
//   };

//   const paragraphStyle = {
//     fontSize: '18px',
//     lineHeight: '1.6',
//     marginBottom: '20px',
//   };

//   const socialLinksStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '15px',
//     marginBottom: '30px',
//   };

//   return (
//     <Card className='header-footer-gap' style={containerStyle}>
//       <Flex gap={20}>
//         <Card>
//           <h1 style={headingStyle}>About Me</h1>
//           <p style={paragraphStyle}>
//             Hi, I’m Ram Kishor, a passionate software developer specializing in JavaScript and React.
//             I love creating web applications that solve real-world problems and bring ideas to life.
//             With expertise in modern web development techniques and tools, I strive to deliver
//             intuitive and high-performing user experiences.
//           </p>
//           <p style={paragraphStyle}>
//             I’m constantly learning and experimenting with new technologies to stay at the forefront
//             of the tech industry. When I’m not coding, I enjoy exploring new places, reading tech blogs,
//             and sharing my knowledge with the community.
//           </p>

//           <div style={socialLinksStyle}>
//             <a href="mailto:iamrkishoryadav@example.com" >
//               <MailOutlined />
//             </a>
//             <a href="https://www.linkedin.com/in/ram-kishor-47734a206/" target="_blank" rel="noopener noreferrer" >
//               <LinkedinOutlined />
//             </a>
//             <a href="https://www.instagram.com/ram.kishor_yadav?igsh=MW9wN2Rmb3M4YjV0cQ==" target="_blank" rel="noopener noreferrer" >
//               <InstagramOutlined />
//             </a>
//             <a href="https://www.facebook.com/ram.kishor.946954" target="_blank" rel="noopener noreferrer" >
//               <FacebookOutlined />
//             </a>
//           </div>
//         </Card>
//         <Card>
//           <Contact />
//         </Card>
//       </Flex>
//     </Card>
//   );
// };


// const Contact = () => {
//   const containerStyle = {
//     padding: '20px',
//     maxWidth: '800px',
//     margin: '0 auto',
//     textAlign: 'center',
//     fontFamily: 'Arial, sans-serif',
//   };

//   const headingStyle = {
//     fontSize: '28px',
//     color: '#282c34',
//     marginBottom: '20px',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '15px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     fontSize: '16px',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     fontSize: '16px',
//     color: 'white',
//     backgroundColor: '#61dafb',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#21a1f1',
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headingStyle}>Contact Us</h1>
//       <form>
//         <input type="text" placeholder="Your Name" style={inputStyle} required />
//         <input type="email" placeholder="Your Email" style={inputStyle} required />
//         <textarea
//           placeholder="Your Message"
//           style={{ ...inputStyle, height: '120px', resize: 'none' }}
//           required
//         ></textarea>
//         <button
//           type="submit"
//           style={buttonStyle}
//           onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
//           onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AboutUs;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code, Rocket, Users } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-16">

        {/* HERO */}
        <section className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm">
            About Us
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            We Build Modern Web Experiences
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Passionate about clean code, scalable architecture, and beautiful user experiences.
          </p>
        </section>

        {/* MISSION / VISION */}
        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              To create fast, secure, and scalable applications using modern
              technologies while delivering real value to users.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              To become a trusted name in building high-quality digital products
              with strong performance and elegant design.
            </CardContent>
          </Card>
        </section>

        {/* SKILLS / TECH */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Tech We Love</h2>
            <p className="text-muted-foreground">
              Tools and technologies we use daily
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "React",
              "Vite",
              "Tailwind CSS",
              "shadcn/ui",
              "Redux",
              "Appwrite",
              "Node.js",
              "Git & GitHub",
            ].map((tech) => (
              <Card key={tech} className="text-center">
                <CardContent className="p-4 font-medium">
                  {tech}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* ABOUT DEVELOPER / TEAM */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are developers who love solving real-world problems using clean,
              maintainable code. From personal projects to production-ready apps,
              we focus on performance, UX, and scalability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This portfolio showcases projects built with modern best practices
              and real backend integrations.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                What Makes Us Different
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>✔ Clean & scalable architecture</p>
              <p>✔ Modern UI & UX principles</p>
              <p>✔ Real backend integrations</p>
              <p>✔ Performance-focused development</p>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  )
}


// export default AboutUs;


