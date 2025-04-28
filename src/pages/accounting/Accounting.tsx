import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./Accounting.scss";

const Accounting = () => {
  return (
    <div className="accounting-container">
      <Menu />
      <div className="right">
        <Navbar />
        <div className="sub-container">
          <div className="commandes">
            <div className="navigation-container">
              <div className="slide-track">
                <button className="slide-button">
                  icon
                  <span>Paiement</span>
                </button>
                <button className="slide-button">2</button>
                <button className="slide-button">3</button>
                <button className="slide-button">4</button>
                <button className="slide-button">5</button>
              </div>
              <div className="slide-track">
                <button className="slide-button">Ok</button>
                <button className="slide-button">2</button>
                <button className="slide-button">3</button>
                <button className="slide-button">4</button>
                <button className="slide-button">5</button>
              </div>
            </div>
            <div className="navigation-container02">
              <div className="slide-track">
                <button className="slide-button">1</button>
                <button className="slide-button">2</button>
                <button className="slide-button">3</button>
                <button className="slide-button">4</button>
                <button className="slide-button">5</button>
              </div>
              <div className="slide-track">
                <button className="slide-button">1</button>
                <button className="slide-button">2</button>
                <button className="slide-button">3</button>
                <button className="slide-button">4</button>
                <button className="slide-button">5</button>
              </div>
            </div>
            <div className="navigation-container03">
              <div className="slide-track">
                <button className="slide-button">1</button>
                <button className="slide-button">2</button>
                <button className="slide-button">3</button>
                <button className="slide-button">4</button>
                <button className="slide-button">5</button>
              </div>
              <div className="slide-track">
                <button className="slide-button">1</button>
                <button className="slide-button">2</button>
                <button className="slide-button">3</button>
                <button className="slide-button">4</button>
                <button className="slide-button">5</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
