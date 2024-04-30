import Entry from "./Entry/Entry";

const Experience = ({ items }) => {
  const frontend = [
    {
      name: "HTML",
      level: "Experienced",
    },
    {
      name: "CSS",
      level: "Experienced",
    },
    {
      name: "JavaScript",
      level: "Experienced",
    },
    {
      name: "Bootstrap",
      level: "Experienced",
    },
    {
      name: "Tail WindCSS",
      level: "Experienced",
    },
    {
      name: "React",
      level: "Intermediate",
    },
  ];
  const backend = [
    {
      name: "Node.Js",
      level: "Experienced",
    },
    {
      name: "Express.Js",
      level: "Experienced",
    },
    {
      name: "FireBase",
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      level: "Experienced",
    },
    {
      name: "Prisma",
      level: "Experienced",
    },
  ];
  const programming = [
    {
      name: "C",
      level: "Experienced",
    },
    {
      name: "C++",
      level: "Experienced",
    },
    {
      name: "Java",
      level: "Intermediate",
    },
    {
      name: "Python",
      level: "Intermediate",
    },
    {
      name: "MySQL",
      level: "Experienced",
    },
  ];
  const tools = [
    {
      name: "VS Code",
      level: "Experienced",
    },
    {
      name: "Github",
      level: "Experienced",
    },
    {
      name: "Git",
      level: "Experienced",
    },
    {
      name: "Figma",
      level: "Beginner",
    },
  ];
  return (
    <section id="experience" data-aos="slide-up">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container" data-aos="slide-up">
        <div className="about-containers-experience">
          <div className="details-container" data-aos="slide-up">
            <h2 className="experience-sub-title">Front End Development</h2>
            <div className="article-container">
              <article>
                {frontend.map((item) => (
                  <Entry name={item.name} level={item.level}></Entry>
                ))}
              </article>
            </div>
          </div>
          <div className="details-container" data-aos="slide-up">
            <h2 className="experience-sub-title">Back End Development</h2>
            <div className="article-container">
              <article>
                {backend.map((item) => (
                  <Entry name={item.name} level={item.level}></Entry>
                ))}
              </article>
            </div>
          </div>
          <div className="details-container" data-aos="slide-up">
            <h2 className="experience-sub-title">
              Programming languages & tools
            </h2>
            <div className="article-container">
              <article>
                {programming.map((item) => (
                  <Entry name={item.name} level={item.level}></Entry>
                ))}
              </article>
            </div>
          </div>
          <div className="details-container" data-aos="slide-up">
            <h2 className="experience-sub-title">Tools</h2>
            <div className="article-container">
              <article>
                {tools.map((item) => (
                  <Entry name={item.name} level={item.level}></Entry>
                ))}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
