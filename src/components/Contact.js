const Contact = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-success">Contact</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="mb-3">Let's Connect!</h5>
                <p className="mb-2">
                  <a href="mailto:uwizeyengogasandra@gmail.com" className="text-decoration-none text-dark">
                    <i className="bi bi-envelope-fill me-2 text-success"></i>
                    uwizeyengogasandra@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/uwizeye-ngoga-sandra-7b2191306/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <i className="bi bi-linkedin me-2 text-success"></i>
                    LinkedIn Profile
                  </a>
                </p>
                <p className="mt-4 mb-0 text-muted" style={{ fontSize: '0.95rem' }}>
                  I’m always open to connecting with fellow developers, collaborators, and recruiters!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;