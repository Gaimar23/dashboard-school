import { useState } from "react";
import "./EventCalendar.scss";
import Calendar from "react-calendar";
import { TfiMoreAlt } from "react-icons/tfi";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChangeValue] = useState<Value>(new Date());
  return (
    <div className="event-calendar-container">
      <Calendar onChange={onChangeValue} value={value} />
      <div className="title-icon">
        <h1 className="title">Events</h1>
        <TfiMoreAlt className="icon" />
      </div>
      <div className="events-info">
        {events.map((event) => {
          return (
            <div className="event-item" key={event.id}>
              <div className="top">
                <h1>{event.title}</h1>
                <span>{event.time}</span>
              </div>
              <p>{event.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
