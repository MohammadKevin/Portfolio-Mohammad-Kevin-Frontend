"use client"

import { useState } from "react"

export default function Home() {

  const [showSkills, setShowSkills] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showCertificates, setShowCertificates] = useState(false)

  const skills = [
    {
      title: "Backend Development",
      list: [
        "Node.js",
        "NestJS",
        "Express.js",
        "REST API Development",
        "Authentication & Authorization"
      ],
      desc: "Building structured and scalable backend applications using Node.js and NestJS."
    },
    {
      title: "API Development",
      list: [
        "RESTful API Design",
        "JWT Authentication",
        "API Validation",
        "Postman API Testing",
        "Error Handling"
      ],
      desc: "Designing and implementing secure APIs for web applications."
    },
    {
      title: "Database Management",
      list: [
        "MySQL",
        "PostgreSQL",
        "Prisma ORM",
        "Database Schema Design",
        "Data Relationships"
      ],
      desc: "Designing and managing relational databases with efficient queries."
    },
    {
      title: "Development Tools",
      list: [
        "Git & GitHub",
        "Postman",
        "VS Code",
        "Prisma Studio",
        "Railway Deployment"
      ],
      desc: "Using modern development tools for backend development and deployment."
    }
  ];

  const projects = [
    {
      title: "Inventory Management API",
      desc: "Backend system for managing warehouse inventory and stock tracking.",
      tech: "Node.js • NestJS • MySQL • Prisma"
    },
    {
      title: "Room Reservation API",
      desc: "Backend service for managing room bookings and reservation schedules.",
      tech: "Node.js • NestJS • MySQL • Prisma"
    },
    {
      title: "Laundry Service Management API",
      desc: "Backend system handling laundry orders, customers and service tracking.",
      tech: "Node.js • NestJS • MySQL • Prisma"
    },
    {
      title: "Event Ticketing API",
      desc: "Backend platform for ticket sales, event registration and attendee management.",
      tech: "Node.js • NestJS • MySQL • Prisma"
    },
    {
      title: "Library Management API",
      desc: "Backend system for managing books, borrowing records and library users.",
      tech: "Node.js • NestJS • MySQL • Prisma"
    },
    {
      title: "Student Attendance API",
      desc: "Backend system for recording and managing student attendance data.",
      tech: "Node.js • NestJS • MySQL • Prisma"
    },
    {
      title: "Coffee Shop Management API",
      desc: "Backend system for managing menu items, orders and sales transactions.",
      tech: "Node.js • NestJS • MySQL • Prisma"
    },
    {
      title: "Boarding House Management API",
      desc: "Backend platform for managing boarding house rooms, tenants and payments.",
      tech: "Node.js • NestJS • MySQL • Prisma"
    }
  ]

  const certificates = [
  {
    title: "Future Founders League 2026",
    desc: "Top 10 National Business Model Canvas Competition organized by Forum Bisnis Cendekia.",
    year: "2026"
  },
  {
    title: "Introduction to Financial Literacy",
    desc: "Dicoding certification for completing the financial literacy course.",
    year: "2025"
  }
]

  return (
    <>

      <section id="home" className="py-20 px-4 sm:px-6 md:px-12 lg:px-[120px]">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-1/2">

            <p className="text-xl sm:text-2xl text-[#EBF4DD] font-semibold mb-2">
              Hello, I&apos;m 👋
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#BBE0EF] mb-2">
              Mohammad Kevin
            </h1>

            <h3 className="text-lg sm:text-xl font-semibold text-[#BBE0EF] mb-6">
              Backend Developer
            </h3>

            <p className="text-base sm:text-lg text-[#EBF4DD] mb-10 max-w-xl">
              I develop reliable backend systems and APIs for modern web applications using Node.js, NestJS and PostgreSQL.
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="#projects"
                className="px-6 py-3 bg-[#547792]/50 border-2 border-blue-400 text-[#BBE0EF] rounded-xl hover:bg-[#4988C4] hover:text-white transition"
              >
                View Project
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-400 text-[#BBE0EF] rounded-xl hover:bg-[#4988C4] hover:text-white transition"
              >
                Contact Me
              </a>

            </div>

          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/foto.png"
              alt="profile"
              className="w-[220px] sm:w-[260px] md:w-[320px] rounded-[40px] shadow-xl"
            />
          </div>

        </div>

      </section>



      <section id="skills" className="py-20 px-4 sm:px-6 md:px-12 lg:px-[120px]">

        <h2 className="text-xl sm:text-2xl text-[#BBE0EF] font-semibold underline mb-14">
          Skills
        </h2>


        <div className="hidden md:grid md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <div key={index} className="bg-[#BBE0EF] border border-blue-400 rounded-3xl p-6 shadow-sm hover:shadow-xl transition">

              <img src="/skills.png" className="rounded-xl mb-6" />

              <h3 className="text-lg font-semibold text-[#4988C4] mb-3">
                {skill.title}
              </h3>

              <ul className="text-[#4B5563] mb-4 space-y-1">
                {skill.list.map((item, i) => (<li key={i}>{item}</li>))}
              </ul>

              <p className="text-[#4988C4] text-sm">
                {skill.desc}
              </p>

            </div>

          ))}

        </div>


        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-8">

          {(showSkills ? skills : skills.slice(0, 2)).map((skill, index) => (

            <div key={index} className="bg-[#BBE0EF] border border-blue-400 rounded-3xl p-6 shadow-sm">

              <img src="/skills.png" className="rounded-xl mb-6" />

              <h3 className="text-lg font-semibold text-[#4988C4] mb-3">
                {skill.title}
              </h3>

              <ul className="text-[#4B5563] mb-4 space-y-1">
                {skill.list.map((item, i) => (<li key={i}>{item}</li>))}
              </ul>

              <p className="text-[#4988C4] text-sm">
                {skill.desc}
              </p>

            </div>

          ))}

        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <button
            onClick={() => setShowSkills(!showSkills)}
            className="px-6 py-3 border border-blue-400 text-[#BBE0EF] rounded-lg hover:bg-blue-400 hover:text-white transition"
          >
            {showSkills ? "Show Less" : "See All"}
          </button>
        </div>

      </section>



      <section id="projects" className="py-20 px-4 sm:px-6 md:px-12 lg:px-[120px]">

        <h2 className="text-xl sm:text-2xl text-[#BBE0EF] font-semibold underline mb-14">
          Projects
        </h2>


        <div className="hidden md:grid md:grid-cols-4 gap-8">

          {projects.map((project, index) => (

            <div key={index} className="bg-[#BBE0EF] border border-blue-400 rounded-3xl p-6 shadow-sm hover:shadow-xl">

              <img src="/project.png" className="rounded-xl mb-6" />

              <h3 className="text-lg font-semibold text-[#4988C4] mb-3">
                {project.title}
              </h3>

              <p className="text-[#4B5563] mb-4 text-sm">
                {project.desc}
              </p>

              <p className="text-[#4988C4] text-sm mb-6">
                {project.tech}
              </p>

              <a
                href="#"
                className="px-5 py-2 border border-blue-400 text-blue-500 rounded-lg hover:bg-blue-400 hover:text-white transition"
              >
                View in GitHub
              </a>

            </div>

          ))}

        </div>


        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-8">

          {(showProjects ? projects : projects.slice(0, 2)).map((project, index) => (

            <div key={index} className="bg-[#BBE0EF] border border-blue-400 rounded-3xl p-6 shadow-sm">

              <img src="/project.png" className="rounded-xl mb-6" />

              <h3 className="text-lg font-semibold text-[#4988C4] mb-3">
                {project.title}
              </h3>

              <p className="text-[#4B5563] mb-4 text-sm">
                {project.desc}
              </p>

              <p className="text-[#4988C4] text-sm mb-6">
                {project.tech}
              </p>

            </div>

          ))}

        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <button
            onClick={() => setShowProjects(!showProjects)}
            className="px-6 py-3 border border-blue-400 text-[#BBE0EF] rounded-lg hover:bg-blue-400 hover:text-white transition"
          >
            {showProjects ? "Show Less" : "See All"}
          </button>
        </div>

      </section>



      <section id="certificates" className="py-20 px-4 sm:px-6 md:px-12 lg:px-[120px]">

        <h2 className="text-xl sm:text-2xl text-[#BBE0EF] font-semibold underline mb-14">
          Certificates
        </h2>


        <div className="hidden md:grid md:grid-cols-2 gap-8">

          {certificates.map((cert, index) => (

            <div key={index} className="bg-[#BBE0EF] border border-blue-400 rounded-3xl p-6 shadow-sm">

              <img src="/certificate1.png" className="rounded-xl mb-6" />

              <h3 className="text-lg font-semibold text-[#225686] mb-2">
                {cert.title}
              </h3>

              <p className="text-[#4997e0] text-sm mb-2">
                {cert.desc}
              </p>

              <p className="text-[#225686] mt-4 font-semibold">
                {cert.year}
              </p>

            </div>

          ))}

        </div>


        <div className="grid md:hidden grid-cols-1 gap-8">

          {(showCertificates ? certificates : certificates.slice(0, 1)).map((cert, index) => (

            <div key={index} className="bg-[#BBE0EF] border border-blue-400 rounded-3xl p-6 shadow-sm">

              <img src="/certificate2.png" className="rounded-xl mb-6" />

              <h3 className="text-lg font-semibold text-[#225686] mb-2">
                {cert.title}
              </h3>

              <p className="text-[#4997e0] text-sm mb-2">
                {cert.desc}
              </p>

              <p className="text-[#225686] mt-4 font-semibold">
                {cert.year}
              </p>

            </div>

          ))}

        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <button
            onClick={() => setShowCertificates(!showCertificates)}
            className="px-6 py-3 border border-blue-400 text-[#BBE0EF] rounded-lg hover:bg-blue-400 hover:text-white transition"
          >
            {showCertificates ? "Show Less" : "See All"}
          </button>
        </div>

      </section>

    </>
  )
}