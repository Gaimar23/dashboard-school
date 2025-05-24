import React, { useContext, useState } from "react";
import "./AddResult.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { SchoolContext } from "../../../context/SchoolContext";
import axios from "axios";

interface AddResultProps {
  setShowAddResult: React.Dispatch<React.SetStateAction<boolean>>;
  getAllResults: () => void;
}

interface ItemOption {
  value: string;
  label: string;
}

interface ResultInput {
  subject: string;
  term: string;
  student: string;
  class: string;
  score: string;
}

const AddResult: React.FC<AddResultProps> = ({
  setShowAddResult,
  getAllResults,
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

  // Use of context
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("AddSuject must be inside a Provider");
  }
  const { url } = context;
  //

  const [formData, setFormData] = useState<ResultInput>({
    subject: "",
    term: "",
    student: "",
    class: "",
    score: "",
  });

  const [selectedSubjectOption, setSelectedSubjectOption] =
    useState<ItemOption | null>(null);
  const [selectedTermOption, setSelectedTermOption] =
    useState<ItemOption | null>(null);
  const [selectedStudentOption, setSelectedStudentOption] =
    useState<ItemOption | null>(null);
  const [selectedClassOption, setSelectedClassOption] =
    useState<ItemOption | null>(null);

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubjectSelection = (selectedOption: ItemOption | null) => {
    setSelectedSubjectOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      subject: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleTermSelection = (selectedOption: ItemOption | null) => {
    setSelectedTermOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      term: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleStudentSelection = (selectedOption: ItemOption | null) => {
    setSelectedStudentOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      student: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleClassSelection = (selectedOption: ItemOption | null) => {
    setSelectedClassOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      class: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData:", formData);

    // const response = await axios.post(`${url}/api/results/add`, formData);
    // if (response.data.success) {
    //   setFormData({
    //     subject: "",
    //     term: "",
    //     student: "",
    //     class: "",
    //     score: "",
    //         });
    //   getAllResults();
    //   console.log("exam added");
    // } else {
    //   console.log("Error");
    // }
  };

  return (
    <div className="add-result-container">
      <form className="form-result" onSubmit={handleSubmit}>
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Result</h3>
          </div>
          <RxCross1 className="close" onClick={() => setShowAddResult(false)} />
        </div>

        <div className="row two">
          <div className="sub-row">
            <label htmlFor="">Subject</label>
            <Select
              options={options}
              onChange={handleSubjectSelection}
              value={selectedSubjectOption}
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
            <label htmlFor="">Term</label>
            <Select
              options={options}
              onChange={handleTermSelection}
              value={selectedTermOption}
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
        <div className="row three">
          <div className="sub-row">
            <label htmlFor="">Student</label>
            <Select
              options={options}
              onChange={handleStudentSelection}
              value={selectedStudentOption}
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
              onChange={handleClassSelection}
              value={selectedClassOption}
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
            <label htmlFor="">Score</label>
            <input
              type="number"
              name="score"
              onChange={handleDataChange}
              value={formData.score}
            />
          </div>
        </div>
        <button type="submit" className="btn-result">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddResult;
