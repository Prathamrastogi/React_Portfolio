import ProjectContainer from "./ProjectContainer";

const DetailedProject = ({ setSelectedTab }) => {
  const projectContainer = [
    {
      number: 1,
      title: "Est8 - Property Marketplace",
      description:
        "Welcome to est8, a property buy and rent service designed to streamline the process of buying and renting properties. This project utilizes the MERN (MongoDB, Express.js, React.js, Node.js) stack along with WebSocket technology to create a dynamic and interactive platform where users can post properties for sale or rent, and interested parties can connect directly through the website.",
      button1: "Github",
      button1link: "https://github.com/Prathamrastogi/Est8_",
      button2: "Live Demo",
      button2link: "https://est8.netlify.app/",
      imagelink: "./assets/project-1.png",
    },
    {
      number: 2,
      title: "URL Shortner",
      description:
        "I'm beyond thrilled to unveil my latest passion project in Full Stack Development! 💻 which is a “URL Shortner”👨‍💻Using the incredible power of technologies like EJS, Node.js, Express, and MongoDB, I've crafted a dynamic and sleek web application that I can't wait for you all to experience.",
      button1: "Github",
      button1link: "https://github.com/Prathamrastogi/FULL_STACK_URL",
      button2: "Live Demo",
      button2link: "https://url-short-dsp8.onrender.com/",
      imagelink: "./assets/project-2.png",
    },
    {
      number: 3,
      title: "Hotstar UI Clone",
      description:
        "Excited to share my latest personal project - a clone of Disney+ Hotstar's frontend using React! 🚀 While it's still a work in progress, I've captured the essence of the platform's UI. I'm planning to add login functionality and many more features soon. Check out the GitHub repository for code insights and the live link to see the frontend in action. ",
      button1: "Github",
      button1link: "https://github.com/Prathamrastogi/Disney-Hotstar",
      button2: "Live Demo",
      button2link: "https://disneyhotstar1.netlify.app/",
      imagelink: "./assets/project-3.png",
    },
    {
      number: 4,
      title: "Mall Customer Segmentation",
      description:
        "I'm excited to share that I've successfully completed my in-campus internship with IBM in the field of data science. 🚀 During this journey, I had the opportunity to work on a fascinating project centered around Customer Segmentation using K-means Clustering, including factors such as age, spending habits, annual income, and gender. 📊💡",
      button1: "Github",
      button1link: "https://github.com/Prathamrastogi/IBM_Internship",
      button2: "LinkedIn",
      button2link:
        "https://www.linkedin.com/posts/pratham-rastogi-439379249_datascience-customersegmentation-ibminternship-activity-7110630963415535616-I1G1?utm_source=share&utm_medium=member_desktop",
      imagelink: "./assets/project-4.png",
    },
  ];
  const miniProject = [
    {
      number: 1,
      title: "Image Background Remover",
      button1: "Github",
      button1link:
        "https://github.com/Prathamrastogi/CodeClauseInternship_Background_Image_Remover/tree/master",
      button2: "Live Demo",
      button2link:
        "https://prathamrastogi.github.io/CodeClauseInternship_Background_Image_Remover/",
      imagelink: "./assets/mini-1.png",
    },
    {
      number: 2,
      title: "Calculator",
      button1: "Github",
      button1link: "https://github.com/Prathamrastogi/Simple_calculator",
      button2: "Live Demo",
      button2link: "https://prathamrastogi.github.io/Simple_calculator/",
      imagelink: "./assets/mini-2.png",
    },
    {
      number: 3,
      title: "Community Forum",
      button1: "Github",
      button1link:
        "https://github.com/Prathamrastogi/CodeClauseInternship_Community_Forum",
      button2: "Live Demo",
      button2link:
        "https://prathamrastogi.github.io/CodeClauseInternship_Community_Forum/",
      imagelink: "./assets/mini-3.png",
    },
    {
      number: 4,
      title: "Landing Page",
      button1: "Github",
      button1link: "https://github.com/Prathamrastogi/OCTANET_SEPTEMBER",
      button2: "LinkedIn",
      button2link:
        "https://www.linkedin.com/posts/pratham-rastogi-439379249_webdevelopment-htmlcss-landingpage-activity-7105579208965275648-Dows?utm_source=share&utm_medium=member_desktop",
      imagelink: "./assets/mini-4.png",
    },
  ];
  return (
    <>
      <section id="aboutpart a" className="about" data-aos="slide-up">
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
        <h1 className="title">My Project</h1>
        {projectContainer.map((item) => (
          <ProjectContainer
            number={item.number}
            title={item.title}
            description={item.description}
            button1={item.button1}
            button1link={item.button1link}
            button2={item.button2}
            button2link={item.button2link}
            imagelink={item.imagelink}
          ></ProjectContainer>
        ))}
        <div style={{ textAlign: "center" }}>
          <h3 data-aos="slide-up">Mini Project</h3>
          {miniProject.map((item) => (
            <ProjectContainer
              number={item.number}
              title={item.title}
              description={item.description}
              button1={item.button1}
              button1link={item.button1link}
              button2={item.button2}
              button2link={item.button2link}
              imagelink={item.imagelink}
            ></ProjectContainer>
          ))}
        </div>
      </section>
    </>
  );
};
export default DetailedProject;
