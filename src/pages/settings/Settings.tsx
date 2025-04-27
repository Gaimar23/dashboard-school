import Menu from "../../components/menu/Menu";
import "./Settings.scss";
import Select from "react-select";
import Logo from "../../assets/images/john.jpg";

const Settings = () => {
  const genre = [
    {
      value: 2020,
      label: "2020",
    },
    {
      value: 2021,
      label: "2021",
    },
    {
      value: 2022,
      label: "2022",
    },
    {
      value: 2023,
      label: "2023",
    },
    {
      value: 2024,
      label: "2024",
    },
    {
      value: 2025,
      label: "2025",
    },
  ];

  return (
    <div className="settings-container">
      <Menu />
      <div className="right">
        <div className="settings">
          <div className="title-container">
            <span className="title">Paramètres</span>
          </div>

          <div className="general">
            <div className="top">
              <span>01</span>
              <h1>Général</h1>
            </div>
            <div className="bottom">
              <div className="column">
                <h4>Language</h4>
                <div className="language-container">
                  <div className="row">
                    <input type="checkbox" name="" />
                    <span>French</span>
                  </div>
                  <div className="row">
                    <input type="checkbox" name="" />
                    <span>English</span>
                  </div>
                </div>
              </div>
              <div className="column">
                <h4>Academic Year</h4>
                <div className="year-container">
                  <div className="row">
                    <span>Start</span>
                    <Select
                      options={genre}
                      styles={{
                        menuList: () => ({
                          maxHeight: "150px",
                          overflowY: "scroll",
                          scrollBehavior: "smooth",
                          padding: "3px",
                        }),
                      }}
                    />
                  </div>
                  <div className="row">
                    <span>End</span>
                    <Select
                      options={genre}
                      styles={{
                        menuList: () => ({
                          maxHeight: "150px",
                          overflowY: "scroll",
                          scrollBehavior: "smooth",
                          padding: "3px",
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="school-info">
            <div className="top">
              <span>02</span>
              <h1>School Info</h1>
            </div>
            <div className="bottom">
              <div className="row first">
                <div className="image-container">
                  <img src={Logo} alt="" />
                </div>
                <div className="inputs-container">
                  <input type="text" placeholder="School name" />
                  <input type="email" name="" placeholder="Email" />
                </div>
              </div>

              <div className="row second">
                <input type="text" placeholder="Téléphone" />
                <input type="text" name="" placeholder="Adresse" />
              </div>
              <div className="row third">
                <input type="text" placeholder="Principal" />
                <input type="text" name="" placeholder="Devise" />
              </div>
            </div>
          </div>
          <div className="users-roles">
            <div className="top">
              <span>03</span>
              <h1>Users & roles</h1>
            </div>
            <div className="bottom">
              <div className="column">
                <h4>Roles</h4>
                <div className="roles-container">
                  <div className="first">
                    <div className="row">
                      <input type="checkbox" name="" />
                      <span>Admin</span>
                    </div>
                    <div className="row">
                      <input type="checkbox" name="" />
                      <span>Teacher</span>
                    </div>
                  </div>
                  <div className="second">
                    <div className="row">
                      <input type="checkbox" name="" />
                      <span>Student</span>
                    </div>
                    <div className="row">
                      <input type="checkbox" name="" />
                      <span>Parent</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <h4>Invitations</h4>
                <div className="invitations-container">
                  <input type="text" placeholder="@ adresse email" />
                  <button>Envoyer</button>
                </div>
              </div>
            </div>
          </div>
          <div className="notifications">
            <div className="top">
              <span>04</span>
              <h1>Notifications</h1>
            </div>
            <div className="bottom">
              <div className="column">
                <h4>Notification</h4>
                <div className="row">
                  <input type="checkbox" name="" />
                  <span>Email/Sms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
