import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "Simple notes app",
    description:
      "A minimalist notes app built with Next.js, TypeScript, and Tailwind CSS, featuring a rich text editor and dark mode with a navy blue and light blue color palette.",
    icon: "/skills/typescript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/BryanJericho/simpleNotes-app",
    url: "https://simple-notes-app-lime.vercel.app/",
    tags: ["Typescript", "Next JS","Tailwind"],
  },
  {
    id: "e-commerce-app-mern",
    title: "Mindparents",
    description:
      " Developed a web-based information system using AI to assist parents.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/naddiyh/mindparents-fe",
    url: "https://mindparents.vercel.app/",
    tags: ["Next.js", "Firebase", "Typescript", "Firebase"],
  },
  {
    id: "social-media-app-flutter",
    title: "Website of Production Team",
    description:
      "I created this website with some collaboration and also enchanting my team works skill (Still in progress)",
    icon: "/skills/github.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/BryanJericho/ProductionTeam",
    url: "https://github.com/BryanJericho/ProductionTeam",
    tags: ["Html", "CSS", "Firebase", "Tailwind"],
  },
  {
    id: "video-calling-app-flutter",
    title: "Sistem Akademik",
    description:
      "A very simple academic system to organize their students and lecturers",
    icon: "/skills/firebase.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/BryanJericho/siakad23",
    url: "https://siakad-pi.vercel.app/",
    tags: ["Flask", "Python", "Firebase", "Jinja"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Black Jack Game",
    description:
      "My very first project as a requirement for my final submission at Rocket Academy",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/BryanJericho/blackJack",
    url: "https://bryanjericho.github.io/blackJack/",
    tags: ["Javascript"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
