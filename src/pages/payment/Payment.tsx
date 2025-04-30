import "./Payment.scss";
import Logo from "../../assets/images/logo_.jpg";
import Select from "react-select";
// import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Payment = () => {
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

  const navigate = useNavigate();

  return (
    <div className="payment-container">
      <div className="sub-container">
        <div className="top">
          <div className="btn-container">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <FaArrowAltCircleLeft className="icon" />
              <span>Retour</span>
            </button>
          </div>
          <div className="logo-school-name-moto">
            <div className="logo-container">
              <img src={Logo} alt="" />
            </div>
            <div className="school-name">
              <h1>Aron Business School</h1>
              <p>Be the best amongt the best</p>
            </div>
          </div>
          <div className="school-details">
            <span>Address, phone number, website,</span>
            <span> and other information</span>
          </div>
        </div>

        <div className="bottom">
          <span className="title">
            {/* <FaPeopleGroup className="icon" /> */}
            <div className="pictures01">
              <img src={Logo} alt="" />
              <img src={Logo} alt="" />
              <img src={Logo} alt="" />
            </div>

            <span style={{ opacity: "0" }}>Gestion des paiements élèves</span>
            <div className="pictures">
              <img src={Logo} alt="" />
              <img src={Logo} alt="" />
              <img src={Logo} alt="" />
            </div>
          </span>

          <form>
            <div className="inputs-container">
              <div className="row">
                <label htmlFor="">Matricule</label>
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
                <label htmlFor="">Nom d'élève</label>
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
                <label htmlFor="">Class</label>
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
                <label htmlFor="">Date</label>
                <input type="date" name="" />
              </div>
              <div className="row">
                <label htmlFor="">Nature</label>
                <input type="text" name="" />
              </div>
              <div className="row">
                <label htmlFor="">Montant</label>
                <input type="number" name="" />
              </div>
            </div>
            <div className="submit-container">
              <button type="submit">Valider</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
