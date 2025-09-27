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
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize and suggest tasks.",
    image: getImage('project-1'),
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit AI"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with a custom CMS and payment integration.",
    image: getImage('project-2'),
    stack: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Interactive Data Visualization",
    description: "A web-based tool for visualizing complex datasets with interactive charts and maps.",
    image: getImage('project-3'),
    stack: ["D3.js", "React", "Python", "Flask"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Mobile Banking App",
    description: "A secure and user-friendly mobile app for a modern digital bank.",
    image: getImage('project-4'),
    stack: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const experiences = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Software Engineer",
    duration: "2020 - Present",
    description: "Led the development of a new microservices-based architecture, improving system scalability by 40%. Mentored junior engineers and conducted code reviews.",
  },
  {
    company: "Web Innovators",
    role: "Frontend Developer",
    duration: "2018 - 2020",
    description: "Developed and maintained responsive user interfaces for client websites using React and Vue.js. Collaborated with designers to implement pixel-perfect designs.",
  },
  {
    company: "Digital Creations",
    role: "Junior Web Developer",
    duration: "2016 - 2018",
    description: "Assisted in the development of WordPress themes and plugins. Gained experience in HTML, CSS, JavaScript, and PHP.",
  },
];

export const testimonials = [
  {
    name: "Jane Smith",
    role: "CEO, Tech Solutions Inc.",
    quote: "John is a phenomenal engineer. His technical expertise and leadership have been instrumental to our team's success. He consistently delivers high-quality work on time.",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    name: "Michael Brown",
    role: "Product Manager, Web Innovators",
    quote: "Working with John was a pleasure. He has a keen eye for detail and a deep understanding of user experience. I was always impressed with his creative solutions to complex problems.",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    name: "Emily White",
    role: "Lead Designer, Digital Creations",
    quote: "John is a collaborative and talented developer who bridges the gap between design and code effortlessly. He brings ideas to life in a way that exceeds expectations.",
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
        title: "A Guide to 3D Web Graphics with Three.js",
        description: "Getting started with Three.js to create stunning, interactive 3D experiences on the web.",
        image: getImage('blog-3'),
        url: "#",
    }
];

export const skills = [
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Figma", icon: "figma" },
];
