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
];

const experiences = [
  {
    title: "PokeAPI",
    company_name: "Personal experience",
    icon: () => import("/experience/poke.png"),
    iconBg: "#202020",
    date: "September 2022 - November 2022",
    points: [
      "Querying data with async and await along with fecth",
      "Quering data with .then() along with fetch",
      "Data mapping for subsequent sampling",
      "Routing usage",
    ],
  },
  {
    title: "Application documenter",
    company_name: "Claro",
    icon: () => import("/companies/claro.png"),
    iconBg: "#fff",
    date: "November 2022 - October 2023",
    points: [
      "In my intership whit the company they assigned me to document applications",
      "Teamwork if there were problems with any application",
      "Make queries to a database for subsequent sampling",
    ],
  },
  {
    title: "Chappy",
    company_name: "Personal experience",
    icon: () => import("/experience/chappy.png"),
    iconBg: "#202020",
    date: "January 2023 - April 2023",
    points: [
      "User authentication",
      "API REST",
      "Use of MERN",
      "More complex routing",
      "Use of tokens for application and data security",
      "Use of sockets for real-time chat",
    ],
  },
];

export { navLinks, technologies, experiences };
