// import images
import Hero_person from "./assets/images/Hero/person.png";
import html from "./assets/images/Skills/html.webp"
import java from "./assets/images/Skills/java.webp"
import responsive from "./assets/images/Skills/responsive.jpg";
import github from "./assets/images/Skills/github.png";
import reactjs from "./assets/images/Skills/react.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "I'm Horiya Arif",
    // firstName: "JOHN",
    // LastName: "ALEX",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        
        text: "I’m a front-end developer creating responsive, user-friendly interfaces that deliver seamless and engaging digital experiences.",
      },
      
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML & CSS",
        para: "Proficiency in creating structured, well-styled, and responsive layouts.",
        logo: html,
        description: [
          "Building semantic and accessible HTML structures.",
          "Crafting visually appealing designs with modern CSS techniques.",
          "Implementing responsive layouts with media queries and CSS Grid/Flexbox.",
          "Creating reusable and maintainable stylesheets with BEM methodology.",
          "Using animations and transitions for interactive user experiences.",
        ],
      },
      {
        name: "JavaScript",
        para: "Expertise in adding interactivity and dynamic functionality to web pages.",
        logo: java,
        description: [
          "Manipulating the DOM dynamically to create interactive elements.",
          "Writing clean, modular, and reusable JavaScript functions.",
          "Fetching and handling API data with `fetch` or `Axios`.",
          "Leveraging ES6+ features like destructuring, promises, and arrow functions.",
          "Debugging and optimizing JavaScript code for performance.",
        ],
      },
      {
        name: "React js",
        para: "Skilled in building modular, scalable, and dynamic user interfaces.",
        logo: reactjs,
        description: [
          "Building reusable components and managing state effectively with `useState` and `useEffect`.",
          "Implementing React Router for seamless navigation.",
          "Leveraging props and context API for data management.",
          "Integrating third-party libraries and plugins like Typewriter or AOS.",
          "Using React developer tools for debugging and performance monitoring.",
        ],
      },
      {
        name: "Tailwind CSS",
        para: "Efficient in designing responsive and modern UIs with utility-first CSS.",
        logo: tailwind,
        description: [
          "Designing responsive interfaces quickly with utility-first classes.",
          "Customizing themes and extending styles with Tailwind configuration.",
          "Implementing hover, focus, and active states for interactivity.",
          "Ensuring consistency and minimal CSS bloat in projects.",
          "Combining Tailwind with React or other libraries for modern UI designs.",
        ],
      },
      {
        name: "Version Control (Git)",
        para: "Experience in tracking changes and collaborating on code with Git/GitHub.",
        logo: github,
        description: [
          "Managing project versions and collaborating using Git branches.",
          "Handling pull requests and resolving merge conflicts on GitHub.",
          "Writing clear and descriptive commit messages.",
          "Rolling back to previous versions to fix bugs or errors.",
          "Using `.gitignore` to manage sensitive files and keep repositories clean.",
        ],
      },
      {
        name: "Responsive Design",
        para: "Ability to ensure websites are mobile-friendly and optimized for all screen sizes.",
        logo: responsive,
        description: [
          "Building mobile-first layouts for optimized performance.",
          "Testing designs across multiple devices and screen sizes.",
          "Using relative units (%, em, rem) for fluid layouts.",
          "Leveraging CSS tools like Flexbox and Grid for adaptive designs.",
          "Ensuring cross-browser compatibility and accessibility.",
        ],
      },
    ],
    icon: MdArrowForward,
  },
  
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: responsive,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "horiyaarif13@gamil.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+92 318430977",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Linkdln",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/horiya-arif-04198032a/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
