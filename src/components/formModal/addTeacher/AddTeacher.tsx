import "./AddTeacher.scss";
import { RxCross1 } from "react-icons/rx";
import teacherImage from "../../../assets/images/john.jpg";
import Select from "react-select";
import React from "react";

interface AddTeacherProps {
  setShowAddTeacher: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTeacher: React.FC<AddTeacherProps> = ({ setShowAddTeacher }) => {
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
    <div className="add-teacher-container" id="add-teacher-container">
      <form className="form-teacher">
        <div className="head-form">
          <div className="first-row">
            <div className="upload-picture">
              <label htmlFor="teacher-picture">
                <img
                  src={teacherImage}
                  alt="Profil"
                  className="teacher-image"
                />
              </label>
              <input type="file" id="teacher-picture" hidden required />
            </div>
            <h3>New Teacher</h3>
          </div>
          <RxCross1
            className="close"
            onClick={() => setShowAddTeacher(false)}
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
            <label htmlFor="">Sujets</label>
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
            <label htmlFor="">Classes</label>
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
            <label htmlFor="">Genre</label>
            <Select options={genre} />
          </div>
        </div>

        <button type="submit" className="btn-teacher">
          Créer
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
