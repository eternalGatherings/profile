import Buttons from "./Buttons";
import About from "./About";
import Footer from "./Footer";

function ProfileDetails() {
  return (
    <div className="profile-details">
      <div className="name-designation animated bounceInUp">
        <span className="name">Sachin Kn</span>

        <span className="designation">
          Full Stack Web Developer & Automation tester
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

      <Footer />
    </div>
  );
}

export default ProfileDetails;