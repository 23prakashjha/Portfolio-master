import React, { useState } from 'react';
import './Languages.css';

const Languages = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const languages = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap, Tailwind css'],
    backend: ['Node.js', 'Express.js', 'Python', 'Java'],
    database: ['MongoDB', 'MySQL'],
    Tools: ['Git', 'Github','Netlify', 'Vercel','Render'],

  };

  return (
    <div className="languages-container" id="languages">
      <h2>Languages Known</h2>
      <div className="tabs">
        <button
          className={activeTab === 'frontend' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('frontend')}
        >
          Frontend
        </button>
        <button
          className={activeTab === 'backend' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('backend')}
        >
          Backend
        </button>
        <button
          className={activeTab === 'database' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('database')}
        >
          Database
        </button>
        <button
          className={activeTab === 'Tools' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('Tools')}
        >
          Tools
        </button>
      </div>

      <div className="tab-content">
        {languages[activeTab].map((lang, index) => (
          <div className="language-item" key={index}>
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
