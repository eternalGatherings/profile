function Buttons() {
  return (
    <div className="buttons">
      <button className="email-button">
        <img
          src="https://raw.githubusercontent.com/eternalGatherings/personal-db/refs/heads/main/images/email.svg"
          alt="email"
        />
        <a href="mailto:write2sachinkn@outlook.com">Email</a>
      </button>

      <button className="linkedin-button">
        <img
          src="https://raw.githubusercontent.com/eternalGatherings/personal-db/c6ba92c1cd5aa8af0a9a8ff202cbd77005c579c2/images/linkedin.svg"
          alt="linkedin"
        />
        <a
          href="https://www.linkedin.com/in/sachin-kn/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </button>
    </div>
  );
}

export default Buttons;