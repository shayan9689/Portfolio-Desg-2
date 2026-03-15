import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data & ML</h4>
                <h5>Experience</h5>
              </div>
              <h3>Past</h3>
            </div>
            <p>
              Data pipelines, analysis, and machine learning models. Python,
              TensorFlow, and data-driven solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Data Science</h4>
                <h5>Projects & Research</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              AI/ML projects, NLP, computer vision, and analytics. Building
              models and deploying them for real-world use.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer</h4>
                <h5>Current</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Freelancing in AI, data science, and machine learning. Open to
              collaboration and new projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
