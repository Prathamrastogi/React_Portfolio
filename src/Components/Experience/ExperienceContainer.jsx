const ExperienceContainer = ({ number, description, title, imagelink }) => {
  return (
    <>
      {number % 2 === 1 ? (
        <div className="project-section-container bigd">
          <div className="section__pic-container" data-aos="slide-left">
            <img src={imagelink} alt={title} className="about-pic" />
          </div>
          <div className="about-details-container" data-aos="slide-right">
            <div className="project-text-container">{description}</div>
          </div>
        </div>
      ) : (
        <>
          <div className="project-section-container bigd">
            <div className="about-details-container" data-aos="slide-left">
              <div className="project-text-container">{description}</div>
            </div>
            <div className="section__pic-container" data-aos="slide-right">
              <img src={imagelink} alt={title} className="about-pic" />
            </div>
          </div>
        </>
      )}
      <div className="project-section-container smalld">
        <div className="about-details-container" data-aos="slide-left">
          <div className="project-text-container">{description}</div>
        </div>
        <div className="section__pic-container" data-aos="slide-right">
          <img src={imagelink} alt={title} className="about-pic" />
        </div>
      </div>
    </>
  );
};
export default ExperienceContainer;
