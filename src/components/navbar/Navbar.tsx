import "./Navbar.scss";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import profil from "../../assets/images/john.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="search-bar">
        <IoSearch className="icon" />
        <input type="text" placeholder="Chercher..." />
      </div>

      <div className="messages-notifications-user">
        <div className="message-container">
          <AiOutlineMessage className="icon" />
        </div>
        <div className="announcement-container">
          <MdOutlineNotifications className="icon" />
          <span className="count">12</span>
        </div>
        <div className="user-info">
          <span className="name">John Doe</span>
          <span className="role">Admin</span>
        </div>
        <div className="image-profile-container">
          <img src={profil} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
