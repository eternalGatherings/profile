import Buttons from "./Buttons";
import About from "./About";
import CareerTimeline from "./CareerTimeline";
import ToolsUsed from "./ToolsUsed";
import Footer from "./Footer";

function ProfileDetails() {
  return (
    <div className="profile-details">

      <div className="content-scroll">
        <div className="name-designation animated bounceInUp">
          <span className="name">Sachin Kn</span>

          <span className="designation">
            Manual & Automation QA Engineer
          </span>

          <a
            className="website"
            href="https://www.sachinkn.in/"
            target="_blank"
            rel="noreferrer"
          >
            www.sachinkn.in
          </a>

          <Buttons />
        </div>

        <About />
        <CareerTimeline />
        <ToolsUsed />
      </div>

      <Footer />

    </div>
  );
}

export default ProfileDetails;