import React, { useEffect, useState } from 'react';

const cache = {};

const GitHubStats = ({ repo }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!repo || repo === '23prakashjha' || repo.split('/').length < 2) return;

    if (cache[repo]) {
      setStats(cache[repo]);
      return;
    }

    let cancelled = false;

    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.id) {
          const result = {
            stars: data.stargazers_count ?? 0,
            forks: data.forks_count ?? 0,
            language: data.language,
            updated: data.pushed_at ? data.pushed_at.split('T')[0] : null,
          };
          cache[repo] = result;
          setStats(result);
        }
      })
      .catch(() => {});

    return () => { cancelled = true; };
  }, [repo]);

  if (!stats) return null;

  return (
    <div className="github-stats">
      {stats.language && (
        <span className="gh-stat" title="Language">
          <i className="fa-solid fa-circle" style={{ color: langColor(stats.language), fontSize: 10 }}></i>
          {stats.language}
        </span>
      )}
      <span className="gh-stat" title="Stars">
        <i className="fa-regular fa-star"></i>
        {stats.stars}
      </span>
      <span className="gh-stat" title="Forks">
        <i className="fa-solid fa-code-fork"></i>
        {stats.forks}
      </span>
    </div>
  );
};

const langColor = (lang) => {
  const colors = {
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572a5',
    TypeScript: '#3178c6',
    Java: '#b07219',
    'C++': '#f34b7d',
  };
  return colors[lang] || '#6b7280';
};

export default GitHubStats;
