import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaRegSmileWink } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import type { Header, About, Project, Contact } from "./dataTypes";

const header: Header = {
  homepage: "/",
  title: "TM.",
};

const about: About = {
  name: "Talgat Minikhanov",
  role: "Full-Stack Engineer",
  description:
    "Hey there! I’m a full-stack wizard who loves to create beautiful and responsive websites. I kinda know HTML, CSS, JavaScript, MERN-stack and couple other stuff. Oh and I’m always hungry to learn more. Let’s work together to create something amazing. 😊",
  resume:
    "https://drive.google.com/file/d/1LNAmmUX0xvUR9pydnFhDGbF7LvBeEbVn/view?usp=sharing",
  social: {
    telegram: "https://t.me/minikhanov_t",
    github: "https://github.com/awocato",
  },
};

const projects: Project[] = [
  {
    name: "Booking App clone",
    description:
      "This project is a clone of booking.com. It was built with Next.js, TypeScript, and Tailwind CSS. It also uses shadcn for ui components. Data is scraped from booking.com using trial version of Oxylabs. Unfortunately, search doesn't work in the live version because of the Vercel's limit of 10 seconds for each request.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Oxylabs"],
    sourceCode: "https://github.com/awocato/booking-next",
    livePreview: "https://booking.awocato.uz",
    image: "https://i.postimg.cc/R0pWrtv0/booking.png",
  },
  {
    name: "E-Commerce App",
    description:
      "This project is a practical example of a fully functional e-commerce website. It was built with Next.js, TypeScript, and Tailwind CSS. It also uses shadcn for ui components. Mock data is used for the products. Project is fully responsive. Cart is stored in the browser's local storage thanks to zustand.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mockify",
      "shadcn",
      "zustand",
    ],
    sourceCode: "https://github.com/awocato/awoshop",
    livePreview: "https://awoshopnext.vercel.app/",
    image: "https://i.postimg.cc/ncKMFgng/shop.png",
  },

  {
    name: "noteSAAS",
    description:
      "This project is a note-taking app. It was built with Next.js, TypeScript, and Tailwind CSS. It also uses shadcn for ui components. It uses Prisma and Supabase for the database. It uses Stripe for payments. It is fully responsive. It is deployed on Vercel. It is fully functional.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn", "Prisma", "Supabase", "Kinde","Stripe"],
    sourceCode: "https://github.com/awocato/saas",
    livePreview: "https://saas-rho-topaz.vercel.app/",
    image: "https://i.postimg.cc/j5s6hNjy/notesaas.png"
  },

  {
    name: "chat_",
    description: "Chat app using MERN-stack. It uses MongoDB, Express, React,SocketIO and Node.js.Fully responsive.",
    stack: ["MongoDB", "Express", "React", "SocketIO", "Node.js", "shadcn", "TailwindCSS"],
    sourceCode: "https://github.com/awocato/mern-chat",
    livePreview: "https://mern-chat-orbn.onrender.com/",
    image: "https://i.postimg.cc/TwCL85tQ/chat.png"
  }
];

const skills = [
  {icon: <FaHtml5 />, name: 'HTML5', proficency: 'around 85%'},
  {icon: <FaCss3Alt />, name: 'CSS3', proficency: 'around 80%'},
  {icon: <IoLogoJavascript />, name: 'JavaScript', proficency: 'around 60%'},
  {icon: <FaReact />, name: 'React', proficency: 'around 55%'},
  {icon: <FaSass />, name: 'Sass', proficency: 'around 70%'},
  {icon: <FaGithub />, name: 'GitHub', proficency: 'around 80%'},
  {icon: <TbBrandNextjs />, name: 'Next.js', proficency: 'around 45%'},
  {icon: <SiTypescript />, name: 'TypeScript', proficency: 'around 65%'},
  {icon: <SiTailwindcss/>, name: 'TailwindCSS', proficency: 'around 55%'},
  {icon: <FaNode />, name: 'Node.js', proficency: 'around 40%'},
  {icon: <SiMongodb />, name: 'MongoDB', proficency: 'around 40%'},
  {icon: <FaRegSmileWink />, name: 'and more to learn...'},
];

const contact: Contact = {
  email: "minikhanov.talgat@gmail.com",
};

export { header, about, projects, skills, contact };