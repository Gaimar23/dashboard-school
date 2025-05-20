import React, { useEffect, useState } from "react";
import "./AddAssignment.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import axios from "axios";

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

  const [pdf, setPdf] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      console.log("Please select a pdf file");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      console.log("File size should be less than 5MB");
      return;
    }

    setPdf(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //
    try {
    } catch (err) {}
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
          <textarea name="" rows={2} placeholder=""></textarea>
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
            accept="application/pdf"
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
