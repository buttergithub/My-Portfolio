const Home = () => {
  return (
    <section className="bg-light py-4" style={{ minHeight: '90vh' }}>
      <div className="container">
        {/* Profile Section */}
        <div className="d-flex flex-column align-items-center mb-5">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="rounded-circle shadow mb-3"
            style={{ width: '160px', height: '160px', objectFit: 'cover', border: '4px solid #198754' }}
          />
          <h2 className="fw-bold mb-1 text-success" style={{ fontSize: '1.5rem' }}>Uwizeye Ngoga Sandra</h2>
          <h5 className="mb-2 text-secondary" style={{ fontSize: '1rem' }}>Software Engineering Student</h5>
          <p className="lead text-center" style={{ maxWidth: '500px' , fontSize: '0.95rem' }}>
            Welcome to my portfolio! I am a passionate third-year Software Engineering student with a keen interest in building impactful digital solutions. I thrive on learning new technologies, collaborating with diverse teams, and turning ideas into reality through code.
          </p>
        </div>

        {/* About Me Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h3 className="card-title text-success mb-3">About Me</h3>
                <p className="card-text">
                  I am driven by curiosity and a desire to solve real-world problems. My journey in software engineering has equipped me with strong foundations in web development, algorithms, and teamwork. I enjoy exploring new frameworks, contributing to open-source projects, and continuously improving my skills.
                </p>
                <ul className="list-unstyled mb-0">
                  <li>🌱 Always learning and adapting to new technologies</li>
                  <li>🤝 Collaborative team player and effective communicator</li>
                  <li>🚀 Eager to contribute to innovative projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-6 mb-2">
            <div className="card shadow-sm border-0">
              <div className="card-body py-2 px-3">
                <h6 className="text-success mb-1">Skills</h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-success">JavaScript</span>
                  <span className="badge bg-success">React</span>
                  <span className="badge bg-success">Node.js</span>
                  <span className="badge bg-success">HTML/CSS</span>
                  <span className="badge bg-success">Bootstrap</span>
                  <span className="badge bg-success">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;