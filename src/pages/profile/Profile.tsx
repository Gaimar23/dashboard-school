import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Profile.scss";
import photo from "../../assets/images/john.jpg";

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
                <div className="row">
                  <label htmlFor="">Email</label>
                  <input type="email" />
                </div>
                <div className="row">
                  <label htmlFor="">Mot de passe</label>
                  <input type="password" />
                </div>
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
                  <input type="text" />
                </div>
                <div className="row">
                  <label htmlFor="">Sujets</label>
                  <input type="text" />
                </div>
              </div>
            </form>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
