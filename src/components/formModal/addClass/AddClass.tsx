import React from "react";
import "./AddClass.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";

interface AddClassProps {
  setShowAddClass: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddClass: React.FC<AddClassProps> = ({ setShowAddClass }) => {
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

  return (
    <div className="add-class-container">
      <form className="form-class">
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Class</h3>
          </div>
          <RxCross1 className="close" onClick={() => setShowAddClass(false)} />
        </div>

        <div className="row first">
          <label htmlFor="">Class</label>
          <input type="text" />
        </div>
        <div className="row second">
          <div className="sub-one">
            <label htmlFor="">Capacity</label>
            <input type="text" />
          </div>
          <div className="sub-one">
            <label htmlFor="">Grade</label>
            <input type="text" />
          </div>
        </div>
        <div className="row third">
          <label htmlFor="">Supervisor</label>
          <Select
            options={options}
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
        <button type="submit" className="btn-class">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddClass;
