
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Devoloper ",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Observability & Monitoring",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Reactjs Developer",
    company_name: "Self Taught",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product team, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Learning new ways to make my react skill better",
    ],
  },
  {
    title: "Freelance DevOps Engineer ",
    company_name: "As the projects come",

    iconBg: "#E6DEDD",
    date: "Jan 2022 - Aug 2023",
    points: [
      "Developed a CI/CD pipeline using AWS dev tools, Jenkins and Ansible to deploy a web application to AWS..",
      "Implemented a monitoring solution using CloudWatch to track the performance of an AWS-based application.",
      "Built a security automation tool using Terraform to harden the security of an AWS environment.",
      "Developed and maintained AWS infrastructure for a variety of applications like this one..",
    ],
  },
  {
    title: "Security and Monitoring",
  
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Till Date",
    points: [
      "Implementing and managing security controls and measures within AWS environments.",
      "Monitoring and analyzing security logs and alerts to identify potential threats and vulnerabilities.",
      "Implementing responsive design and ensuring cross-browser compatibilityAssisting in incident response and conducting investigations into security incidents..",
      "Participating in code reviews and providing constructive feedback to other developKeeping up to date with emerging security threats, vulnerabilities, and industry best practices.ers.",
    ],
  },
  {
    title: "Construction Project Manager",
    company_name: "Krystall Model Design Concept",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2015 - Present",
    points: [
      "YUSUF SOJE is a civil engineer who has rapidly transitioned into a multi-talented professional, excelling as a DevOps engineer, web developer, and data scientist. Developing and maintaining web applications using React.js and other related technologies.",
      "Their adaptability and passion for learning enabled them to acquire diverse skills in a short time. Proficient in DevOps tools, they automate software development and deployment processes.",
      "Skilled in web development with React and Node.js, they create user-friendly applications. With expertise in data science and machine learning, they extract insights and build predictive models.",
      "This resilient and ambitious professional brings a holistic understanding of technology to solve complex challenges.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I played a role in introducing him to the tech industry, and his remarkable achievements since then makes me extremely proud.",
    name: "Engr Gayus Ishaku",
    designation: "Senior Space Engineer, AI Expert",
    company: "NASRDA",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "In my experience, I have never come across a self-taught web developer who has displayed such rapid and impressive growth as Soje. His remarkable achievements speak volumes about his dedication and aptitude in the field.",
    name: "Mr Musa Yusuf",
    designation: "Lecturer, AI Expert",
    company: "Bingham University",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I had the chance to help him navigate his way into the tech industry, and observing his exceptional accomplishments since then fills me with a profound sense of pride",
    name: "Dr. Charles Isa Saidu",
    designation: "Lecturer,Senior Softwear Engineer",
    company: "Baze University",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My React Portfolio",
    description:
      "Presenting my React.js expertise by crafting a visually captivating 3D Portfolio Website using Three.js and React.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind,,tilt",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "OpenAI GPT Web Summerizer",
    description:
      "Streamline your reading experience with Summerize, a powerful open-source article summarizer designed to condense lengthy articles into concise and clear summaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chatpgtapi",
        color: "green-text-gradient",
      },
      {
        name: "react, vite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "MERN Stack (Login Page)",
    description:
      "These demonstrate my proficiency in building a robust login, registration, password reset with OTP verification, and profile update functionality using the MERN (MongoDB, Express.js, React, and Node.js) Stack.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };