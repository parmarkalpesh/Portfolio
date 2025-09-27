import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback image
    return {
      id: 'fallback',
      imageUrl: 'https://picsum.photos/seed/fallback/600/400',
      description: 'A fallback image',
      imageHint: 'abstract',
    };
  }
  return image;
};

export const projects = [
  {
    title: "GreenStation",
    description: "A sustainable product marketplace.",
    image: getImage('project-1'),
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "SkillHub",
    description: "A student skill-sharing platform.",
    image: getImage('project-2'),
    stack: ["Next.js", "Express.js", "MySQL", "Bootstrap"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website.",
    image: getImage('project-3'),
    stack: ["React.js", "Node.js", "CSS3"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const experiences = [
  {
    company: "CodSoft",
    role: "Web Development Intern",
    duration: "1 Month",
    description: "Developed and deployed a responsive web application using React.js and Node.js, collaborating with developers through GitHub for version control.",
  },
];

export const testimonials = [
  {
    name: "Jane Smith",
    role: "CEO, Tech Solutions Inc.",
    quote: "Kalpesh is a phenomenal engineer. His technical expertise and leadership have been instrumental to our team's success. He consistently delivers high-quality work on time.",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    name: "Michael Brown",
    role: "Product Manager, Web Innovators",
    quote: "Working with Kalpesh was a pleasure. He has a keen eye for detail and a deep understanding of user experience. I was always impressed with his creative solutions to complex problems.",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    name: "Emily White",
    role: "Lead Designer, Digital Creations",
    quote: "Kalpesh is a collaborative and talented developer who bridges the gap between design and code effortlessly. He brings ideas to life in a way that exceeds expectations.",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
  },
];

export const articles = [
    {
        title: "The Rise of Server Components in React",
        description: "A deep dive into how React Server Components are changing the way we build web applications.",
        image: getImage('blog-1'),
        url: "#",
    },
    {
        title: "Mastering Tailwind CSS for Rapid UI Development",
        description: "Tips and tricks for leveraging Tailwind CSS to build beautiful, custom designs faster than ever.",
        image: getImage('blog-2'),
        url: "#",
    },
    {
        title: "Getting Started with Node.js and Express",
        description: "A beginner's guide to building a backend server with Node.js and the Express framework.",
        image: getImage('blog-3'),
        url: "#",
    }
];

export const skills = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Express.js", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "Git", icon: "git" },
];
