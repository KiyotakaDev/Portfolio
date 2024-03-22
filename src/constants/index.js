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
  { name: "MongoDB", icon: () => import("/tech/mongodb.png") },
  { name: "Git", icon: () => import("/tech/git.png") },
  { name: "C#", icon: () => import("/tech/csharp.png") },
  { name: ".NET", icon: () => import("/tech/net.png") },
  { name: "PostgreSQL", icon: () => import("/tech/postgres.png") },
  { name: "Flutter", icon: () => import("/tech/flutter.png") },
];

const experiences = [
  {
    title: "Application documenter",
    company_name: "Claro",
    icon: () => import("/companies/claro.png"),
    iconBg: "#fff",
    date: "September 2022 - October 2023",
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
    icon: () => import("/experience/chappy.png"),
    iconBg: "#202020",
    date: "October 2023 - December 2023",
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
    iconBg: "#202020",
    date: "December 2023 - January 2024",
    points: [
      "API consumption.",
      "Use of zustand for state management.",
      "Data mapping for subsequent sampling",
      "Routing usage",
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
    name: "PokeAPI",
    description:
      "API consumptio for sampling data fetched from the PokeAPI. Searchable by name or character.",
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
  {
    name: "Hyprbash",
    description: "Automated installation of personal hyprland configuration for Arch Linux.",
    image: () => import("/projects/Working.png"),
    tags: [
      { name: "Bash", id: "bash" }
    ],
    source_code_link: "https://github.com/KiyotakaDev/HyprBash"
  }
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
