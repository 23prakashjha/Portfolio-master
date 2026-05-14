import React, { useState } from 'react';
import './Internship.css';

const Internship = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section className="internship-container" id="internship">
      <span className="section-kicker">Internship</span>
      <h2 className="section-heading">Professional Experience</h2>
      <p className="section-copy">
        Hands-on industry experience as a MERN Stack Developer.
      </p>

      <div className="internship-card">
        <div className="internship-header">
          <span className="internship-badge">Internship</span>
          <span className="internship-date">27/01/2026 - 27/04/2026</span>
        </div>
        <h3>MERN Stack Developer</h3>
        <p className="internship-company">VGI Sooprs Technology Pvt. Ltd.</p>
        <ul className="internship-points">
          <li>Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js.</li>
          <li>Collaborated with the development team to implement RESTful APIs and integrate frontend components with backend services.</li>
          <li>Participated in code reviews and contributed to improving application performance and code quality.</li>
        </ul>
        <button
          className="internship-btn"
          type="button"
          onClick={() => setShowCertificate(true)}
        >
          View Certificate
        </button>
      </div>

      {showCertificate && (
        <div className="certificate-overlay" onClick={() => setShowCertificate(false)}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="certificate-close"
              type="button"
              onClick={() => setShowCertificate(false)}
              aria-label="Close certificate"
            >
              &times;
            </button>
            <embed
              src="/Prakash Jha.pdf"
              type="application/pdf"
              className="certificate-embed"
              title="Internship Certificate"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Internship;
