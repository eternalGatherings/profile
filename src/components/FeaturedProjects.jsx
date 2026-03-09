import React from "react";

const projects = [
  {
    title: "Automation Testing Framework",
    icon: "",
    points: [
      "Built using Playwright + Cucumber.js",
      "Supports parallel execution",
      "HTML reports",
      "API + UI testing",
      "CI/CD integration",
    ],
  },
  {
    title: "API Automation Framework",
    icon: "",
    points: [
        "REST Assured based framework",
        "Reusable request builder",
        "Schema validation",
        "Integrated with Jenkins"
    ]
  },
];

function FeaturedProjects() {
  return (
    <div className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <h3>{project.title}</h3>
            </div>

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;