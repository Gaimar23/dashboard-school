import React, { useContext, useState } from "react";
import "./AddExam.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { SchoolContext } from "../../../context/SchoolContext";
import axios from "axios";

interface AddExamProps {
  setShowAddExam: React.Dispatch<React.SetStateAction<boolean>>;
  getAllExams: () => void;
}

interface ItemOption {
  value: string;
  label: string;
}

interface ExamInput {
  subject: string;
  detail: string;
  term: string;
  class: string;
  date: string;
  start: string;
  end: string;
}

const AddExam: React.FC<AddExamProps> = ({ setShowAddExam, getAllExams }) => {
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

  const [formData, setFormData] = useState<ExamInput>({
    subject: "",
    detail: "",
    term: "",
    class: "",
    date: new Date().toISOString().split("T")[0],
    start: "",
    end: "",
  });

  const [selectedSubjectOption, setSelectedSubjectOption] =
    useState<ItemOption | null>(null);
  const [selectedTermOption, setSelectedTermOption] =
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

    // const response = await axios.post(`${url}/api/exams/add`, formData);
    // if (response.data.success) {
    //   setFormData({
    //     subject: "",
    //     detail: "",
    //     term: "",
    //     class: "",
    //     date: new Date().toISOString().split("T")[0],
    //     start: "",
    //     end: "",
    //   });
    //   getAllExams();
    //   console.log("exam added");
    // } else {
    //   console.log("Error");
    // }
  };

  return (
    <div className="add-exam-container">
      <form className="form-exam" onSubmit={handleSubmit}>
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
        <div className="row one">
          <label htmlFor="">Detail</label>
          <input
            type="text"
            name="detail"
            value={formData.detail}
            onChange={handleDataChange}
          />
        </div>
        <div className="row two">
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
        </div>

        <div className="row one">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="date"
            onChange={handleDataChange}
            value={formData.date}
          />
        </div>

        <div className="row two">
          <div className="sub-row">
            <label htmlFor="">Début</label>
            <input
              type="time"
              name="start"
              onChange={handleDataChange}
              value={formData.start}
            />
          </div>
          <div className="sub-row">
            <label htmlFor="">Fin</label>
            <input
              type="time"
              name="end"
              onChange={handleDataChange}
              value={formData.end}
            />
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
