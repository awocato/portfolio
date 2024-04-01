import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaRegSmileWink } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import type { Header, About, Project, Contact } from "./dataTypes";

const header: Header = {
  homepage: "/",
  title: "TM.",
};

const about: About = {
  name: "Talgat Minikhanov",
  role: "Front-End Engineer",
  description:
    "Hey there! I’m a front-end wizard who loves to create beautiful and responsive websites. I kinda know HTML, CSS, JavaScript and couple other stuff. Oh and I’m always hungry to learn more. Let’s work together to create something amazing. 😊",
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
      "Notes app made with Next.js, TypeScript, and Tailwind CSS. It also uses shadcn for ui components. It uses Prisma, Supabase to store data and Kinde for custom authentification. Project is fully responsive.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn", "Prisma", "Supabase", "Kinde"],
    sourceCode: "https://github.com/awocato/saas",
    livePreview: "https://saas-rho-topaz.vercel.app/",
    image: "https://i.postimg.cc/j5s6hNjy/notesaas.png"
  },
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
  {icon: <FaRegSmileWink />, name: 'and more to learn...'},
];

const contact: Contact = {
  email: "minikhanov.talgat@gmail.com",
};

export { header, about, projects, skills, contact };