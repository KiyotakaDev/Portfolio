const navLinks = [
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Projects", id: "projects" },
];

const technologies = [
  { name: "HTML5", icon: () => import("/tech/html.png") },
  { name: "CSS3", icon: () => import("/tech/css.png") },
  { name: "JavaScript", icon: () => import("/tech/javascript.png") },
  { name: "TailwindCSS", icon: () => import("/tech/tailwindcss.png") },
  { name: "ReactJS", icon: () => import("/tech/reactjs.png") },
  { name: "ThreeJS", icon: () => import("/tech/threejs.png") },
  { name: "Zustand", icon: () => import("/tech/zustand.png") },
  { name: "NodeJS", icon: () => import("/tech/nodejs.png") },
  { name: "ExpressJS", icon: () => import("/tech/expressjs.png") },
  // { name: "MongoDB", icon: () => import("/tech/mongodb.png") },
  { name: "Git", icon: () => import("/tech/git.png") },
  { name: "C#", icon: () => import("/tech/csharp.png") },
  { name: ".NET", icon: () => import("/tech/net.png") },
  { name: "PostgreSQL", icon: () => import("/tech/postgres.png") },
  { name: "Flutter", icon: () => import("/tech/flutter.png") },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Claro",
    icon: () => import("/companies/claro.png"),
    iconBg: "#fff",
    date: "2022 - 2023",
    points: [
      "Trained by an agile group of 5 people.",
      "Read queries made in PL/SQL.",
      "Functionality testing of applications made by other teams.",
      "Application efficiency test.",
      "Documentation of previously tested applications.",
    ],
  },
  {
    title: "Portfolio",
    company_name: "Personal experience",
    icon: () => import("/experience/portfolio.png"),
    iconBg: "#404040",
    date: "2023 - 2023",
    points: [
      "Higher-order components (HOCs).",
      "Use of routing.",
      "ThreeJS along with React-fiber.",
      "Framer Motion for animations.",
      "Use of custo shaders.",
      "Dynamic imports.",
      "Use of sync and async components load.",
    ],
  },
  {
    title: "PokeAPI",
    company_name: "Personal experience",
    icon: () => import("/experience/poke.png"),
    iconBg: "#FFF",
    date: "2023 - 2024",
    points: [
      "API consumption.",
      "Use of zustand for state management.",
      "Data mapping for subsequent sampling.",
      "Routing usage.",
    ],
  },
  {
    title: "Ecommerce",
    company_name: "Personal experience",
    icon: () => import("/experience/next.png"),
    iconBg: "#FFF",
    date: "April 2024",
    points: ["Use of NextJS.", "Use of prisma with PostgreSQL.", "Next-Auth."],
  },
  {
    title: "Hyprbash",
    company_name: "Personal experience",
    icon: () => import("/experience/hyprbash.png"),
    iconBg: "#404040",
    date: "2024 - Currently",
    points: [
      "Automatize scripts using bash.",
      "Personal Hyprland configuration.",
      "Bash commands.",
      "Arch Linux distro usage.",
    ],
  },
];

const projects = [
  {
    name: "Portfolio",
    description: "My personal portfolio :D.",
    tags: [
      { name: "ReactJS", id: "react" },
      { name: "TailwindCSS", id: "tailwind" },
      { name: "ThreeJS", id: "three" },
      { name: "Framer Motion", id: "framer" },
      { name: "React Router", id: "router" },
    ],
    image: () => import("/projects/Portfolio.png"),
    source_code_link: "https://github.com/KiyotakaDev/Portfolio",
  },
  {
    name: "Ecommerce",
    description: "Ecommerce full-stack app using NextJS.",
    image: () => import("/projects/Ecommerce.png"),
    tags: [
      { name: "NextJS", id: "next" },
      { name: "TailwindCSS", id: "tailwind" },
      { name: "Zustand", id: "zustand" },
      { name: "Prisma", id: "prisma" },
      { name: "Framer Motion", id: "framer" },
    ],
    source_code_link: "https://github.com/KiyotakaDev/Ecommerce",
  },
  {
    name: "Hyprbash",
    description:
      "Automated installation of personal hyprland configuration for Arch Linux.",
    image: () => import("/projects/Working.png"),
    tags: [{ name: "Bash", id: "bash" }],
    source_code_link: "https://github.com/KiyotakaDev/HyprBash",
  },
  {
    name: "PokeAPI",
    description: "PokeAPI consumption, pokemon search, pokemon data.",
    tags: [
      { name: "React", id: "react" },
      { name: "TailwindCSS", id: "tailwind" },
      { name: "Zustand", id: "zustand" },
      { name: "React Router", id: "router" },
    ],
    image: () => import("/projects/PokemonAPI.png"),
    source_code_link: "https://github.com/KiyotakaDev/PokeApi",
    deploy_link: "https://testing-olive-alpha.vercel.app/",
  },
  {
    name: "Heisig Template",
    description: "Anki template with Japanese recognition for Kanji learning.",
    tags: [
      { name: "HTLM", id: "three" },
      { name: "CSS", id: "tailwind" },
    ],
    image: () => import("/projects/Heisig.png"),
    source_code_link: "https://github.com/KiyotakaDev/Portfolio",
  },
];

const contact = [
  {
    name: "Linkedin",
    reference: "https://www.linkedin.com/in/camilo-solarte/",
    icon: () => import("/contact/linkedin.svg"),
  },
  {
    name: "Github",
    reference: "https://github.com/KiyotakaDev",
    icon: () => import("/contact/github.svg"),
  },
];

export { navLinks, technologies, experiences, projects, contact };
