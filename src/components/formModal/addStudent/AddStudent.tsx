import "./AddStudent.scss";
import { RxCross1 } from "react-icons/rx";
import studentImage from "../../../assets/images/john.jpg";
import Select from "react-select";
import React from "react";

interface AddStudentProps {
  setShowAddStudent: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddStudent: React.FC<AddStudentProps> = ({ setShowAddStudent }) => {
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

  return (
    <div className="add-student-container" id="add-student-container">
      <form className="form-student">
        <div className="head-form">
          <div className="first-row">
            <div className="upload-picture">
              <label htmlFor="student-picture">
                <img
                  src={studentImage}
                  alt="Profil"
                  className="student-image"
                />
              </label>
              <input type="file" id="student-picture" hidden required />
            </div>
            <h3>New Student</h3>
          </div>
          <RxCross1
            className="close"
            onClick={() => setShowAddStudent(false)}
          />
        </div>
        <h4 className="sub-title one">Identification</h4>

        <div className="first row">
          <div className="input-container">
            <label htmlFor="">Matricule</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="input-container">
            <label htmlFor="">Mot de Pass</label>
            <input type="password" />
          </div>
        </div>

        <h4 className="sub-title two">Information Personnel</h4>
        <div className="second row">
          <div className="input-container">
            <label htmlFor="">Nom</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Téléphone</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Adresse</label>
            <input type="text" />
          </div>
        </div>
        <div className="third row">
          <div className="input-container">
            <label htmlFor="">Parents</label>
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
          <div className="input-container">
            <label htmlFor="">Classe</label>
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
          <div className="input-container">
            <label htmlFor="">Genre</label>
            <Select options={genre} />
          </div>
        </div>

        <button type="submit" className="btn-student">
          Créer
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
