import React from "react";
import "./AddTeacherAttendance.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";

interface AddTeacherAttendanceProps {
  setShowAddTeacherAttendance: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTeacherAttendance: React.FC<AddTeacherAttendanceProps> = ({
  setShowAddTeacherAttendance,
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
    <div className="add-teacher-attendance-container">
      <form className="form-teacher-attendance">
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
          <input type="text" />
        </div>
        <div className="row two">
          <div className="sub-row">
            <label htmlFor="">Start</label>
            <input type="time" />
          </div>
          <div className="sub-row">
            <label htmlFor="">End</label>
            <input type="time" />
          </div>
        </div>
        <div className="row center">
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

        <button type="submit" className="btn-teacher-attendance">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddTeacherAttendance;
