import "./AddCashIn.scss";
import { RxCross1 } from "react-icons/rx";
import { RiAddLargeFill } from "react-icons/ri";

const AddCashIn = () => {
  return (
    <div className="add-cash-in">
      <div className="sub-container">
        <div className="first">
          <label htmlFor="">Encaissement</label>
          <input
            type="text"
            disabled
            required
            name="number"
            placeholder="N° Pièce"
          />
          <button className="btn-save">Confirmer</button>
          <div className="close">
            <RxCross1 className="icon" />
          </div>
        </div>
        <div className="second">
          <label htmlFor="">Opérateur</label>
          <input type="text" placeholder="Opérateur" name="operator" />
        </div>
        <div className="third">
          <label htmlFor="">Date</label>
          <input type="date" placeholder="Opérateur" name="operator" />
        </div>

        <div className="sub-container-entry">
          <div className="entries">
            <div className="entry input">
              <input type="text" placeholder="Libellé" name="label" />
            </div>
            <div className="entry input">
              <input type="number" placeholder="Montant" name="amount" />
            </div>
            <div className="entry btn">
              <button className="validate">
                <RiAddLargeFill className="icon" />
              </button>
            </div>
          </div>

          <div className="list">
            <div className="list-data the-head">
              <b>Numéro</b>
              <b>Libellé</b>
              <b>Montant</b>
            </div>
            <div className="details">
              <div className="list-data">
                <b>01</b>
                <b>Retour d'espèce sur achat</b>
                <b>12300</b>
              </div>
              <div className="list-data">
                <b>02</b>
                <b>Retour d'espèce sur achat</b>
                <b>23000</b>
              </div>
              <div className="list-data">
                <b>03</b>
                <b>Retour d'espèce sur achat</b>
                <b>41500</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCashIn;
