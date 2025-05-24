import React, { useContext, useEffect, useState } from "react";
import "./AddSubject.scss";
import { RxCross1 } from "react-icons/rx";
import Select, { MultiValue } from "react-select";
import axios from "axios";
import { SchoolContext } from "../../../context/SchoolContext";

interface AddSubjectProps {
  setShowAddSubject: React.Dispatch<React.SetStateAction<boolean>>;
  getAllSubjects: () => void;
}

interface SubjectInput {
  name: string;
  teachers: string[];
}

interface TeacherOption {
  value: string;
  label: string;
}

const AddSubject: React.FC<AddSubjectProps> = ({
  setShowAddSubject,
  getAllSubjects,
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

  const [teacherOptions, setTeacherOptions] = useState<TeacherOption[]>([]);
  const [formData, setFormData] = useState<SubjectInput>({
    name: "",
    teachers: [],
  });

  // Use of context
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("AddSuject must be inside a Provider");
  }

  const { url } = context;
  //

  useEffect(() => {
    getAllTeachers();
  }, []);

  const getAllTeachers = async () => {
    // const response = await axios.get(`${url}/api/teachers/get`);
    // if (response.data.success) {
    //   const options = response.data.data.map((teacher: any) => ({
    //     value: teacher._id,
    //     label: teacher.name,
    //   }));

    //   setTeacherOptions(options);
    // } else {
    //   console.log("Error");
    // }

    setTeacherOptions(options);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  // const handleTeacherSelect = (selectedOptions: TeacherOption[] | null) => {
  //   const selectedIds = selectedOptions
  //     ? selectedOptions.map((opt) => opt.value)
  //     : [];
  //   setFormData((prev) => ({ ...prev, teachers: selectedIds }));
  // };

  const handleTeacherSelect = (selectedOptions: MultiValue<TeacherOption>) => {
    const selectedIds = selectedOptions.map((opt) => opt.value);
    setFormData((prev) => ({ ...prev, teachers: selectedIds }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //
    const token = localStorage.getItem("token");
    if (!token) {
      // redirect the user
    }

    const response = await axios.post(`${url}/api/subjects/add`, formData);
    if (response.data.success) {
      console.log("Subject added");
      getAllSubjects();
      setFormData({
        name: "",
        teachers: [],
      });
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="add-subject-container">
      <form className="form-subject" onSubmit={handleSubmit}>
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
            <input type="text" name="name" onChange={handleNameChange} />
          </div>
          <div className="input-container">
            <label htmlFor="">Teachers</label>
            <Select
              options={teacherOptions}
              isMulti
              onChange={handleTeacherSelect}
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
