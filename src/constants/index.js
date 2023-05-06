import { mobile, backend, creator, web,

  html, css, scss, javascript, typescript, nodejs, reactjs, redux,
  java, python,
  solidity, rust, foundry, hardhat,
  mongodb, mysql, postgresql,
  docker, figma, tailwind, threejs,
  aws, terraform, git, linux,
  pega,

  neu, husky, rmk,
  cognizant, optum,

  sumit, ravi, minu,

  twitter,
  
  meta,starbucks, tesla, shopify, carrent, jobit, tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Education",
      title: "Education",
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    // {
    //   name: "SCSS",
    //   icon: scss,
    // },
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
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "postgresql",
      icon: postgresql,
    },
    // {
    //   name: "mysql",
    //   icon: mysql,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "linux",
      icon: linux,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "terraform",
      icon: terraform,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "solidity",
      icon: solidity,
    },
    // {
    //   name: "rust",
    //   icon: rust,
    // },
    // {
    //   name: "foundry",
    //   icon: foundry,
    // },
    // {
    //   name: "hardhat",
    //   icon: hardhat,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "pega",
    //   icon: pega,
    // },
  ];

  const education = [
    {
      title: "Bachelor of Engineering",
      company_name: "RMK Engineering College",
      icon: rmk,
      iconBg: "#E6DEDD",
      date: "June 2019 - July 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Graduate Student",
      company_name: "Northeastern University",
      icon: neu,
      iconBg: "#E6DEDD",
      date: "Fall 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const experiences = [
    {
      title: "Programmer Analyst",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#E6DEDD",
      date: "June 2019 - July 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Optum Global Solutions (UnitedHealth Group)",
      icon: optum,
      iconBg: "#383E56",
      date: "August 2021 - August 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company_name: "Northeastern University",
      icon: neu,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "SaiMahith is a self-motivated, hardworking, and approachable developer with a passion for learning technical skills with a can-do attitude, and a pleasure to work with.",
      name: "Ravi Kumar Pisupati",
      designation: "Enterprise Architect | Dir. Technology",
      company: "UnitedHealth Group",
      image: ravi,
    },
    {
      testimonial:
        "Mahith is a hardworking and dedicated team player with excellent technical skills, focused on delivering quality work while also being open to learning new technologies and processes.",
      name: "Sumit Kumar",
      designation: "Associate Software Engineering Manager",
      company: "Optum",
      image: sumit,
    },
    {
      testimonial:
        "Sai Mahith is a passionate, hardworking team player with a strong inclination towards learning and problem-solving.",
      name: "MinuAishwariya Viswanathan",
      designation: "Sr. Developer",
      company: "Cognizant",
      image: minu,
    },
  ];
  
  const projects = [
    {
      name: "NFT Dutch Auction Platform",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Package Delivery System",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "EasyTrack",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    {
      name: "Cookie Mart",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    {
      name: "Universal ID",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    {
      name: "Web App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
  
  export { services, technologies, education, experiences, testimonials, projects };