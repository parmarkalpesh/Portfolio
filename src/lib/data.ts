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

export const education = [
    {
        institution: "Marwadi University",
        degree: "Master of Computer Application (MCA)",
        duration: "2023 - Present",
    },
    {
        institution: "Marwadi University",
        degree: "Bachelor of Computer Application (BCA)",
        duration: "2020 - 2023",
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
