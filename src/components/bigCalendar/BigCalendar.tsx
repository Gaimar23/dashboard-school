import "./BigCalendar.scss";
// import moment from "moment";
// import { calendarEvents } from "../../data/data";
// import { useState } from "react";

const BigCalendar = () => {
  // const handleOnchangeView = () => {

  // };

  return (
    <div className="big-calendar-container">
      <div className="date-selector-container">
        <span className="selected-date">{new Date().toLocaleDateString()}</span>
      </div>
      <table className="big-calendar-table">
        <tbody>
          <tr className="row-data">
            <td className="time">08:00</td>
            <td className="to-do">Tache à gérer Tache à gérer Tache</td>
          </tr>
          <tr className="row-data">
            <td className="time">09:00</td>
            <td className="to-do">Tache 2 à gérer</td>
          </tr>
          <tr className="row-data">
            <td className="time">10:00</td>
            <td className="to-do">Tache 3 à gérer</td>
          </tr>
          <tr className="row-data">
            <td className="time">11:00</td>
            <td className="to-do">Tache 3 à gérer</td>
          </tr>
          <tr className="row-data">
            <td className="time">12:00</td>
            <td className="to-do">Tache 3 à gérer</td>
          </tr>
          <tr className="row-data">
            <td className="time">13:00</td>
            <td className="to-do">Tache 3 à gérer</td>
          </tr>
          <tr className="row-data">
            <td className="time">14:00</td>
            <td className="to-do">Tache 3 à gérer</td>
          </tr>
          <tr className="row-data">
            <td className="time">15:00</td>
            <td className="to-do">Tache 3 à gérer</td>
          </tr>
          <tr className="row-data">
            <td className="time">16:00</td>
            <td className="to-do">Tache 3 à gérer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BigCalendar;
