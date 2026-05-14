import React from 'react';
import './Experience.css';

const experienceItems = [
  {
    period: '2024 - Present',
    role: 'MCA Student',
    company: 'Gurugram University',
    type: 'Education',
    points: [
      'Building a strong foundation in software engineering, database systems and web application development.',
      'Practicing full-stack concepts through hands-on React, Node.js, Express.js and MongoDB projects.',
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
    period: '2023 - 2024',
    role: 'Frontend Developer',
    company: 'React and JavaScript Practice',
    type: 'Frontend',
    points: [
      'Built responsive websites, clone projects and interactive JavaScript tools with clean layouts.',
      'Improved skills in component design, CSS layouts, forms, filters, modals and user-friendly interactions.',
    ],
  },
  {
    period: '2023 - Present',
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
