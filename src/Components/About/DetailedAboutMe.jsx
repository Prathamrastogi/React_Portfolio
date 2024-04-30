const DetailedAboutMe = ({ setSelectedTab }) => {
  return (
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
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container" data-aos="slide-left">
          <img
            src={"assets/IMG_S.jpg"}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container" data-aos="slide-right">
          <div className="text-container">
            <p>
              "From C to MERN: A Journey in Code and Creativity"
              <br /> <br />
              Hello World! <br /> <br />
              I'm on an adventurous journey through the world of Information
              Technology, pursuing my B.Tech at Shri Ramswaroop Memorial College
              of Engineering and Management, with my destination set for the
              year 2025 when I'll proudly complete this thrilling academic
              quest.
              <br />
              <br />
              <p>
                Aim to be Meet a dynamic programmer proficient in a range of
                programming languages. My skill set encompasses C, C++, Python,
                Java, as well as front-end technologies like HTML, CSS,
                JavaScript, Bootstrap, and React.js. My vision is to become a
                MERN Stack Developer, harmonizing both front-end and back-end
                web development.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="about-details-container" data-aos="slide-left">
          <div className="text-container">
            <p>
              My journey has been fueled by two enriching internships at
              CodeClause and Octanet, where I've tackled diverse projects. From
              shaping a Community Forum to crafting an Image Background Remover
              Website, engaging Animation Sites, and developing multiple
              projects on the MERN stack, including the standout URL Shortener.
              <br /> <br />
              I've amassed hands-on experience in web development. What sets me
              apart is an unyielding desire to continuously expand my knowledge
              and embrace new challenges. I'm always on the hunt for
              opportunities to learn and advance, whether it's mastering the
              latest technology or refining my coding skills.
              <br />
              <br />
              Beyond the digital realm, I have a fervor for music and enjoy
              playing various musical instruments. Join me on this exciting
              adventure where I fuse code and creativity, transforming dreams
              into reality. This is only the inception of a remarkable journey.
            </p>
          </div>
        </div>
        <div className="section__pic-container" data-aos="slide-right">
          <img
            src={"assets/IMG_M.jpg"}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
      </div>
    </section>
  );
};
export default DetailedAboutMe;
