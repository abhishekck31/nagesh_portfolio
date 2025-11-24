const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
    showOnMobile: false,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
    showOnMobile: false,
  },
];

const blogPosts = [];

const techStack = [
  {
    category: "Video Editing",
    items: ["Premiere Pro", "Final Cut Pro", "DaVinci Resolve"],
  },
  {
    category: "Motion Graphics",
    items: ["After Effects", "Cinema 4D", "Nuke"],
  },
  {
    category: "3D Animation",
    items: ["Blender", "Maya", "Houdini"],
  },
  {
    category: "Design Tools",
    items: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    category: "Compositing",
    items: ["After Effects", "Nuke", "Fusion"],
  },
  {
    category: "Workflow",
    items: ["Frame.io", "Adobe Creative Cloud", "Notion"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/Nagesh1.jpg",
  },
  {
    id: 2,
    img: "/images/Nagesh2.jpg",
  },
  {
    id: 3,
    img: "/images/Nagesh3.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Ai film",
      icon: "/icons/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      desktopPosition: "top-10 left-5",
      children: [
        {
          id: 1,
          name: "AI Film Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/dQw4w9WgXcQ", // Placeholder
          position: "top-10 left-5",
        },
      ],
    },
    {
      id: 4,
      name: "Short Videos",
      icon: "/icons/folder.png",
      kind: "folder",
      position: "top-10 left-32",
      desktopPosition: "top-40 left-5",
      children: [
        {
          id: 1,
          name: "Short Video Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/dQw4w9WgXcQ", // Placeholder
          position: "top-10 left-5",
        },
      ],
    },
    {
      id: 2,
      name: "Long videos",
      icon: "/icons/folder.png",
      kind: "folder",
      position: "top-10 left-60",
      desktopPosition: "top-72 left-5",
      children: [
        {
          id: 1,
          name: "Long Video Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/dQw4w9WgXcQ", // Placeholder
          position: "top-10 left-5",
        },
      ],
    },
    {
      id: 3,
      name: "Motion Graphics",
      icon: "/icons/folder.png",
      kind: "folder",
      position: "top-10 left-[22rem]",
      desktopPosition: "top-[26rem] left-5",
      children: [
        {
          id: 1,
          name: "Motion Graphics Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/dQw4w9WgXcQ", // Placeholder
          position: "top-10 left-5",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "experience.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Professional Experience",
      experiences: [
        {
          title: "Assistant Video Editor",
          company: "Avalanche",
          duration: "Mar 2024 - Present · 1 yr 9 mos",
          location: "Remote · Full-time",
          responsibilities: [
            "Led motion design and editing for the Adoption Campaign, creating long-form, high-retention videos with minimalist animated styles",
            "Designed cinematic explainer shorts on blockchain, DeFi, and ecosystem topics",
            "Collaborated closely with creative leads to ensure storytelling clarity and visual coherence"
          ],
          skills: ["After Effects", "Adobe Premiere Pro", "Motion Graphics", "Video Editing"]
        },
        {
          title: "Senior Graphic Designer",
          company: "UPSC Infocademy",
          duration: "Jan 2022 - Mar 2024 · 2 yrs 3 mos",
          location: "Tamil Nadu, India · Remote · Part-time",
          responsibilities: [
            "Designed the Monthly Info-Bite Magazine and visual assets for the Mains100 Series",
            "Created over 50+ Instagram carousel posts and short-form visual explainers tailored to educational content",
            "Worked in a high-output content team focused on design accuracy and visual learning"
          ],
          skills: ["Graphic Design", "Magazine Design", "Social Media Content", "Visual Communication"]
        },
        {
          title: "Video Editor",
          company: "Sizi Stocks",
          duration: "Oct 2019 - Dec 2021 · 2 yrs 3 mos",
          location: "Bhiwandi, Maharashtra, India · On-site · Full-time",
          responsibilities: [
            "Edited over 100+ videos across two multilingual channels covering stock market content from basics to advanced strategies",
            "Produced stock market explainer series with crisp motion and clear instructional pacing",
            "Also edited vlog-style content and sizzle reels for internal and external use"
          ],
          skills: ["Video Editing", "Motion Graphics", "Content Production", "Multilingual Content"]
        }
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

const APPLICATIONS_LOCATION = {
  id: 5,
  type: "applications",
  name: "Applications",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Premiere Pro",
      icon: "/icons/Softwares/PremeirePro.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
    },
    {
      id: 2,
      name: "After Effects",
      icon: "/icons/Softwares/AfterAffects.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-40",
    },
    {
      id: 3,
      name: "Illustrator",
      icon: "/icons/Softwares/Illustratur.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-80",
    },
    {
      id: 4,
      name: "Blender",
      icon: "/icons/Softwares/Blender.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-5",
    },
    {
      id: 5,
      name: "Photoshop",
      icon: "/icons/Softwares/CreativeCloud.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-40",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  applications: APPLICATIONS_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  videoplayer: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
