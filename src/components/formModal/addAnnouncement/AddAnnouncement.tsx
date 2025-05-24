import React, { useContext, useState } from "react";
import "./AddAnnouncement.scss";
import { RxCross1 } from "react-icons/rx";
import Select, { MultiValue } from "react-select";
import axios from "axios";
import { SchoolContext } from "../../../context/SchoolContext";

interface AddAnnouncementProps {
  setShowAddAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
  getAllAnnouncements: () => void;
}

interface AnnouncementInput {
  title: string;
  targets: string[];
  description: string;
  start: string;
  end: string;
}

interface TargetOption {
  value: string;
  label: string;
}

const AddAnnouncement: React.FC<AddAnnouncementProps> = ({
  setShowAddAnnouncement,
  getAllAnnouncements,
}) => {
  const options = [
    {
      value: "parents",
      label: "Parents",
    },
    {
      value: "teachers",
      label: "Teachers",
    },
    {
      value: "students",
      label: "Students",
    },
  ];

  const [formData, setFormData] = useState<AnnouncementInput>({
    title: "",
    targets: [],
    description: "",
    start: "",
    end: "",
  });

  // Use of context
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("AddSuject must be inside a Provider");
  }
  const { url } = context;
  //

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTargetSelection = (selectedOptions: MultiValue<TargetOption>) => {
    const selectedIds = selectedOptions.map((opt) => opt.value);
    setFormData((prev) => ({ ...prev, targets: selectedIds }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData:", formData);

    // const response = await axios.post(`${url}/api/announcements/add`, formData);
    // if (response.data.success) {
    //   setFormData({
    //     title: "",
    //     targets: [],
    //     description: "",
    //     start: "",
    //     end: "",
    //   });
    //   getAllAnnouncements();
    //   console.log("Announcement added");
    // } else {
    //   console.log("Error");
    // }
  };

  return (
    <div className="add-announcement-container">
      <form className="form-announcement" onSubmit={handleSubmit}>
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
          <input
            type="text"
            maxLength={25}
            name="title"
            onChange={handleDataChange}
            value={formData.title}
          />
        </div>

        <div className="row">
          <label htmlFor="">Targets</label>
          <Select
            options={options}
            isMulti
            onChange={handleTargetSelection}
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
          <textarea
            name="description"
            rows={3}
            placeholder="description"
            onChange={handleTextAreaChange}
            value={formData.description}
          ></textarea>
        </div>
        <div className="row two">
          <div className="sub-row">
            <label htmlFor="">Start</label>
            <input
              type="datetime-local"
              name="start"
              onChange={handleDataChange}
              value={formData.start}
            />
          </div>
          <div className="sub-row">
            <label htmlFor="">End</label>
            <input
              type="datetime-local"
              name="end"
              onChange={handleDataChange}
              value={formData.end}
            />
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
