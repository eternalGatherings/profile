function ToolsUsed() {

  const tools = {
    development: ["VS Code", "Git", "GitHub", "Node.js", "Java", "HTML", "CSS", "SQL"],
    testing: ["Playwright", "Selenium", "Cucumber", "Mocha", "TestNG"],
    api: ["Postman", "REST Assured"],
  };

  return (
    <div className="tools-section animated fadeInUp">

      <h2 className="section-title">Tools I Use</h2>

      <div className="tools-grid">

        <div className="tool-card">
          <h3>Development</h3>
          <ul>
            {tools.development.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="tool-card">
          <h3>Web UI Testing</h3>
          <ul>
            {tools.testing.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="tool-card">
          <h3>API Testing</h3>
          <ul>
            {tools.api.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ToolsUsed;