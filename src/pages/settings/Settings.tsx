import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Settings.scss";

const Settings = () => {
  return (
    <div className="settings-container">
      <Menu />
      <div className="right">
        <Navbar />
      </div>
    </div>
  );
};

export default Settings;
