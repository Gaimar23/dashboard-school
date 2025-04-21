import { IoIosPeople } from "react-icons/io";
import { FaPeopleArrows } from "react-icons/fa6";
import { MdSubject } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { BiConversation } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlinePlayLesson } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { PiUserListBold } from "react-icons/pi";
import { BsCardChecklist } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { PiProjectorScreen } from "react-icons/pi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { role } from "../../data/data";
import "./Menu.scss";
import logo from "../../assets/images/logo_.jpg";

const menuItems = [
  {
    //   title: "MENU",
    items: [
      {
        icon: <GoHome className="menu-icon" />,
        label: "Home",
        href: "/home",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <RiTeamLine className="menu-icon" />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <IoIosPeople className="menu-icon" />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FaPeopleArrows className="menu-icon" />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdSubject className="menu-icon" />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <PiProjectorScreen className="menu-icon" />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      // {
      //   icon: <MdOutlinePlayLesson className="menu-icon" />,
      //   label: "Lessons",
      //   href: "/list/lessons",
      //   visible: ["admin", "teacher"],
      // },
      {
        icon: <PiExam className="menu-icon" />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <BsCardChecklist className="menu-icon" />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaRegListAlt className="menu-icon" />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <PiUserListBold className="menu-icon" />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <BiCategory className="menu-icon" />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <BiConversation className="menu-icon" />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <HiOutlineSpeakerWave className="menu-icon" />,
        label: "Annonces",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    //   title: "OTHER",
    items: [
      {
        icon: <CgProfile className="menu-icon" />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <IoSettingsOutline className="menu-icon" />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <BiLogOut className="menu-icon" />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <div>
        <Link to="/" className="link-logo">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <span>School</span>
        </Link>
      </div>
      <div className="sub-menu-container">
        {menuItems.map((i, index1) => {
          return (
            <div className="link-container" key={index1}>
              {i.items.map((item, index2) => {
                if (item.visible.includes(role)) {
                  return (
                    <NavLink to={item.href} className={"link"} key={index2}>
                      {item.icon}
                      <span className="link-label">{item.label}</span>
                    </NavLink>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
