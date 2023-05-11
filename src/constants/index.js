import { mobile, backend, creator, web,

  html, css, javascript, typescript, reactjs,
  java, python,
  solidity,
  mongodb, postgresql,
  aws, terraform, linux,
  neu, rmk,
  cognizant, optum,
  sumit, ravi, minu,
  twitter, linkedin, outlook, github,
  cookiemart, earnforgood, dutchauction, amazonian, easytrack, cloud
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Blockchain Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Cloud Engineer",
      icon: backend,
    },
    {
      title: "Software Developer",
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
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "postgresql",
      icon: postgresql,
    },
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
  ];

  const social = [
    {
      name: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/mahith-chigurupati/",
    },
    {
      name: "Twitter",
      icon: twitter,
      url: "https://twitter.com/Mahith_Ch",
    },
    {
      name: "Github",
      icon: github,
      url: "https://github.com/MahithChigurupati",
    },
    {
      name: "Outlook",
      icon: outlook,
      url: "mailto:chigurupati.sa@northeastern.edu",
    },
  ];

  const education = [
    {
      title: "Bachelor of Engineering",
      company_name: "RMK Engineering College (Anna University)",
      icon: rmk,
      iconBg: "#E6DEDD",
      date: "June 2019 - July 2021",
      points: [
        "Bachelors degree in Electronics and Communication Engineering.",
        "Collaborated in designing and development of Project titled 'A Zigbee based Smart Home interface using Leap Motion Sensor' and presented at International Conference on Cyber-Physical Systems (ICCPS 2019).",
        "Published a paper on 'AI Enabled Smart Home Interface Using Gesture based Controls' in International Journal of Innovative Science and Research Technology (IJISRT).",
      ],
    },
    {
      title: "Master of Science",
      company_name: "Northeastern University, Boston",
      icon: neu,
      iconBg: "#E6DEDD",
      date: "Fall 2022 - Present",
      points: [
        "Masters degree in Information Systems with a concentration in Blockchain Technology.",
        "Coursework: Application Engineering and Development, Web Design and User Experience Engineering, Network Structures and Cloud Computing, Cryptocurrency and Smart Contract Engineering, Program Structures and Algorithms",
        "GPA: 3.7/4.0",
        "Bounty winner in Hackathons: Harvard Blockchain Conference X EasyA, LionHacks, and ETHBoston. Demonstrated exceptional problem-solving skills and technical expertise in developing innovative blockchain solutions in a high-pressure, time-sensitive environment.",
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
        "Redesigned the architecture of a loan processing application of WORLD BANK GROUP using modularity principles, improving efficiency, and streamlining future enhancement processes for the developers.",
        "Designed and developed REST APIs as a back end Pega developer for a .NET application and utilized application log files and Splunk tool to effectively troubleshoot and resolve production issues.",
        "Improved code efficiency to enhance application performance by 75%, resulting in faster case processing time for the International Finance Corporation (IFC) Business of the World Bank Group",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Optum Global Solutions (UnitedHealth Group)",
      icon: optum,
      iconBg: "#383E56",
      date: "August 2021 - August 2022",
      points: [
        "Played a key role in the design and development of a web and mobile health insurance application for UnitedHealth Group using HTML, CSS, JavaScript, and the Pega PRPC tool.",
        "Implemented custom security event logging using Java to enhance data protection for customer’s PHI/PII, reducing potential data breach risk by 95% for UHG.",
        "Received a Bravo recognition award for implementing a key feature in the Application by successfully integrating Adobe Sign and SMS API enabling the business to overcome challenges during COVID-19.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company_name: "Northeastern University",
      icon: neu,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Working as a Teaching Assistant for INFO7500: Cryptocurrency and Smart Contract Engineering coursework by Prof. Suhabe Bugrara.",
        "I mentor graduate students and guide them through technical concepts such as blockchain fundamentals, collision-free hashing and Web 3 Security.",
        "Topics covered in the course include consensus mechanisms, Proof of Work and Proof of Stake, Smart Contracts with a focus on Ethereum and its applications.",
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
        "Built and deployed a Solidity and React-powered NFT Dutch auction platform on IPFS and sepolia testnet, enabling fair and transparent bidding with blockchain recording. Contributed to a seamless user experience for NFT trading. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "ipfs",
          color: "pink-text-gradient",
        },
      ],
      image: dutchauction,
      source_code_link: "https://github.com/MahithChigurupati/Dutch-Auction",
      live_link: "/",
    },
    {
      name: "Cookie Mart",
      description:
        "Developed cross-chain data marketplace using Axelar and Thirdweb SDK, incentivizing users to participate in data collection and compensating them. Transparent and secure transactions address privacy and consent concerns, offering solution to data collection for targeted advertising.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "axelar",
          color: "pink-text-gradient",
        },
      ],
      image: cookiemart,
      source_code_link: "https://github.com/SaiMahith-Chigurupati/hbc-2023-axelar",
      live_link: "/",
    },
    {
      name: "Easy Track",
      description:
        "Expense tracking system that helps users monitor their expenses and income. It features categorization of transactions and an analytical dashboard with charts for a comprehensive overview of financial activity. It includes adding transactions, viewing history, and generating reports for easy financial management.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: easytrack,
      source_code_link: "https://github.com/neu-mis-info6150-fall-2022/final-project-pathfinders",
      live_link: "/",
    },
    {
      name: "Webapp & aws-infra",
      description:
        "Designed and deployed a high-performance web application on AWS with seamless integration of various AWS services. Implemented Infrastructure as Code principles to create a scalable and reliable infrastructure. Developed an efficient deployment process using Packer and Bash scripting.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "terraform",
          color: "pink-text-gradient",
        },
      ],
      image: cloud,
      source_code_link: "https://github.com/CSYE-6225-Cloud-Computing",
      live_link: "/",
    },
    {
      name: "Package Delivery System",
      description:
        "Developed a Package Delivery System improving B2B efficiency by 85% through data management and visualization. Integrated Google Maps API for real-time tracking and updates. Provided valuable experience in complex software development and key technologies.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "mapsAPI",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: amazonian,
      source_code_link: "https://github.com/aditya-kanala/AED_FinalProject_MAM",
      live_link: "/",
    },
    {
      name: "Earn for Good",
      description:
        "contributed to the development of a blockchain-based platform for content distribution and social good with the project's goal of promoting positive social impact through blockchain technology.",
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
      image: earnforgood,
      source_code_link: "https://github.com/SaiMahith-Chigurupati/endaoment",
      live_link: "/",
    },
  ];
  
  export { services, technologies, social, education, experiences, testimonials, projects };