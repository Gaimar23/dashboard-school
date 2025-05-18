import React from "react";
import "./AddExam.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";

interface AddExamProps {
  setShowAddExam: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddExam: React.FC<AddExamProps> = ({ setShowAddExam }) => {
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
    <div className="add-exam-container">
      <form className="form-exam">
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Class</h3>
          </div>
          <RxCross1 className="close" onClick={() => setShowAddExam(false)} />
        </div>

        <div className="row one">
          <label htmlFor="">Subject</label>
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
        <div className="row one">
          <label htmlFor="">Detail</label>
          <input type="text" />
        </div>
        <div className="row two">
          <div className="sub-row">
            <label htmlFor="">Term</label>
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
          <div className="sub-row">
            <label htmlFor="">Class</label>
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
        </div>

        <div className="row one">
          <label htmlFor="">Date</label>
          <input type="date" />
        </div>

        <div className="row two">
          <div className="sub-row">
            <label htmlFor="">Début</label>
            <input type="time" />
          </div>
          <div className="sub-row">
            <label htmlFor="">Fin</label>
            <input type="time" />
          </div>
        </div>
        <button type="submit" className="btn-exam">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddExam;
