import "./App.css";
import "./Animate.css";
import CustomeScript from "./components/CustomeScript";
import ProfilePic from "./components/ProfilePic";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  return (
    <div className="container">
      <CustomeScript />
      <ProfilePic />
      <ProfileDetails />
    </div>
  );
}

export default App;