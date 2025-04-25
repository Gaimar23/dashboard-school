import "./AddParent.scss";
import { RxCross1 } from "react-icons/rx";
import parentImage from "../../../assets/images/john.jpg";
import Select from "react-select";
import React from "react";

interface AddParentProps {
  setShowAddParent: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddParent: React.FC<AddParentProps> = ({ setShowAddParent }) => {
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
    <div className="add-parent-container" id="add-parent-container">
      <form className="form-parent">
        <div className="head-form">
          <div className="first-row">
            <div className="upload-picture">
              <label htmlFor="parent-picture">
                <img src={parentImage} alt="Profil" className="parent-image" />
              </label>
              <input type="file" id="parent-picture" hidden required />
            </div>
            <h3>New Parent</h3>
          </div>
          <RxCross1 className="close" onClick={() => setShowAddParent(false)} />
        </div>
        <h4 className="sub-title one">Identification</h4>

        <div className="first row">
          <div className="input-container">
            <label htmlFor="">Genre</label>
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
            <label htmlFor="">Nom</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Prénom</label>
            <input type="text" />
          </div>
        </div>

        <h4 className="sub-title two">Information Personnel</h4>
        <div className="second row">
          <div className="input-container">
            <label htmlFor="">Email</label>
            <input type="email" />
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
            <label htmlFor="">Mot de passe</label>
            <input type="password" />
          </div>

          <div className="input-container">
            <label htmlFor="">Elèves</label>
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

        <button type="submit" className="btn-parent">
          Créer
        </button>
      </form>
    </div>
  );
};

export default AddParent;
