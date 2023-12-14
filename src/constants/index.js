const navLinks = [
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Projects", id: "projects"}
]

const technologies = [
  { name: "HTML5", icon: () => import('/tech/html.png')},
  { name: "CSS3", icon: () => import('/tech/css.png')}
]

export { navLinks, technologies }
