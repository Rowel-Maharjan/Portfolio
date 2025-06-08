import {
  html,
  css,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  express,
  next,
  makemytrip,
  passwordmanager,
  spotify,
  todo,
  productdetail,
  twitter,
  jobPortal,
  netflix,
  swasthalaya,
} from "./assets/index.js";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile
      ? [0.5, -5.5, 0]
      : isTablet
      ? [0.5, -7.5, 0]
      : [0.5, -7.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [7, -5, 0]
      : [11, -6.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 5, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-12, 10, 0]
      : isMobile
      ? [-15, 15, 0]
      : isTablet
      ? [-20, 15, 0]
      : [-47, 12, 0],
    targetPosition: isSmall
      ? [-6, -9, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-9, -12, -10]
      : [-10, -8, 0],
  };
};

export const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
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
    name: "express",
    icon: express,
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
];

export const projects = [
  // {
  //     name: "Ecommerce Website",
  //     description:
  //         "Developed a full-featured e-commerce application with dynamic product listings, detailed product pages, and an interactive cart system. Integrated an admin dashboard for managing products, inventory, users, and analytics. Designed both user and admin interfaces to be responsive, intuitive, and seamlessly integrated with real-time API updates.",
  //     tags: [
  //         {
  //             name: "react",
  //             color: "blue-text-gradient",
  //         },
  //         {
  //             name: "redux-toolkit",
  //             color: "green-text-gradient",
  //         },
  //         {
  //             name: "mongodb",
  //             color: "pink-text-gradient",
  //         },
  //     ],
  //     image: tripguide,
  //     // image: carrent,
  //     source_code_link: "https://github.com/",
  // },
  {
    name: "Swasthalaya Nepal",
    description:
      "Developed a full-stack health platform for browsing and booking medical tests and packages. Built using Next.js with real-time capabilities powered by MongoDB and Prisma ORM. Included a responsive user-facing interface and a secure admin panel for managing packages, users, and bookings.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: swasthalaya,
    live_link: "https://www.swasthalayanepal.com/",
  },
  {
    name: "Job Portal",
    description:
      "EasyJob is a modern React-based job portal that connects job seekers and employers effortlessly. It features an extensive job listing system with advanced search and filtering options. Job seekers can create profiles, upload resumes, and track applications, while employers manage postings and review candidates through a dedicated dashboard.",
    tags: [
      {
        name: "supabase",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: jobPortal,
    source_code_link: "https://github.com/Rowel-Maharjan/Job-Portal",
    live_link: "https://roweljobportal.vercel.app/",
  },
  {
    name: "Spotify Clone",
    description:
      "Created a web-based music player enabling users to play, pause, skip tracks, and adjust volume. Focused on building an intuitive interface with responsive design and interactive features to enhance user experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/Rowel-Maharjan/Spotify-clone",
  },
  {
    name: "Password Manager ",
    description:
      "Created a secure password manager using React, Tailwind CSS, Express.js, and MongoDB, enabling users to add, update, and delete passwords. Designed a responsive, user-friendly interface for efficient password management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: passwordmanager,
    source_code_link: "https://github.com/Rowel-Maharjan/Password-Manager",
    live_link: "https://secretkeys.vercel.app/",
  },
  {
    name: "MakeMyTrip",
    description:
      "Developing a front-end of MakeMyTrip, focusing on replicating key features like flight booking, bus booking, hotel bookings, and more. Utilizing React, Tailwind CSS for a user-friendly navigation, and responsive design for an authentic and seamless travel booking experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    image: makemytrip,
    source_code_link: "https://github.com/Rowel-Maharjan/Make-My-Trip-Clone",
    live_link: "https://make-my-trip-clone-opal.vercel.app/",
  },
  {
    name: "To-Do List",
    description:
      "Developed a simple to-do list application allowing users to add, edit, delete, and mark tasks as completed. Integrated local storage for task persistence across sessions and designed a clean, responsive, and user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Rowel-Maharjan/TodoList-App",
    live_link: "https://roweltodo.vercel.app/",
  },
  {
    name: "Product Detail Page ",
    description:
      "Developed a dynamic product detail page using React and Tailwind CSS, integrating an API to fetch and display product details. Built an interactive cart system with real-time price updates and item management, ensuring responsiveness for an optimal experience on all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: productdetail,
    source_code_link: "https://github.com/Rowel-Maharjan/Product-Detail-Page",
    live_link: "https://product-detail-page-theta.vercel.app/",
  },
  {
    name: "Twitter Clone",
    description:
      "Developed a Twitter front-end clone with features like a responsive feed, user profile display, and interactive UI elements for posting, liking, and commenting, ensuring a clean and intuitive design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link:
      "https://github.com/Rowel-Maharjan/Twitter-clone-Tailwind-CSS-",
    live_link: "https://rowel-maharjan.github.io/Twitter-clone-Tailwind-CSS-/",
  },
  {
    name: "Netflix Clone",
    description:
      "Developed a Netflix front-end clone with features like a responsive feed, ensuring a clean and intuitive design.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/Rowel-Maharjan/Netflix-clone",
    live_link: "https://rowel-maharjan.github.io/Netflix-clone/",
  },
];

export const topPart = [
  {
    name: "Node.js",
    image: "/tools/nodejs.svg",
  },
  {
    name: "Express",
    image: "/tools/express.svg",
  },
  {
    name: "React.js",
    image: "/tools/reactjs.svg",
  },
  {
    name: "Next.js",
    image: "/tools/nextjs.svg",
  },
  {
    name: "JS",
    image: "/tools/js.svg",
  },
  {
    name: "TypeScript",
    image: "/tools/typescript.svg",
  },
  {
    name: "MERN",
    image: "/tools/mern.svg",
  },
  {
    name: "Tailwind",
    image: "/tools/tailwind.svg",
  },
  {
    name: "MongoDB",
    image: "/tools/mongodb.svg",
  },
];

export const middlePart = [
  {
    name: "AI",
    image: "/tools/ai.png",
  },
  {
    name: "LLM",
    image: "/tools/llm.png",
  },
  {
    name: "Python",
    image: "/tools/python.svg",
  },
  {
    name: "HTML",
    image: "/tools/html.svg",
  },
  {
    name: "CSS",
    image: "/tools/css.svg",
  },
  {
    name: "prisma",
    image: "/tools/prisma.svg",
  },
  {
    name: "git",
    image: "/tools/git.svg",
  },
  {
    name: "Three JS",
    image: "/tools/threejs.svg",
  },
  {
    name: "Redux",
    image: "/tools/redux.svg",
  },
  {
    name: "Supabase",
    image: "/tools/supabase.svg",
  },
];

export const bottomPart = [
  {
    name: "Cloudflare",
    image: "/tools/cloudflare.svg",
  },
  {
    name: "MySQL",
    image: "/tools/mysql.svg",
  },
  {
    name: "Figma",
    image: "/tools/figma.svg",
  },
  {
    name: "Canva",
    image: "/tools/canva.svg",
  },
  {
    name: "ClickUp",
    image: "/tools/clickup.png",
  },
  {
    name: "PostgreSQL",
    image: "/tools/postgress.svg",
  },
  {
    name: "GSAP",
    image: "/tools/gsap.jpeg",
  },
  {
    name: "Framer-Motion",
    image: "/tools/framer.svg",
  },
];


export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];