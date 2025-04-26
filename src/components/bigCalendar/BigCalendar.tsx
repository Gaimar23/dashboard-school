import React from "react";
import "./BigCalendar.scss";
// import moment from "moment";
// import { calendarEvents } from "../../data/data";
// import { useState } from "react";

type SelectedDate = Date | null;
type Value = SelectedDate | [SelectedDate, SelectedDate];
type DisplayDate = {
  handleDisplayCalendar: () => void;
  date_: Value;
};

const BigCalendar: React.FC<DisplayDate> = ({
  handleDisplayCalendar,
  date_,
}) => {
  const countRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const scheduleData = [
    {
      start: "08:00",
      end: "10:00",
      description: "Comptabilité financière et Analytique",
    },
    {
      start: "08:00",
      end: "10:00",
      description: "Comptabilité financière et Analytique",
    },
    {
      start: "08:00",
      end: "10:00",
      description: "Comptabilité financière et Analytique",
    },
    {
      start: "08:00",
      end: "10:00",
      description: "Comptabilité financière et Analytique",
    },
  ];
  return (
    <div className="big-calendar-container">
      <div className="date-selector-container">
        <span className="selected-date" onClick={handleDisplayCalendar}>
          {date_?.toLocaleString().substring(0, 10)}
        </span>
      </div>
      <table className="big-calendar-table">
        <tbody>
          {scheduleData.map((item, index) => {
            return (
              <tr className="row-data" key={index}>
                <td className="time">
                  <span>{item.start}</span>
                  <span>{item.end}</span>
                </td>
                <td className="to-do">{item.description}</td>
              </tr>
            );
          })}

          {scheduleData.length < 9 &&
            countRow
              .slice(0, countRow.length - scheduleData.length)
              .map((item, index) => {
                return (
                  <tr className="row-data" key={index + scheduleData.length}>
                    <td className="time" style={{ color: "transparent" }}>
                      <span>""</span>
                      <span>""</span>
                    </td>
                    <td className="to-do" style={{ color: "transparent" }}>
                      ""
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default BigCalendar;
