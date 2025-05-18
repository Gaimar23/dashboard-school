import React from "react";
import "./AddStudentAttendance.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";

interface AddStudentAttendanceProps {
  setShowAddStudentAttendance: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddStudentAttendance: React.FC<AddStudentAttendanceProps> = ({
  setShowAddStudentAttendance,
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

  return (
    <div className="add-student-attendance-container">
      <form className="form-student-attendance">
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
          <input type="date" />
        </div>

        <div className="row">
          <label htmlFor="">Student</label>
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
            <label htmlFor="">Status</label>
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
        <button type="submit" className="btn-student-attendance">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddStudentAttendance;
