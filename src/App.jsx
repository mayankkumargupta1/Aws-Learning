// src/App.jsx

import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Rocket, Sun, Moon } from 'lucide-react';
import './App.css';

// --- Theme Toggle Component ---
const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="theme-toggle"
    title={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
    aria-label="Toggle theme"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

// --- Project Card Component ---
const ProjectCard = () => (
  <article className="project-card">
    <header className="card-header">
      <div className="icon-wrapper">
        <Rocket size={32} />
      </div>
      <h1>React + Vite AWS Deployment</h1>
    </header>

    <div className="card-body">
      <p>
        This page demonstrates an automated deployment using a <strong>CI/CD pipeline</strong> powered by
        GitHub Actions and <strong>AWS S3 static website hosting</strong>.
      </p>
    </div>
  </article>
);

// --- Main App Component ---
function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app-container">
      <div className="top-bar">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <main className="main-content">
        <ProjectCard />
      </main>
    </div>
  );
}

export default App;

