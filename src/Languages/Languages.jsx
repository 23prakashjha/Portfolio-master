import React, { useState } from 'react';
import './Languages.css';

const Languages = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'TailwindCSS', 'Next.js', 'Typescript'],
    backend: ['Node.js', 'Express.js', 'Python', 'Java'],
    database: ['MongoDB', 'MySQL'],
    Tools: ['Git', 'GitHub','Netlify', 'Vercel','Render'],
  };

  const theoryData = {
    frontend: {
      'HTML': {
        title: 'HTML (HyperText Markup Language)',
        content: [
          'HTML is the standard markup language for creating web pages',
          'It provides the structure and content of web documents',
          'HTML elements are represented by tags',
          'Key concepts include: semantic HTML, forms, tables, multimedia',
          'HTML5 introduced new semantic elements like <header>, <nav>, <article>, <section>',
          'Always validate HTML for better accessibility and SEO'
        ],
        examples: [
          '<!DOCTYPE html>',
          '<html>',
          '<head><title>Page Title</title></head>',
          '<body><h1>Hello World</h1></body>',
          '</html>'
        ]
      },
      'CSS': {
        title: 'CSS (Cascading Style Sheets)',
        content: [
          'CSS is used to style and layout web pages',
          'It controls colors, fonts, spacing, and positioning',
          'CSS works with HTML to create responsive designs',
          'Key concepts: selectors, properties, values, box model',
          'Modern CSS includes Flexbox and Grid layouts',
          'CSS3 introduced animations, transitions, and transforms'
        ],
        examples: [
          'body { font-family: Arial; }',
          '.container { display: flex; }',
          'h1 { color: #333; margin: 20px; }',
          '@media (max-width: 768px) { ... }',
          'button { transition: all 0.3s; }'
        ]
      },
      'JavaScript': {
        title: 'JavaScript',
        content: [
          'JavaScript is a programming language for web interactivity',
          'It runs in browsers and can also be used server-side (Node.js)',
          'JS enables dynamic content, form validation, and API calls',
          'Key concepts: variables, functions, objects, arrays, DOM manipulation',
          'ES6+ features: arrow functions, destructuring, promises, async/await',
          'JavaScript frameworks: React, Vue, Angular'
        ],
        examples: [
          'const name = "John";',
          'function greet() { return "Hello!"; }',
          'document.getElementById("btn").addEventListener("click", handler);',
          'fetch("/api/data").then(res => res.json());',
          'const [count, setCount] = useState(0);'
        ]
      },
      'React.js': {
        title: 'React.js',
        content: [
          'React is a JavaScript library for building user interfaces',
          'It uses a component-based architecture',
          'React uses a virtual DOM for efficient updates',
          'Key concepts: components, props, state, hooks, lifecycle',
          'JSX allows writing HTML-like syntax in JavaScript',
          'React ecosystem includes Redux, React Router, Next.js'
        ],
        examples: [
          'function App() { return <div>Hello</div>; }',
          'const [user, setUser] = useState(null);',
          'useEffect(() => { ... }, []);',
          '<Component name="John" age={25} />',
          'const items = data.map(item => <Item key={item.id} />);'
        ]
      },
      'Bootstrap, Tailwind CSS': {
        title: 'CSS Frameworks',
        content: [
          'Bootstrap is a popular CSS framework for responsive design',
          'Tailwind CSS is a utility-first CSS framework',
          'Both provide pre-built components and utilities',
          'Bootstrap includes: grid system, components, utilities',
          'Tailwind focuses on utility classes for rapid development',
          'Choose based on project needs and team preference'
        ],
        examples: [
          'Bootstrap: <div class="container"><div class="row">...</div></div>',
          'Tailwind: <div className="flex justify-between p-4">...</div>',
          'Bootstrap: <button class="btn btn-primary">Click</button>',
          'Tailwind: <button className="bg-blue-500 text-white px-4 py-2">Click</button>'
        ]
      }
    },
    backend: {
      'Node.js': {
        title: 'Node.js',
        content: [
          'Node.js is a JavaScript runtime built on Chrome\'s V8 engine',
          'It allows JavaScript to run outside the browser',
          'Node.js is perfect for building scalable network applications',
          'Key features: non-blocking I/O, event-driven architecture',
          'Common uses: REST APIs, real-time applications, microservices',
          'Node.js ecosystem: npm, Express.js, Socket.io'
        ],
        examples: [
          'const http = require("http");',
          'const express = require("express");',
          'app.get("/api/users", (req, res) => { ... });',
          'fs.readFile("file.txt", "utf8", callback);',
          'const server = app.listen(3000);'
        ]
      },
      'Express.js': {
        title: 'Express.js',
        content: [
          'Express.js is a minimal web framework for Node.js',
          'It simplifies building web applications and APIs',
          'Express provides routing, middleware, and HTTP utilities',
          'Key concepts: routes, middleware, request/response objects',
          'Common middleware: body-parser, cors, morgan',
          'Express is flexible and unopinionated'
        ],
        examples: [
          'const app = express();',
          'app.use(express.json());',
          'app.use("/api", apiRouter);',
          'app.post("/users", createUser);',
          'app.use((err, req, res, next) => { ... });'
        ]
      },
      'Python': {
        title: 'Python',
        content: [
          'Python is a high-level, interpreted programming language',
          'Known for its simple, readable syntax',
          'Python is versatile: web dev, data science, AI, automation',
          'Key features: dynamic typing, automatic memory management',
          'Popular frameworks: Django, Flask, FastAPI',
          'Python emphasizes code readability and maintainability'
        ],
        examples: [
          'def greet(name): return f"Hello, {name}!"',
          'class Person: def __init__(self, name): self.name = name',
          'import requests; response = requests.get(url)',
          'with open("file.txt") as f: content = f.read()',
          'numbers = [1, 2, 3, 4, 5]'
        ]
      },
      'Java': {
        title: 'Java',
        content: [
          'Java is a class-based, object-oriented programming language',
          'It follows "write once, run anywhere" principle',
          'Java is widely used in enterprise applications',
          'Key features: strong typing, garbage collection, multithreading',
          'Popular frameworks: Spring, Hibernate, Maven',
          'Java Virtual Machine (JVM) enables platform independence'
        ],
        examples: [
          'public class Main { public static void main(String[] args) { ... } }',
          'String name = "John";',
          'List<String> items = new ArrayList<>();',
          '@RestController public class ApiController { ... }',
          'try { ... } catch (Exception e) { ... }'
        ]
      }
    },
    database: {
      'MongoDB': {
        title: 'MongoDB',
        content: [
          'MongoDB is a NoSQL, document-oriented database',
          'It stores data in flexible, JSON-like documents',
          'MongoDB is schema-less and highly scalable',
          'Key concepts: collections, documents, BSON, aggregation',
          'Features: indexing, replication, sharding',
          'MongoDB Atlas provides cloud hosting services'
        ],
        examples: [
          'db.users.insertOne({name: "John", age: 30});',
          'db.users.find({age: {$gt: 25}});',
          'db.users.updateOne({_id: 1}, {$set: {status: "active"}});',
          'db.users.deleteOne({name: "John"});',
          'db.users.aggregate([{$match: {...}}, {$group: {...}}]);'
        ]
      },
      'MySQL': {
        title: 'MySQL',
        content: [
          'MySQL is a popular open-source relational database',
          'It uses SQL (Structured Query Language)',
          'MySQL is known for reliability and performance',
          'Key concepts: tables, rows, columns, primary keys, foreign keys',
          'Features: ACID compliance, transactions, indexing',
          'Commonly used with PHP, Node.js, Python applications'
        ],
        examples: [
          'CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));',
          'INSERT INTO users (name, email) VALUES ("John", "john@email.com");',
          'SELECT * FROM users WHERE age > 25;',
          'UPDATE users SET status = "active" WHERE id = 1;',
          'DELETE FROM users WHERE id = 1;'
        ]
      }
    },
    Tools: {
      'Git': {
        title: 'Git',
        content: [
          'Git is a distributed version control system',
          'It tracks changes in source code during software development',
          'Git enables collaboration among developers',
          'Key concepts: repository, commit, branch, merge, pull request',
          'Common commands: git add, git commit, git push, git pull',
          'Git workflows: GitFlow, GitHub Flow, GitLab Flow'
        ],
        examples: [
          'git init',
          'git add .',
          'git commit -m "Initial commit"',
          'git push origin main',
          'git checkout -b feature-branch',
          'git merge feature-branch'
        ]
      },
      'GitHub': {
        title: 'GitHub',
        content: [
          'GitHub is a web-based platform for hosting Git repositories',
          'It provides collaboration tools and social features',
          'GitHub offers issue tracking, pull requests, and actions',
          'Key features: repositories, organizations, workflows',
          'GitHub Actions enable CI/CD pipelines',
          'GitHub Pages hosts static websites'
        ],
        examples: [
          'Create a new repository on GitHub',
          'Clone: git clone https://github.com/user/repo.git',
          'Create pull request to propose changes',
          'Set up GitHub Actions for automated testing',
          'Use GitHub Issues for bug tracking'
        ]
      },
      'Netlify': {
        title: 'Netlify',
        content: [
          'Netlify is a platform for deploying modern web projects',
          'It specializes in static site hosting and serverless functions',
          'Netlify offers continuous deployment from Git',
          'Key features: instant rollbacks, form handling, A/B testing',
          'Netlify Functions enable serverless backend',
          'Integrates well with JAMstack architecture'
        ],
        examples: [
          'Connect Git repository to Netlify',
          'Configure build settings and environment variables',
          'Deploy automatically on git push',
          'Use Netlify Forms for static site forms',
          'Implement Netlify Functions for dynamic features'
        ]
      },
      'Vercel': {
        title: 'Vercel',
        content: [
          'Vercel is a cloud platform for static sites and serverless functions',
          'It\'s optimized for Next.js and React applications',
          'Vercel provides automatic HTTPS and global CDN',
          'Key features: preview deployments, analytics, edge functions',
          'Vercel CLI enables local development and deployment',
          'Seamless integration with Git workflows'
        ],
        examples: [
          'vercel deploy',
          'vercel --prod',
          'Configure vercel.json for custom settings',
          'Use environment variables in Vercel',
          'Deploy Next.js apps with zero configuration'
        ]
      },
      'Render': {
        title: 'Render',
        content: [
          'Render is a unified cloud platform for building and running apps',
          'It supports web services, static sites, databases, and cron jobs',
          'Render offers free tier for hobby projects',
          'Key features: auto-deploy from Git, custom domains, SSL',
          'Render supports multiple programming languages and frameworks',
          'Simple pricing based on resource usage'
        ],
        examples: [
          'Connect GitHub repository to Render',
          'Configure build command and start command',
          'Set up environment variables',
          'Use Render for both frontend and backend',
          'Deploy PostgreSQL databases easily'
        ]
      }
    }
  };

  return (
    <div className="languages-container" id="languages">
      <span className="section-kicker">Skills Lab</span>
      <h2 className="section-heading">Technologies I work with</h2>
      <p className="section-copy">
        A practical stack for building responsive interfaces, APIs, databases and production deployments.
      </p>
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
          <div 
            className="language-item clickable" 
            key={index}
            onClick={() => setSelectedLanguage(lang)}
            title="Click to view details"
          >
            {lang}
            <span className="theory-hint">Learn</span>
          </div>
        ))}
      </div>

      {selectedLanguage && theoryData[activeTab]?.[selectedLanguage] && (
        <div className="theory-modal" onClick={() => setSelectedLanguage(null)}>
          <div className="theory-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedLanguage(null)} aria-label="Close details">x</button>
            <h3>{theoryData[activeTab][selectedLanguage].title}</h3>
            
            <div className="theory-section">
              <h4>Key Concepts</h4>
              <ul>
                {theoryData[activeTab][selectedLanguage].content.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {theoryData[activeTab][selectedLanguage].examples && (
              <div className="theory-section">
                <h4>Code Examples</h4>
                <div className="code-examples">
                  {theoryData[activeTab][selectedLanguage].examples.map((example, index) => (
                    <code key={index}>{example}</code>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Languages;
