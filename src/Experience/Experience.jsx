import React from 'react';
import './Experience.css';

const experienceItems = [
  {
    period: '27/01/2026 - 27/04/2026',
    role: 'MERN Stack Developer',
    company: 'VGI Sooprs Technology Pvt. Ltd.',
    type: 'Internship',
    points: [
      'Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      'Collaborated with the development team to implement RESTful APIs and integrate frontend components with backend services.',
      'Participated in code reviews and contributed to improving application performance and code quality.',
    ],
  },
  {
    period: 'April 2025 - June 2025',
    role: 'MERN Stack Developer',
    company: 'MY JOB GROW',
    type: 'Internship',
    points: [
      'Built and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      'Worked on API development, database management, and frontend-backend integration.',
      'Gained hands-on experience in agile development and version control with Git.',
    ],
  },
  
  {
    period: '2024 - Present',
    role: 'Full Stack Developer',
    company: 'Personal MERN Projects',
    type: 'Projects',
    points: [
      'Created MERN applications including food delivery, e-commerce, chatbot, quiz and student API platforms.',
      'Worked on routing, responsive UI, CRUD operations, API integration and deployment-ready project structure.',
    ],
  },
  {
    period: '2020 - 2023',
    role: 'Frontend Developer',
    company: 'React and JavaScript Practice',
    type: 'Frontend',
    points: [
      'Built responsive websites, clone projects and interactive JavaScript tools with clean layouts.',
      'Improved skills in component design, CSS layouts, forms, filters, modals and user-friendly interactions.',
    ],
  },
  {
    period: '2024 - Present',
    role: 'Deployment and Tooling',
    company: 'GitHub, Vercel, Netlify, Render',
    type: 'Tools',
    points: [
      'Published multiple live projects and maintained source code on GitHub.',
      'Used modern development tools including VS Code, Postman and Git for project workflow.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <span className="section-kicker">Experience</span>
      <h2 className="section-heading">My learning and project journey</h2>
      <p className="section-copy">
        A practical timeline of education, full-stack project building, frontend practice and deployment experience.
      </p>

      <div className="experience-layout">
        <div className="experience-summary">
          <div>
            <strong>25+</strong>
            <span>Projects completed</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Core stack areas</span>
          </div>
          <div>
            <strong>MCA</strong>
            <span>Currently pursuing</span>
          </div>
        </div>

        <div className="experience-timeline">
          {experienceItems.map((item) => (
            <article className="experience-card" key={`${item.role}-${item.company}`}>
              <div className="experience-date">{item.period}</div>
              <div className="experience-body">
                <span className="experience-type">{item.type}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
