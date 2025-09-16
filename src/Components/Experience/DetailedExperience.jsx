import React, { useEffect } from "react";
import ExperienceContainer from "./ExperienceContainer";

const DetailedExperience = ({ setSelectedTab, items }) => {
  useEffect(() => {
    document
      .querySelectorAll(".experience-content.hidden")
      .forEach(function (element) {
        var bottom_of_object = element.offsetTop + element.offsetHeight;
        var bottom_of_window = window.pageYOffset + window.innerHeight;

        /* If the object is completely visible in the window, fadeIn it */
        if (bottom_of_window > bottom_of_object) {
          element.style.transition = "opacity 0.6s, margin-left 0.6s";
          element.style.opacity = "1";
          element.style.marginLeft = "0";
        }
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const Content = [
    {
      number: 1,
      title: "GDSC",
      description:
        "During my time in Lucknow, I've actively participated in numerous events, showcasing both my passion for technology and my organizational skills. One of the notable events I attended was GDSC WOW Lucknow, where I had the opportunity to network with like-minded individuals and gain insights into the latest trends in tech. Furthermore, I took the initiative to manage several programs of my own.",
      imagelink: "/google.jpg",
    },
    {
      number: 2,
      title: "IEEE",
      description:
        "One such program involved conducting a competition on front-end programming. Participants were challenged to build a website from scratch using pure HTML and CSS. It was inspiring to see the creativity and talent on display, with participants not only showcasing their coding skills but also their innovative design abilities. The competition was a great success, with participants receiving certificates of participation, and the winners were awarded cash prizes of 3000, 2000, and 1000 rupees respectively.",
      imagelink: "/ieee.jpg",
    },
    {
      number: 3,
      title: "National Science day",
      description:
        "Additionally, I organized a science quiz on National Science Day, aiming to promote scientific knowledge and curiosity among students. This event was another testament to my commitment to fostering learning and innovation in the community. The quiz engaged participants in challenging and thought-provoking questions, encouraging them to delve deeper into various scientific topics. Overall, these experiences have not only honed my technical and organizational abilities but also reinforced my dedication to community engagement and education.",
      imagelink: "/national.PNG",
    },
    {
      number: 4,
      title: "Coding Blocks",
      description:
        "Moreover, I had the opportunity to go on an industrial visit to Coding Blocks in Lucknow. This visit provided me with valuable insights into the workings of a professional coding environment and enhanced my understanding of industry practices. As a recognition of my participation, I was awarded a certificate, which further motivated me to continue learning and growing in the field of technology.",
      imagelink: "/coding block.jpg",
    },
  ];

  return (
    <>
      <section id="aboutpart" className="about" data-aos="slide-up">
        <div className="back-btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => {
              setSelectedTab("Home");
            }}
          >
            &#8617; Home
          </button>
        </div>
        <h1 className="title">Experience</h1>
        <p className="section__text__p1" data-aos="slide-up">
          With a diverse background in software engineering and a passion for
          driving innovation, I have accumulated valuable experience across
          various roles and projects.
          <br />
          <br />
          <h3>Work Experience</h3>
          <br />
          <br />
        </p>
        <p className="section__text__p1 " data-aos="slide-up">
          <h2> IEEE Student CIS Team | IEEE Society | FEB-NOV ,2023</h2>
          - Contributed to web page design & captivating animations projects
          during my tenure at the Company. <br />- Embarked on projects that
          sparked creativity & innovation,enhancing user experience &
          engagement. <br />- Utilized skills in HTML, CSS, and Javascript to
          bring ideas to life and deliver exceptional results.
          <br />
          <br />
          <h2>
            Web Developer Intern | OctaNet Services Pvt. Ltd. | OCT-NOV, 2023
          </h2>
          - Contributed to web page design & captivating animations projects
          during my tenure at the Company. <br />- Embarked on projects that
          sparked creativity & innovation,enhancing user experience &
          engagement. <br />- Utilized skills in HTML, CSS, and Javascript to
          bring ideas to life and deliver exceptional results.
          <br />
          <br />
          <h2>Web Developer Intern | CodeClause | SEP-OCT, 2023</h2>
          - Proficient in web development technologies including HTML,
          JavaScript, and Tailwind CSS. <br />- Received a glowing letter of
          recommendation from CodeClause for my exceptional performance <br />-
          Demonstrated ability to dive into challenging projects and deliver
          results efficiently.
          <br />
          <br />
          <h2>MERN Stack Developer Intern | Zidio Development | MAR-MAY, 2024</h2>
          - Developed scalable web applications using the MERN Stack, enhancing the user experience and functionality  
          <br />- Executed multiple high-impact projects, Implemented User Feedback Mechanisms 
          <br />- Collaborated with design team to create responsive and user-friendly interfaces and Solutions. 
          <br />
          <br />
          <h2>Backend Developer Intern | Edorbit | MAY-NOV 2024</h2>
          - Revamped backend infrastructure for an Ai-Powered Learning app,extending features to an online learning platform using 
React and TypeScript 
          <br />- Optimized SQL databases on Google Cloud, achieving a improvement in data retrieval efficiency. 
          <br />- Introduced new functionalities and resolved bugs, elevating user satisfaction .
          <br />
          <br />
          <h2>Node.js Developer Intern | Healthtrip | MAR 2025 - CURRENT</h2>
          - Developed scalable REST APIs in NestJS, migrating legacy PHP and Node.js modules to a modern backend architecture.  
          <br />- Integrated third-party platforms like CleverTap and WATI to automate messaging and improve engagement.  
          <br />- Implemented cron jobs for automated email workflows across different operations.
          <br />- Built and tested dynamic modules for patient onboarding, property listings, and notifications. 
          <br />
          <br />
          <h3>Technology Known</h3>
          <br />
          <div className="logos exp-tech">
            <div className="marquee">
              <div className="track">
                <img
                  src="assets/imgs/html.png"
                  alt="HTML"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/css.png"
                  alt="CSS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/javascript.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/bootstrap.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/tailwind css.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/sass.png"
                  width="128"
                  alt="Sass"
                  height="128"
                />
                <img
                  src="assets/imgs/react.png"
                  width="128"
                  alt="React"
                  height="128"
                />
                <img
                  src="assets/imgs/redux.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/nodejs.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/express.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/firebase.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/mongodb.ico"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/prisma.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/nextjs.png"
                  width="128"
                  alt="Next JS"
                  height="128"
                />
                <img
                  src="assets/imgs/c.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/c++.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/java.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/python.png"
                  width="128"
                  alt="Python"
                  height="128"
                />
                <img
                  src="assets/imgs/mysql.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/vscode.png"
                  width="128"
                  alt="VS Code"
                  height="128"
                />
                <img
                  src="assets/imgs/github.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/git.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/figma.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
              </div>
            </div>
          </div>
          <h3 data-aos="slide-up">Practical Experience</h3>
          {Content.map((item) => (
            <ExperienceContainer
              number={item.number}
              title={item.title}
              description={item.description}
              imagelink={item.imagelink}
            ></ExperienceContainer>
          ))}
        </p>
      </section>
    </>
  );
};

export default DetailedExperience;
