import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    mongodb,
    git,
    figma,
    docker,
    reidar,
    battery,
    troylabs,
    boeing,
    sportscomputer,
    avltree,
    porfolio,
    gmai,
    cpp,
    python,
    java,
    flask,
    linux,
    nextjs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "Investment Analyst",
      icon: mobile,
    },
    {
      title: "Back-End Developer",
      icon: backend,
    },
    {
      title: "Lifelong Learner",
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Linux",
      icon: linux,
    },
  ];
  
  const experiences = [
    {
      title: "Founding Board Member and Executive",
      company_name: "ReidarDAO",
      icon: reidar,
      iconBg: "#FFFFFF",
      date: "November 2021 - January 2023",
      points: [
        "Helped found and lead a digital asset investment fund to raise over $300,000 in assets under management",
        "Collaborated with the team of leaders to oversee the operations and manage over 70 members in the DAO",
        "Served as creative director and chief editor for our newsletter, The Reidar Report.",
        "Co-hosted Reidar’s flagship podcast series, Reidar Radio.",
      ],
    },
    {
      title: "Sourcing and Diligence Extern",
      company_name: "Battery Ventures",
      icon: battery,
      iconBg: "#FFFFFF",
      date: "January 2022 - August 2022",
      points: [
        "Sourced and led deal due diligence for potential minority investments in early-stage and growth-stage B2B SaaS.",
        "Led diligence on the agricultural software industry and developed multiple investment theses for this industry.",
        "Pitched potential investment opportunities to a General Partner, and led discussions with target company CEOs.",
        "Mentored other sourcing and diligence externs, guiding and empowering them to succeed in their roles.",
      ],
    },
    {
      title: "Venture Analyst",
      company_name: "TroyLabs",
      icon: troylabs,
      iconBg: "#EE3A21",
      date: "January 2023 - Present",
      points: [
        "Advised pre-seed stage startups on business and growth strategy and guide them through the process of fundraising.",
        "Constructed startup valuation and market sizing models to help founders understand their business and market.",
        "Helped organize and orchestrate an outreach initiative to hundreds of VCs in our area.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "The Boeing Company",
      icon: boeing,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Developed low-level C and C++ software for the Arm A65AE processor for testing and ASIC simulation.",
        "Developed hardware and software designs and algorithms for processors to handle the intense radiation of space.",
        "Programmed internal tools to enhance development capabilities in a bare-metal, resource-lite environment.",
        "Developed Python scripts to convert XML descriptions of ASIC registers in fully functional system verilog code.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sports Arbitrage Strategy",
      description:
        "Automated sports-betting arbitrage strategy that has resulted in over a 400% ROI and over $20,000 in net profits.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
      ],
      image: sportscomputer,
      source_code_link: "https://github.com/henryhoule17/Sports-Futures-Arbitrage-Algorithm",
    },
    {
      name: "GoodMorningAI",
      description:
        "A full-stack web application that provides users with personalized information each morning with a focus on news and recruiting",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
      ],
      image: gmai,
      source_code_link: "https://github.com/henryhoule17/GoodMorningAI",
    },
    {
      name: "This Website!",
      description:
        "Developed an interactive portfolio website using React and TailwindCSS to showcase my projects and experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "framermotion",
          color: "pink-text-gradient",
        },
      ],
      image: porfolio,
      source_code_link: "https://github.com/henryhoule17/Personal-Website",
    },
    {
      name: "AVL Tree Implementation",
      description:
        "Developed an automatically-rebalancing binary search tree in C++, to enhance the speed and performance of a BST.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "green-text-gradient",
        },
      ],
      image: avltree,
      source_code_link: "https://github.com/henryhoule17/AVL-Rebalancing-Binary-Search-Tree",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };