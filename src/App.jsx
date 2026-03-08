import "./App.css";
import "./Animate.css";
import ProfilePic from "./components/ProfilePic";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  return (
    <div className="container">
      <ProfilePic />
      <ProfileDetails />
    </div>
  );
}

export default App;