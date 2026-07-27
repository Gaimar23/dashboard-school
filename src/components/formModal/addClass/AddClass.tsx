import React, { useContext, useState } from "react";
import "./AddClass.scss";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import axios from "axios";
import { SchoolContext } from "../../../context/SchoolContext";

interface AddClassProps {
  setShowAddClass: React.Dispatch<React.SetStateAction<boolean>>;
  getAllClasses: () => void;
}

interface ClassInput {
  class__: string;
  capacity: string;
  grade: string;
  supervisor: string;
}

interface SupervisorOption {
  value: string;
  label: string;
}

const AddClass: React.FC<AddClassProps> = ({
  setShowAddClass,
  getAllClasses,
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
      value: "entrepreneuriat",
      label: "Entrepreneuriat",
    },
  ];

  // Use of context
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("AddSuject must be inside a Provider");
  }
  const { url } = context;
  //

  const [formData, setFormData] = useState<ClassInput>({
    class__: "",
    capacity: "",
    grade: "",
    supervisor: "",
  });
  const [selectedClassOption, setSelectedClassOption] =
    useState<SupervisorOption | null>(null);

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSupervisorSelection = (
    selectedOption: SupervisorOption | null
  ) => {
    setSelectedClassOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      supervisor: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData:", formData);

    // const response = await axios.post(`${url}/api/classes/add`, formData);
    // if (response.data.success) {
    //   setFormData({
    //     class__: "",
    //     capacity: "",
    //     grade: "",
    //     supervisor: [],
    //   });
    //   getAllClasses();
    //   console.log("Class added");
    // } else {
    //   console.log("Error");
    // }
  };

  return (
    <div className="add-class-container">
      <form className="form-class" onSubmit={handleSubmit}>
        <div className="head-form">
          <div className="first-row">
            <div className="icon-title">
              <RxCross1 className="icon" />
            </div>
            <h3>New Class</h3>
          </div>
          <RxCross1 className="close" onClick={() => setShowAddClass(false)} />
        </div>

        <div className="row first">
          <label htmlFor="">Class</label>
          <input
            type="text"
            name="class__"
            value={formData.class__}
            onChange={handleDataChange}
            required
          />
        </div>
        <div className="row second">
          <div className="sub-one">
            <label htmlFor="">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="sub-one">
            <label htmlFor="">Grade</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="row third">
          <label htmlFor="">Supervisor</label>
          <Select
            options={options}
            onChange={handleSupervisorSelection}
            // value={options.find((opt) => opt.value === formData.supervisor[0])}
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
        <button type="submit" className="btn-class">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddClass;
