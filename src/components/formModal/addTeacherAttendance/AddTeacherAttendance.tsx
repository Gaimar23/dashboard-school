import React, { useContext, useState } from "react";
import "./AddTeacherAttendance.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { SchoolContext } from "../../../context/SchoolContext";
import axios from "axios";

interface AddTeacherAttendanceProps {
  setShowAddTeacherAttendance: React.Dispatch<React.SetStateAction<boolean>>;
  getAllTeacherAttendance: () => void;
}

interface ItemOption {
  value: string;
  label: string;
}

interface AttendanceTeacherInput {
  teacher: string;
  date: string;
  start: string;
  end: string;
  status: string;
}

const AddTeacherAttendance: React.FC<AddTeacherAttendanceProps> = ({
  setShowAddTeacherAttendance,
  getAllTeacherAttendance,
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

  const [formData, setFormData] = useState<AttendanceTeacherInput>({
    teacher: "",
    date: new Date().toISOString().split("T")[0],
    start: "",
    end: "",
    status: "",
  });

  const [selectedTeacherOption, setSelectedTeacherOption] =
    useState<ItemOption | null>(null);
  const [selectedStatusOption, setSelectedStatusOption] =
    useState<ItemOption | null>(null);

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTeacherSelection = (selectedOption: ItemOption | null) => {
    setSelectedTeacherOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      teacher: selectedOption ? selectedOption.value : "",
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

    // const response = await axios.post(`${url}/api/attendanceTeacher/add`, formData);
    // if (response.data.success) {
    //   setFormData({
    //     teacher: "",
    //     date: new Date().toISOString().split("T")[0],
    //     start: "",
    //     end: "",
    //     status: "",
    //         });
    //   getAllTeacherAttendance();
    //   console.log("Data added");
    // } else {
    //   console.log("Error");
    // }
  };

  return (
    <div className="add-teacher-attendance-container">
      <form className="form-teacher-attendance" onSubmit={handleSubmit}>
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Teacher Attendance</h3>
          </div>
          <RxCross1
            className="close"
            onClick={() => setShowAddTeacherAttendance(false)}
          />
        </div>

        <div className="row">
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
        <div className="row center">
          <label htmlFor="">Date</label>
          <input
            type="date"
            onChange={handleDataChange}
            name="date"
            value={formData.date}
          />
        </div>
        <div className="row two">
          <div className="sub-row">
            <label htmlFor="">Start</label>
            <input
              type="time"
              name="start"
              onChange={handleDataChange}
              value={formData.start}
            />
          </div>
          <div className="sub-row">
            <label htmlFor="">End</label>
            <input
              type="time"
              name="end"
              onChange={handleDataChange}
              value={formData.end}
            />
          </div>
        </div>
        <div className="row center">
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

        <button type="submit" className="btn-teacher-attendance">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddTeacherAttendance;
