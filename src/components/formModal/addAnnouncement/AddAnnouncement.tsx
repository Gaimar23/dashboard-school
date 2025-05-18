import React from "react";
import "./AddAnnouncement.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";

interface AddAnnouncementProps {
  setShowAddAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAnnouncement: React.FC<AddAnnouncementProps> = ({
  setShowAddAnnouncement,
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
    <div className="add-announcement-container">
      <form className="form-announcement">
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Announcement</h3>
          </div>
          <RxCross1
            className="close"
            onClick={() => setShowAddAnnouncement(false)}
          />
        </div>

        <div className="row">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="row">
          <label htmlFor="">Targets</label>
          <Select
            options={options}
            isMulti
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
          <label htmlFor="">Description</label>
          <textarea name="" rows={3} placeholder="description"></textarea>
        </div>
        <div className="row two">
          <div className="sub-row">
            <label htmlFor="">Start</label>
            <input type="datetime-local" name="" id="" />
          </div>
          <div className="sub-row">
            <label htmlFor="">End</label>
            <input type="datetime-local" name="" id="" />
          </div>
        </div>
        <button type="submit" className="btn-announcement">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddAnnouncement;
