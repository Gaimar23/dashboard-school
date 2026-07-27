import React, { useContext, useState } from "react";
import "./AddStudentAttendance.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { SchoolContext } from "../../../context/SchoolContext";
import axios from "axios";

interface AddStudentAttendanceProps {
  setShowAddStudentAttendance: React.Dispatch<React.SetStateAction<boolean>>;
  getAllStudentAttendance: () => void;
}

interface ItemOption {
  value: string;
  label: string;
}

interface AttendanceStudentInput {
  date: string;
  student: string;
  class: string;
  status: string;
}

const AddStudentAttendance: React.FC<AddStudentAttendanceProps> = ({
  setShowAddStudentAttendance,
  getAllStudentAttendance,
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
    throw new Error("This component must be inside a Provider");
  }
  const { url } = context;
  //

  const [formData, setFormData] = useState<AttendanceStudentInput>({
    date: new Date().toISOString().split("T")[0],
    student: "",
    class: "",
    status: "",
  });

  const [selectedStudentOption, setSelectedStudentOption] =
    useState<ItemOption | null>(null);
  const [selectedClassOption, setSelectedClassOption] =
    useState<ItemOption | null>(null);
  const [selectedStatusOption, setSelectedStatusOption] =
    useState<ItemOption | null>(null);

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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

  const handleStatusSelection = (selectedOption: ItemOption | null) => {
    setSelectedStatusOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      status: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData:", formData);

    // const response = await axios.post(
    //   `${url}/api/attendanceStudent/add`,
    //   formData
    // );
    // if (response.data.success) {
    //   setFormData({
    //     date: new Date().toISOString().split("T")[0],
    //     student: "",
    //     class: "",
    //     status: "",
    //   });
    //   getAllStudentAttendance();
    //   console.log("Data added");
    // } else {
    //   console.log("Error");
    // }
  };

  return (
    <div className="add-student-attendance-container">
      <form className="form-student-attendance" onSubmit={handleSubmit}>
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Student Attendance</h3>
          </div>
          <RxCross1
            className="close"
            onClick={() => setShowAddStudentAttendance(false)}
          />
        </div>

        <div className="row">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="date"
            onChange={handleDataChange}
            value={formData.date}
          />
        </div>

        <div className="row">
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
            <label htmlFor="">Status</label>
            <Select
              options={options}
              onChange={handleStatusSelection}
              value={selectedStatusOption}
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
        <button type="submit" className="btn-student-attendance">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddStudentAttendance;
