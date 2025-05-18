import React from "react";
import "./AddSubject.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";

interface AddSubjectProps {
  setShowAddSubject: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddSubject: React.FC<AddSubjectProps> = ({ setShowAddSubject }) => {
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
    <div className="add-subject-container">
      <form className="form-subject">
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Subject</h3>
          </div>
          <RxCross1
            className="close"
            onClick={() => setShowAddSubject(false)}
          />
        </div>

        <div className="row">
          <div className="input-container">
            <label htmlFor="">Subject</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Teachers</label>
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
        </div>
        <button type="submit" className="btn-subject">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddSubject;
