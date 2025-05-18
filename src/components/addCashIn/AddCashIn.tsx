import "./AddCashIn.scss";
import { RxCross1 } from "react-icons/rx";
import { RiAddLargeFill } from "react-icons/ri";
import React, { FormEvent, useEffect, useState } from "react";
import { RiFileAddFill } from "react-icons/ri";

type DataType = {
  rang: string;
  label: string;
  amount: number;
};

interface AddCashInProps {
  setShowAddCashIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCashIn: React.FC<AddCashInProps> = ({ setShowAddCashIn }) => {
  const [movements, setMovements] = useState<any[]>([]);
  const [editing, setEditing] = useState(false);
  const [rowIndex, setRowIndex] = useState<number>();
  const [inputs, setInputs] = useState<NodeListOf<HTMLInputElement>>();
  const [entries, setEntries] = useState({
    label: "",
    amount: "",
  });
  const [docInfo, setDocInfo] = useState({
    number: "",
    operator: "",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    setInputs(document.querySelectorAll("input"));
    getDocNumber();
  }, []);

  const getDocNumber = () => {
    // const newDocNumber = await axios.get(`${url}/api/cashIn/newDoc`);
    // if (newDocNumber.data.success) {
    //   //
    // }
    setDocInfo({
      number: "CashIn001",
      operator: "Sarah",
      date: new Date().toISOString().split("T")[0],
    });
  };

  const closeAddCashIn = () => {
    setShowAddCashIn(false);
  };

  const handleEntriesRows = (event: FormEvent) => {
    event.preventDefault();

    if (entries.label === "" || entries.amount === "") {
      return console.log("Veuillez remplir tous les champs");
    }

    if (editing) {
      if (rowIndex !== undefined) {
        let rang;
        if (rowIndex < 9) {
          rang = "0" + (rowIndex + 1);
        } else {
          rang = `${rowIndex + 1}`;
        }
        movements[rowIndex].label = entries.label;
        movements[rowIndex].amount = parseInt(entries.amount);
        movements[rowIndex].rang = rang;

        setEditing(false);
      }
    } else {
      const data: Partial<DataType> = {};
      const the_Amount = parseInt(entries.amount);

      let rang;
      if (movements.length < 9) {
        rang = "0" + (movements.length + 1);
      } else {
        rang = `${movements.length + 1}`;
      }

      if (!isNaN(the_Amount)) {
        data["label"] = entries.label;
        data["amount"] = the_Amount;
        data["rang"] = rang;

        movements.push(data);
      }
    }

    setEntries({
      label: "",
      amount: "",
    });
  };

  const getRowIndex = (index: number) => {
    setRowIndex(index);

    setEntries({
      label: movements[index].label,
      amount: movements[index].amount,
    });

    setEditing(true);
  };

  const onchangeMovementsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setEntries((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (movements.length === 0) {
      return;
    }

    const formData = {};
    formData.number = "092";
    formData.date = "12/09/2025";
    formData.operator = "John";

    movements.forEach((movement) => {
      delete movement.rang;
    });

    formData.movements = movements;

    // const response = await axios.post(`${url}/api/cashIn/add`, formData);
    // if (response.data.success) {
    //   //

    //   movements.length = 0;
    // }
  };

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
            value={docInfo.number}
          />
          <button className="btn-save">Confirmer</button>
          <div className="close" onClick={closeAddCashIn}>
            <RxCross1 className="icon" />
          </div>
        </div>
        <div className="second">
          <label htmlFor="">Opérateur</label>
          <input
            type="text"
            placeholder="Opérateur"
            name="operator"
            value={docInfo.operator}
          />
        </div>
        <div className="third">
          <label htmlFor="">Date</label>
          <input
            type="date"
            placeholder="Opérateur"
            name="date"
            value={docInfo.date}
          />
        </div>

        <div className="sub-container-entry">
          <form className="entries" onSubmit={handleEntriesRows}>
            <div className="entry input">
              <input
                type="text"
                placeholder="Libellé"
                name="label"
                value={entries.label}
                onChange={onchangeMovementsHandler}
              />
            </div>
            <div className="entry input">
              <input
                type="number"
                placeholder="Montant"
                name="amount"
                value={entries.amount}
                onChange={onchangeMovementsHandler}
              />
            </div>
            <div className="entry btn">
              <button
                type="submit"
                className="validate"
                onClick={handleEntriesRows}
              >
                <RiAddLargeFill className="icon" />
              </button>
            </div>
          </form>

          <div className="list">
            <div className="list-data the-head">
              <b>Numéro</b>
              <b>Libellé</b>
              <b>Montant</b>
            </div>
            <div className="details">
              {movements.length > 0 ? (
                movements.map((movement, index) => {
                  return (
                    <div
                      className="list-data"
                      key={index}
                      onClick={() => getRowIndex(index)}
                    >
                      <b>{movement.rang}</b>
                      <b>{movement.label}</b>
                      <b>{movement.amount}</b>
                    </div>
                  );
                })
              ) : (
                <div className="nothing">
                  <RiFileAddFill size={105} />
                </div>
              )}

              {/* <div className="list-data">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCashIn;
