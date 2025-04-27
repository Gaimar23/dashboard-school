import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Profile.scss";
import photo from "../../assets/images/john.jpg";
import Select from "react-select";
import { FaLocationDot } from "react-icons/fa6";
import { ImCalendar } from "react-icons/im";

const options = [
  {
    value: "chocolate",
    label: "Chocolate",
  },
  {
    value: "strawberry",
    label: "Straw",
  },
  {
    value: "vanilla",
    label: "Vanilla",
  },
  {
    value: "economie",
    label: "Economie",
  },
  {
    value: "droit",
    label: "Droit des affaires",
  },
  {
    value: "comptabilité",
    label: "Comptabilité financière",
  },
  {
    value: "math_applique",
    label: "Mathématique appliqué",
  },
  {
    value: "entrepreneuriat",
    label: "Entrepreneuriat",
  },
];

const genre = [
  {
    value: "man",
    label: "Homme",
  },
  {
    value: "woman",
    label: "Femme",
  },
];

const Profile = () => {
  return (
    <div className="profile-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="profile">
          <div className="left">
            <form className="form-profile">
              <div className="image-container">
                <img src={photo} alt="" />
              </div>

              <div className="info">
                <div
                  style={{
                    backgroundColor: "#F7F8FA",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "6px",
                    borderRadius: "6px",
                  }}
                >
                  <div className="row flex">
                    <div className="sub-row">
                      <label htmlFor="">N°ID</label>
                      <input type="text" />
                    </div>
                    <div className="sub-row">
                      <label htmlFor="">Nom</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row flex">
                    <div className="sub-row">
                      <label htmlFor="">Email</label>
                      <input type="text" />
                    </div>
                    <div className="sub-row">
                      <label htmlFor="">Mot de passe</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#F7F8FA",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "6px",
                    borderRadius: "6px",
                    marginTop: "20px",
                  }}
                >
                  <div className="row">
                    <label htmlFor="">Adresse</label>
                    <input type="text" />
                  </div>
                  <div className="row flex">
                    <div className="sub-row">
                      <label htmlFor="">Phone</label>
                      <input type="text" />
                    </div>
                    <div className="sub-row">
                      <label htmlFor="">Genre</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <label htmlFor="">Classes</label>
                    <Select
                      options={options}
                      isMulti
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
                    <label htmlFor="">Sujets</label>
                    <Select
                      options={options}
                      isMulti
                      styles={{
                        menuList: () => ({
                          maxHeight: "80px",
                          overflowY: "scroll",
                          scrollBehavior: "smooth",
                          padding: "3px",
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="button-container">
                <button type="submit">Enregistrer</button>
              </div>
            </form>
          </div>
          <div className="right">
            <div className="card">
              <div className="icons">
                <ImCalendar className="icon" />
                <FaLocationDot className="icon" />
              </div>
              <h1>102</h1>
              <span>Parents</span>
            </div>
            <div className="card">
              <div className="icons">
                <ImCalendar className="icon" />
                <FaLocationDot className="icon" />
              </div>
              <h1>102</h1>
              <span>Teachers</span>
            </div>
            <div className="card">
              <div className="icons">
                <ImCalendar className="icon" />
                <FaLocationDot className="icon" />
              </div>
              <h1>102</h1>
              <span>Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
