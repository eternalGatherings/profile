function CareerTimeline() {
  const timeline = [
    {
      year: "2019 Feb - 2022 June",
      title: "Emertail Technologies Pvt Ltd",
      desc: "Started Working as a Manual test engineer and later moved to automation testing using Selenium + Java."
    },
    {
      year: "2022 June - 2024 July",
      title: "Odysseus Solutions Pvt. Ltd.",
      desc: "Worked with manual testing, Web automation using Selenium + Java & Playwright + JavaScript."
    },
    {
      year: "2024 July - Present",
      title: "Mirafra Technologies Pvt. Ltd.",
      desc: "Working on Playwright with JavaScript Automation."
    }
  ];

  return (
    <div className="timeline-section animated fadeInUp">
      <h2 className="section-title">Career Timeline</h2>

      <div className="timeline">
        {timeline.reverse().map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerTimeline;