import React, { useContext, useEffect, useState } from "react";
import "./AddAssignment.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import axios from "axios";
import { SchoolContext } from "../../../context/SchoolContext";

interface AddAssignmentProps {
  setShowAddAssignment: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AssignmentInput {
  title: string;
  description: string;
  subject: string;
  class_: string;
  teacher: string;
  due_date: string;
  assigned_date: string;
  // attachement_url: string;
}

interface AssignmentData {
  tenantId: string;
  title: string;
  description: string;
  subject: string;
  class_: string;
  teacher: string;
  due_date: string;
  assigned_date: string;
  pdf: File;
}

interface ItemOption {
  value: string;
  label: string;
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

  // Use of context
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("AddSuject must be inside a Provider");
  }
  const { url } = context;
  //

  const [formData, setFormData] = useState<AssignmentInput>({
    title: "",
    description: "",
    subject: "",
    class_: "",
    teacher: "",
    due_date: new Date().toISOString().split("T")[0],
    assigned_date: new Date().toISOString().split("T")[0],
  });

  const [selectedSubjectOption, setSelectedSubjectOption] =
    useState<ItemOption | null>(null);
  const [selectedTeacherOption, setSelectedTeacherOption] =
    useState<ItemOption | null>(null);
  const [selectedClassOption, setSelectedClassOption] =
    useState<ItemOption | null>(null);

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

  const handleTeacherSelection = (selectedOption: ItemOption | null) => {
    setSelectedTeacherOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      teacher: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleClassSelection = (selectedOption: ItemOption | null) => {
    setSelectedClassOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      class_: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //

    if (!pdf) {
      return console.log("Veuillez ajouter le fichier");
    }

    let formatedFormData: Partial<AssignmentData> = {};
    formatedFormData.title = formData.title;
    formatedFormData.subject = formData.subject;
    formatedFormData.teacher = formData.teacher;
    formatedFormData.class_ = formData.class_;
    formatedFormData.description = formData.description;
    formatedFormData.tenantId = "";
    if (pdf) {
      formatedFormData.pdf = pdf;
    }
    formatedFormData.due_date = formData.due_date;
    formatedFormData.assigned_date = formData.assigned_date;

    console.log("formatedFormData:", formatedFormData);
  };

  return (
    <div className="add-assignment-container">
      <form className="form-assignment" onSubmit={handleSubmit}>
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

        <div className="row">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleDataChange}
            required
          />
        </div>

        <div className="row">
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            rows={2}
            placeholder=""
            onChange={handleTextAreaChange}
            value={formData.description}
            required
          ></textarea>
        </div>

        <div className="row">
          <label htmlFor="">Due date</label>
          <input
            type="date"
            value={formData.due_date}
            name="due_date"
            onChange={handleDataChange}
            required
          />
        </div>

        <div className="row two">
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
            <label htmlFor="">Teacher</label>
            <Select
              options={options}
              onChange={handleTeacherSelection}
              value={selectedTeacherOption}
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
          {/* <label htmlFor="pdf-file">Document</label> */}
          <input
            type="file"
            name=""
            id="pdf-file"
            accept="application/pdf"
            onChange={handleFileChange}
            style={{ marginTop: "10px" }}
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
