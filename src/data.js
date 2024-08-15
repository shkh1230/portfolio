import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoLinkedin

  } from "react-icons/io5";
import img1 from "./images/AmazonIcon.jpg";
import img2 from "./images/DiscordBot.jpg";
import img3 from "./images/FlightPlanner.jpg";
import img4 from "./images/Emotion.png";
import img5 from "./images/QueryGenius.png";

import { IOCodeWorking } from "react-icons/io5";

export const Experience = [
    {
        id: 1,
        date: "Aug. 2020 - Dec. 2021",
        iconsSrc: <IoCodeWorking />,
        title: "Good Tree Academy | Programming Tutor",
        location: "Plano, TX",
        description: "Researched and utilized deep learning such as YOLO and SSD for improving real-time object recognition. Enhanced tracking models through data preprocessing and machine learning, optimizing overall performance.",
      },

      {
        id: 2,
        date: "Feb. 2021 - April. 2022",
        iconsSrc: <IoCodeWorking />,
        title: "A-1 Autos | Front-End Engineer Intern",
        location: "Garland, TX",
        description: "Engineered a responsive website that integrated solutions into business operations through JavaScript, React.js, MySQL, and Node.js, leading to a 20% boost in user engagement and operational streamlining. Enhanced customer conversion by 40% by automated quotes, while elevating data accessibility by 15% for optimized operations under A/B testing.",
      },
      {
        id: 3,
        date: "Aug. 2023 - Current",
        iconSrc: <IoCodeWorking />,
        title: "UTD Intelligent Robotics and Vision | Lab Researcher",
        location: "Richardson, TX",
        description: "Researched and utilized deep learning such as YOLO and SSD for improving real-time object recognition. Enhanced tracking models through data preprocessing and machine learning, optimizing overall performance.",
      },
      {
        id: 4,
        date: "Jan. 2024 - Current",
        iconSrc: <IoCodeWorking />,
        title: "Blue Yonder | DevOps Intern",
        location: "Irving, TX",
        description: "Managed infrastructure deployments through Kubernetes and Terraform, ensuring scalability and optimal resource utilization. Utilized Azure for effective cloud infrastructure management, optimizing resources to achieve both performance and cost efficiency goals. Utilized Python scripting to streamline and automate tasks, significantly enhancing operational efficiency in infrastructure management."
      }      
];
export const Projects = [
    {
        id: 1,
        name: "Amazon Stock Bot",
        imageSrc: img1,
        techs: "Python, Pandas, NumpPy, Chromium",
        github: "https://github.com/shkh1230/AmazonStockBot",
    },

    {
        id: 2,
        name: "Discord Bot (Private)",
        imageSrc: img2,
        techs: "Javascript, Discord.js ",
        github: "#",
    },

    {
        id: 3,
        name: "Flight Planner",
        imageSrc: img3,
        techs: "Java",
        github: "https://github.com/shkh1230/FlightPlan",
    },

    {
      id: 4,
      name: "Emotion Detector",
      imageSrc: img4,
      techs: "Python, OpenCV, Keras, TensorFlow, NumPy",
      github: "https://github.com/shkh1230/Emotion-Detector-Project",
    },

    {
      id: 5,
      name: "Query Genius",
      imageSrc: img5,
      techs: "React+Vite.js, ChatGPT API, Express.js, Node.js, Tailwind CSS",
      github: "https://github.com/shkh1230/",
    }
    
];
export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/shkh1230",
    },
    
    {
      id: 2,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shehryar-khan-sh1230/",
    },
    
  ];