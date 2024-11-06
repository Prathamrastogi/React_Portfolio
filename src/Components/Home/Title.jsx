import Typing from "./Typing";

const Title = () => {
  return (
    <section id="profile" data-aos="fade-left">
      <div className="section__pic-container">
        <img
          src={"./assets/profile-pic.png"}
          alt="Pratham Rastogi profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Pratham Rastogi</h1>
        <Typing />
        <div className="btn-container">
          <button className="btn btn-color-2">
            <a
              href="https://drive.google.com/file/d/1Qn_7Qjvf8Iw5QrSfOFW_LO6M8LcJRQzE/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </button>
          <button
            className="btn btn-color-2"
            onClick="location.href='./#contact'"
          >
            <a href="./#contact">Contact Info</a>
          </button>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/pratham-rastogi-439379249/">
            <img
              src={"./assets/linkedin.png"}
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
          <a href="https://github.com/Prathamrastogi">
            <img
              src={"./assets/github.png"}
              alt="My Github profile"
              className="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Title;
