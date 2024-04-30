const About = ({ setSelectedTab }) => {
  return (
    <section id="aboutpart a" className="about" data-aos="slide-up">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={"assets/about-pic.png"}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={"./assets/experience.png"}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2+ years Web Development <br />
                1+ years Full Stack Development <br />
              </p>
            </div>
            <div className="details-container">
              <img
                src={"./assets/education.png"}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                Bachelor of Technology (B.Tech) <br />
                Information Technology
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              "From C to MERN: A Journey in Code and Creativity"
              <br />
              Hello World! <br />
              I'm on an adventurous journey through the world of Information
              Technology, pursuing my B.Tech at Shri Ramswaroop Memorial College
              of Engineering and Management, with my destination set for the
              year 2025 when I'll proudly complete this thrilling academic
              quest.
              <br />
              <p></p>
            </p>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => {
                setSelectedTab("About");
              }}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
