import React, { useState } from "react";
import "./AddAssignment.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";

interface AddAssignmentProps {
  setShowAddAssignment: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAssignment: React.FC<AddAssignmentProps> = ({
  setShowAddAssignment,
}) => {
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

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      console.log("selectedFile:", selectedFile);
      setFile(selectedFile);
    } else {
      setFile(null);
      console.log("Please select a pdf file");
    }
  };

  return (
    <div className="add-assignment-container">
      <form className="form-assignment">
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Assignment</h3>
          </div>
          <RxCross1
            className="close"
            onClick={() => setShowAddAssignment(false)}
          />
        </div>

        <div className="row">
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

        <div className="row">
          <label htmlFor="">Detail</label>
          <input type="text" />
        </div>

        <div className="row">
          <label htmlFor="">Description</label>
          <textarea name="" rows={3} placeholder=""></textarea>
        </div>

        <div className="row">
          <label htmlFor="">Detail</label>
          <input type="date" />
        </div>

        <div className="row two">
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
          <div className="sub-row">
            <label htmlFor="">Teacher</label>
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
        <div className="row file">
          <label htmlFor="pdf-file">Document</label>
          <input
            type="file"
            name=""
            id="pdf-file"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn-assignment">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddAssignment;
