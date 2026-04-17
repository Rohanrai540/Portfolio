// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import AccioLogo from "./assets/company_logo/accio_logo.jpg";

// Education Section Logo's
import CollegeLogo from "./assets/education_logo/college-logo.jpg";
import MaharishiLogo from "./assets/education_logo/Maharishi-logo.jpg";
import SunShineLogo from "./assets/education_logo/SunShine-Logo.jpg";

// Project Section Logo's
import freshmartLogo from './assets/work_logo/freshmart.png';
import portfolioLogo from './assets/work_logo/portfolio.png';
import codfixLogo from './assets/work_logo/codfix.png';
import sortingvisulaizerLogo from './assets/work_logo/SortingVisualizer.png';
import tictactoeLogo from './assets/work_logo/TicTacToe.png';
import calculater from './assets/work_logo/Calculater.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: AccioLogo,
      role: "MERN Stack Developer Trainee",
      company: "AccioJob",
      date: "Aug 2025 - Present",
      desc: "Currently undergoing intensive training in MERN stack technologies, including HTML, CSS, JavaScript, React, Node, Express, and MongoDB. Gaining hands-on experience through real-world projects, coding challenges, and interview preparation aligned with industry standards, while also strengthening problem-solving skills using Data Structures and Algorithms (DSA) to build efficient and scalable solutions.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Express JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: CollegeLogo,
      school: "Dr. Rammanohar Lohia Avadh University, Ayodhya U.P",
      date: "2019 - 2023",
      grade: "8.4 CGPA",
      desc: "I have completed my Bachelor’s degree (B.Tech) in Information Technology from Dr. Rammanohar Lohia Avadh University. During my time there, I built a strong foundation in programming, software development, and core computer science concepts. I studied key subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in workshops and technical events, which helped enhance my practical skills and overall knowledge. My academic journey at the university played a significant role in developing my technical expertise and supporting my professional growth.",
      degree: "Bachelor of Technology - B.Tech(IT)",
    },
    {
      id: 2,
      img: MaharishiLogo,
      school: "Maharishi Vidya Mandir Kalindipuram, Prayagraj U.P",
      date: "2018",
      grade: "60%",
      desc: "I completed my Class 12 education from Maharishi Vidya Mandir Kalindipuram under the CBSE board, where I pursued the Physics, Chemistry, and Mathematics (PCM) stream.",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: SunShineLogo,
      school: "Sun Shine Public School, Zamania, Ghazipur U.P",
      date: "2016",
      grade: "8.4 CGPA",
      desc: "I completed my class 10 education from Sun Shine Public School, Ghazipur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Online Grocery Store",
      description:
        "FreshMart is a modern and responsive online grocery store built using React and Redux for efficient state management. It includes features like seamless product search, add-to-cart and remove-from-cart functionality. Designed with Tailwind CSS, it delivers a smooth, intuitive, and user-friendly shopping experience across all devices.",
      image: freshmartLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Redux"],
      github: "https://github.com/Rohanrai540/FreshMart",
      webapp: "https://fresh-mart-eight.vercel.app/",
    },
    {
      id: 1,
      title: "CodeFix",
      description:
        "CodeFix is an AI-powered code reviewer and debugger built using React and integrated with the Gemini API. It analyzes code to detect syntax errors, logical issues, and optimization opportunities. With a clean interface, users can input code and receive instant, detailed feedback, improving code quality and development efficiency.",
      image: codfixLogo,
      tags: [
        "React JS",
        "Tailwind CSS",
        "Gemini API",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/Rohanrai540/CodeFix",
      webapp: "https://code-fix-hazel.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React and Tailwind CSS to showcase projects, skills, and experience. It features a clean, responsive design, smooth navigation, and interactive UI elements. The portfolio highlights development work, provides project details, and offers an easy way for recruiters and clients to connect and explore.",
      image: portfolioLogo,
      tags: ["React JS", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rohanrai540/Portfolio",
      webapp: "https://rohan-portfolio-540.netlify.app/",
    },
    {
      id: 3,
      title: "Sorting Visualizer",
      description:
        "A sorting visualizer built using HTML, CSS and JavaScript that demonstrates popular algorithms like bubble sort, selection sort, and quick sort through interactive animations. It helps users understand sorting logic step-by-step with dynamic visuals, adjustable speed controls, and a responsive, user-friendly interface.",
      image: sortingvisulaizerLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rohanrai540/Sorting-Visualizer",
      webapp: "https://sortingvisualizer010.netlify.app/",
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      description:
        "A Tic Tac Toe game built using HTML, CSS, and JavaScript featuring an interactive and responsive design. It allows two players to compete with real-time updates, win detection logic, and restart functionality, providing a simple yet engaging user experience across different devices.",
      image: tictactoeLogo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Rohanrai540/Tic-Tac-Toe-Game",
      webapp: "https://tic-tac-toe-game-beta-red.vercel.app/",
    },
    {
      id: 5,
      title: "Calculator App",
      description:
        "A calculator application built using HTML, CSS, and JavaScript that performs basic arithmetic operations with a clean and responsive interface. It handles user inputs efficiently, supports real-time calculations, and delivers a smooth, intuitive experience across devices for quick and accurate computations.",
      image: calculater,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rohanrai540/Calculater",
      webapp: "https://calculater-indol-ten.vercel.app/",
    },
  ];  