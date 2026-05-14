import React, { useState } from 'react';
import './Projects.css';
import projectData from './data/projectsData';
import GitHubStats from './components/GitHubStats';

const techKeywords = {
  'MongoDB': ['mongo', 'mongodb'],
  'Express': ['express'],
  'React': ['react'],
  'Node.js': ['node'],
  'CSS': ['css'],
  'Bootstrap': ['bootstrap'],
  'JavaScript': ['javascript', 'js'],
};

const extractStack = (text) => {
  const lower = text.toLowerCase();
  return Object.entries(techKeywords)
    .filter(([, keywords]) => keywords.some((kw) => lower.includes(kw)))
    .map(([name]) => name)
    .slice(0, 4);
};

const categoryIcons = {
  MERN: 'fa-solid fa-cubes',
  React: 'fa-brands fa-react',
  JavaScript: 'fa-brands fa-js',
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const categories = ['All', 'MERN', 'React', 'JavaScript'];
  const getCategory = (project) => {
    const text = `${project.title} ${project.description}`.toLowerCase();
    if (text.includes('mern') || text.includes('mongo')) return 'MERN';
    if (text.includes('react')) return 'React';
    return 'JavaScript';
  };
  const categoryProjects = activeCategory === 'All'
    ? projectData
    : projectData.filter((project) => getCategory(project) === activeCategory);
  const filteredProjects = categoryProjects.filter((project, index) => {
    const searchText = `${project.title} ${project.description} ${getCategory(project)}`.toLowerCase();
    const matchesSearch = searchText.includes(searchTerm.trim().toLowerCase());
    const matchesFeatured = !featuredOnly || index < 6;

    return matchesSearch && matchesFeatured;
  });
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const toggleShowMore = () => setShowAll(!showAll);
  const changeCategory = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <div className="projects-container" id="projects">
      <span className="section-kicker">Featured Work</span>
      <h2 className="section-heading">Projects that show my build range</h2>
      <p className="section-copy">
        Browse full-stack apps, React interfaces, clones and JavaScript projects with live demos and source code.
      </p>
      <div className="project-filters" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? 'active' : ''}
            onClick={() => changeCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-toolbar">
        <label className="project-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setShowAll(false);
            }}
            placeholder="Search projects, stack or feature..."
          />
        </label>
        <label className="feature-switch">
          <input
            type="checkbox"
            checked={featuredOnly}
            onChange={() => {
              setFeaturedOnly((current) => !current);
              setShowAll(false);
            }}
          />
          <span></span>
          Featured only
        </label>
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project, index) => {
          const category = getCategory(project);
          const stack = extractStack(`${project.title} ${project.description}`);
          const repo = project.repo;
          return (
            <div className="project-card" key={index}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
                {index < 3 && <span className="featured-badge"><i className="fa-solid fa-star"></i> Featured</span>}
                <div className="project-image-overlay">
                  <a
                    href={project.live || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn"
                  >
                    <i className="fa-solid fa-eye"></i> Live
                  </a>
                  {repo && repo.includes('/') && (
                    <a
                      href={`https://github.com/${repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <i className="fa-brands fa-github"></i> Code
                    </a>
                  )}
                </div>
              </div>
              <div className="project-info">
                <div className="project-card-header">
                  <span className="project-category">
                    <i className={categoryIcons[category]}></i> {category}
                  </span>
                  {stack.length > 0 && (
                    <div className="project-stack-tags">
                      {stack.map((tech) => (
                        <span className="stack-tag" key={tech}>{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <GitHubStats repo={repo} />
                <div className="project-meta">
                  <span><i className="fa-regular fa-calendar"></i> 2025</span>
                  <span><i className="fa-regular fa-clock"></i> Full Stack</span>
                  {repo && repo.includes('/') && (
                    <span>
                      <i className="fa-brands fa-github"></i>
                      <a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        {repo.split('/')[1]}
                      </a>
                    </span>
                  )}
                </div>
                <div className="project-meta-border"></div>
                <div className="project-buttons">
                  <a
                    href={project.live || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={project.live ? '' : 'disabled-link'}
                  >
                    <span><i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</span>
                  </a>
                  {repo && repo.includes('/') ? (
                    <a
                      href={`https://github.com/${repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span><i className="fa-brands fa-github"></i> Source Code</span>
                    </a>
                  ) : (
                    <a
                      href={`https://github.com/${repo || '23prakashjha'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span><i className="fa-brands fa-github"></i> GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <p className="empty-projects">No projects found. Try another search or category.</p>
      )}

      {filteredProjects.length > 8 && (
        <div className="view-more-container">
          <button className="view-more-button" onClick={toggleShowMore}>
            {showAll ? 'View Less' : `View More (${filteredProjects.length - visibleProjects.length})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
