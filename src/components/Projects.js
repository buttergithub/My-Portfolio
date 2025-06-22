const projects = [
  {
    title: 'Student Management',
    description:
      'A student management database to efficiently organize and retrieve student data, including personal info, department assignments, and course enrollments.',
    link: 'https://github.com/buttergithub/studentManagement',
    icon: 'bi bi-people-fill',
  },
  {
    title: 'Online Quiz Application',
    description:
      'An innovative online assessment platform that transforms traditional testing into an engaging learning experience for both educators and learners.',
    link: 'https://github.com/buttergithub/webtech_react',
    icon: 'bi bi-question-circle-fill',
  },
  {
    title: 'Blog Application',
    description:
      'A blog platform built with Node.js, Express, and PostgreSQL. Features user authentication and a RESTful API for managing blog content.',
    link: 'https://github.com/buttergithub/klab_Assignments/tree/main/Node_Blog',
    icon: 'bi bi-journal-richtext',
  },
];

const Projects = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 text-success fw-bold">My Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body d-flex flex-column align-items-center text-center">
                  <i className={`${project.icon} text-success mb-3`} style={{ fontSize: '2.5rem' }}></i>
                  <h5 className="card-title fw-bold mb-2">{project.title}</h5>
                  <p className="card-text mb-4" style={{ fontSize: '0.97rem' }}>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success mt-auto"
                  >
                    <i className="bi bi-github me-2"></i>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;