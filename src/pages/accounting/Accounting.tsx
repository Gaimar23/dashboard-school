import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Accounting.scss";
import { MdAccountBalance } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { TbCashBanknoteOff } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import { FaSliders } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AddCashIn from "../../components/addCashIn/AddCashIn";

const Accounting = () => {
  const navigate = useNavigate();
  return (
    <div className="accounting-container">
      <Menu />
      <AddCashIn />
      <div className="right">
        <Navbar />
        <div className="sub-container">
          <div className="slash-second">
            <span className="one"></span>
            <span className="two"></span>
          </div>
          <div className="slash-first">
            <span className="one"></span>
            <span className="two"></span>
          </div>

          <div className="commandes">
            <div className="navigation-container">
              <div className="slide-track">
                <button
                  className="slide-button"
                  onClick={() => navigate(`/accounting/students/payments`)}
                >
                  <div className="icon-title">
                    <MdAccountBalance className="icon" />
                    <span>Paiement Elèves</span>
                  </div>
                </button>
                <button
                  className="slide-button"
                  onClick={() => navigate(`/accounting/students/payments/list`)}
                >
                  <div className="icon-title">
                    <CiBoxList className="icon" />
                    <span>Liste des Paiements</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <BsCashCoin className="icon" />
                    <span>Encaissement</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <TbCashBanknoteOff className="icon" />
                    <span>Décaissement</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <FaSliders className="icon" />
                    <span>Salaires</span>
                  </div>
                </button>
              </div>
              <div className="slide-track">
                <button className="slide-button">
                  <div className="icon-title">
                    <MdAccountBalance className="icon" />
                    <span>Paiement Elèves</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <CiBoxList className="icon" />
                    <span>Liste des Paiements</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <BsCashCoin className="icon" />
                    <span>Encaissement</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <TbCashBanknoteOff className="icon" />
                    <span>Décaissement</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <FaSliders className="icon" />
                    <span>Salaires</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="navigation-container02">
              <div className="slide-track">
                <button className="slide-button">
                  <div className="icon-title">
                    <MdAccountBalance className="icon" />
                    <span>Paiement Elèves</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <CiBoxList className="icon" />
                    <span>Liste des Paiements</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <BsCashCoin className="icon" />
                    <span>Encaissement</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <TbCashBanknoteOff className="icon" />
                    <span>Décaissement</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <FaSliders className="icon" />
                    <span>Salaires</span>
                  </div>
                </button>
              </div>
              <div className="slide-track">
                <button className="slide-button">
                  <div className="icon-title">
                    <MdAccountBalance className="icon" />
                    <span>Paiement Elèves</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <CiBoxList className="icon" />
                    <span>Liste des Paiements</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <BsCashCoin className="icon" />
                    <span>Encaissement</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <TbCashBanknoteOff className="icon" />
                    <span>Décaissement</span>
                  </div>
                </button>
                <button className="slide-button">
                  <div className="icon-title">
                    <FaSliders className="icon" />
                    <span>Salaires</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
