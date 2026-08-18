#set page(
  paper: "us-letter",
  margin: (x: 0.6in, top: 0.35in, bottom: 0.35in),
)

#set text(
  font: "Liberation Serif",
  size: 9.5pt,
  fill: rgb("#1a1a1a"),
)

#set par(leading: 1em)

#let section-title(title) = {
  v(2pt)
  text(size: 10pt, weight: "bold", tracking: 1pt)[#title]
  line(length: 100%, stroke: 0.6pt)
  v(1.5pt)
}

#let entry(head, right: "", sub: none) = {
  grid(
    columns: (1fr, auto),
    column-gutter: 10pt,
    text(size: 10.5pt, weight: "bold")[#head],
    text(size: 9.5pt)[#right],
  )
  if sub != none {
    text(size: 9pt, style: "italic")[#sub]
  }
  v(0.5pt)
}

#let bullets(..items) = {
  for (i, it) in items.pos().enumerate() {
    par[
      #h(7pt)•#h(4pt)#it
    ]
    if i < items.pos().len() - 1 { v(0.5pt) }
  }
}

#align(center)[
  #text(size: 14pt, weight: "bold", tracking: 1pt)[ALBERT JAY B. ROSIQUE]
  #v(2pt)
  #text(size: 8.5pt)[
    +63 968 666 6783 #h(5pt)|#h(5pt) albertjaybarrororoisque\@gmail.com #h(5pt)|#h(5pt) aljayz.github.io/portfolio/ \
    linkedin.com/in/albert-jay-rosique-4bb141327 #h(5pt)|#h(5pt) github.com/Aljayz
  ]
]
#line(length: 100%, stroke: 1pt)

#section-title("Education")
#entry(
  "BS Computer Science — Mindanao State University, Marawi City, Philippines",
  right: "Jul 2022 – Jul 2026",
  sub: "Cum Laude",
)
#bullets(
  [Focus areas: AI, Cloud Computing, Web Development, Distributed Computing, Mobile Development, Cybersecurity.],
)

#section-title("Technical Skills")
#bullets(
  [*Languages:* Python, JavaScript, TypeScript, C++, C\#, HTML5, CSS3, Bash, Markdown],
  [*Frameworks & Libraries:* Node.js, Express, React, React Native, Next.js, Vue.js, Nuxt.js, Quasar, Tailwind CSS, Sequelize, .NET],
  [*Database & Cloud:* PostgreSQL, MySQL, Supabase, Firebase, Docker],
  [*Tools & DevOps:* Linux, Git, GitHub, GitLab, Figma, Adobe Photoshop],
)

#section-title("Experience")
#entry(
  "UI/UX Designer Intern & Front End Developer Intern",
  right: "Jun 2025 – Jul 2025",
  sub: "Centralized Cloud Computing International Inc., BGC, Taguig, Philippines",
)
#bullets(
  [Delivered UI/UX designs 3× weekly using Figma and Adobe Photoshop.],
  [Integrated backend-to-frontend systems and converted Figma designs into responsive web applications.],
)

#section-title("Projects")
#entry(
  "JobVest — Lead Developer",
  right: "2026",
  sub: "AI employment platform — job-vest-web.vercel.app",
)
#bullets(
  [Built an AI employment platform for Mindanao that translates informal, vernacular work experience into formal competencies employers search for.],
  [Stack: Next.js 16, React 19, TypeScript, Tailwind, Zustand, Supabase, Prisma, Firebase Auth, Gemini AI, Groq, PWA, Turborepo.],
)

#entry(
  "PTCAO Digital File Inventory System — Software Architect & Backend Lead",
  right: "Turned Over",
  sub: "Provincial Tourism, Culture and the Arts Office, Lanao del Sur",
)
#bullets(
  [Architected and led the backend of a microservice-based digital file inventory system for offline-capable field use; contributed to frontend as well.],
  [Developed to 85–90% completion, then turned over to the Provincial Development Team as 100% government-owned software.],
  [Stack: NestJS 11, Next.js 16, TypeScript, PostgreSQL 15, Prisma 6, MinIO, Redis, Docker Compose, BullMQ, TanStack Query, JWT.],
)

#entry(
  "Additional Projects",
)
#bullets(
  [*Nexube* — desktop media streaming app built with Electron, React, and Vite (github.com/Aljayz/nexube).],
)

#section-title("Achievements")
#bullets(
  [*3rd Placer* — Ranaw Tech-Solve Hackathon (Provincial Hackathon) for PTCAO Digital File Inventory System.],
  [*3rd Runner Up* — AWS Student Builder Innovation Cup 2026 (Lead Developer, JobVest).],
  [*1st Runner Up* — Philippine Army CTF Cyber Security Competition (2025).],
  [*Champion* — College-Based Programming Contest (2023).],
)
