import "./AddStudent.scss";
import { RxCross1 } from "react-icons/rx";
import studentImage from "../../../assets/images/john.jpg";
import Select, { MultiValue } from "react-select";
import React, { useContext, useState } from "react";
import { SchoolContext } from "../../../context/SchoolContext";

interface AddStudentProps {
  setShowAddStudent: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StudentInput {
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  parents: string[];
  class: string;
  address: string;
  gender: string;
  password: string;
  role: string;
}

interface ItemOption {
  value: string;
  label: string;
}

type userData = {
  tenantId: string;
  email: string;
  password: string;
  role: string;
  photo: File;
  profile: string;
  extraRoleInfo: string;
};

interface UserProfile {
  name: string;
  address: string;
  phone: string;
  gender: string;
}

interface UserExtraRoleInfo {
  parents: string[];
  class: string;
}

const AddStudent: React.FC<AddStudentProps> = ({ setShowAddStudent }) => {
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

  const genre = [
    {
      value: "man",
      label: "Homme",
    },
    {
      value: "woman",
      label: "Femme",
    },
  ];

  // Use of context
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("AddSuject must be inside a Provider");
  }
  const { url } = context;
  //

  const [formData, setFormData] = useState<StudentInput>({
    studentId: "",
    name: "",
    email: "",
    photo: "",
    phone: "",
    parents: [],
    class: "",
    address: "",
    gender: "",
    password: "",
    role: "student",
  });

  const [isImage, setIsImage] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);

  const [selectedGenderOption, setSelectedGenderOption] =
    useState<ItemOption | null>(null);

  const [selectedClassOption, setSelectedClassOption] =
    useState<ItemOption | null>(null);

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderSelection = (selectedOption: ItemOption | null) => {
    setSelectedGenderOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      gender: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleClassSelection = (selectedOption: ItemOption | null) => {
    setSelectedClassOption(selectedOption);
    setFormData((prev) => ({
      ...prev,
      class: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleParentsSelection = (selectedOptions: MultiValue<ItemOption>) => {
    const selectedIds = selectedOptions.map((opt) => opt.value);
    setFormData((prev) => ({ ...prev, parents: selectedIds }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData:", formData);
    //
    let profile: Partial<UserProfile> = {};
    profile.address = formData.address;
    profile.gender = formData.gender;
    profile.name = formData.name;
    profile.phone = formData.phone;

    //
    let extraRoleInfo: Partial<UserExtraRoleInfo> = {};
    extraRoleInfo.class = formData.class;
    extraRoleInfo.parents = formData.parents;

    let formatedFormData: Partial<userData> = {};
    formatedFormData.email = formData.email;
    formatedFormData.password = formData.password;
    formatedFormData.role = formData.role;

    if (image) {
      formatedFormData.photo = image;
    }

    formatedFormData.tenantId = "";
    formatedFormData.profile = JSON.stringify(profile);
    formatedFormData.extraRoleInfo = JSON.stringify(extraRoleInfo);

    console.log("formatedFormData:", formatedFormData);

    // const response = await axios.post(`${url}/api/teacher/add`, formData);
    // if (response.data.success) {
    //   setFormData({
    //     subject: "",
    //     detail: "",
    //     term: "",
    //     class: "",
    //     date: new Date().toISOString().split("T")[0],
    //     start: "",
    //     end: "",
    //   });
    //   getAllExams();
    //   console.log("exam added");
    // } else {
    //   console.log("Error");
    // }
  };

  return (
    <div className="add-student-container" id="add-student-container">
      <form className="form-student" onSubmit={handleSubmit}>
        <div className="head-form">
          <div className="first-row">
            <div className="upload-picture">
              <label htmlFor="student-picture">
                <img
                  src={
                    isImage && image ? URL.createObjectURL(image) : studentImage
                  }
                  alt="Profil"
                  className="student-image"
                />
              </label>
              <input
                type="file"
                id="student-picture"
                hidden
                required
                accept="image/*"
                onChange={(e) => {
                  console.log(e.target.files);

                  const file = e.target.files?.[0];
                  if (file !== undefined && file?.size > 2 * 1024 * 1024)
                    return alert("Seules les images inférieur ou égale à 2MO");
                  if (
                    e.target.files &&
                    e.target.files[0] &&
                    (e.target.files[0].type === "image/jpeg" ||
                      e.target.files[0].type === "image/png")
                  ) {
                    setImage(e.target.files[0]);
                    setIsImage(true);
                    setFormData((prev) => ({
                      ...prev,
                      photo: file !== undefined ? file.name : "",
                    }));
                  }
                }}
              />
            </div>
            <h3>New Student</h3>
          </div>
          <RxCross1
            className="close"
            onClick={() => setShowAddStudent(false)}
          />
        </div>
        <h4 className="sub-title one">Identification</h4>

        <div className="first row">
          <div className="input-container">
            <label htmlFor="">Matricule</label>
            <input
              type="text"
              name="studentId"
              onChange={handleDataChange}
              value={formData.studentId}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleDataChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Mot de Pass</label>
            <input
              type="password"
              name="password"
              onChange={handleDataChange}
              value={formData.password}
              required
            />
          </div>
        </div>

        <h4 className="sub-title two">Information Personnel</h4>
        <div className="second row">
          <div className="input-container">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              name="name"
              onChange={handleDataChange}
              value={formData.name}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Téléphone</label>
            <input
              type="text"
              name="phone"
              onChange={handleDataChange}
              value={formData.phone}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Adresse</label>
            <input
              type="text"
              name="address"
              onChange={handleDataChange}
              value={formData.address}
              required
            />
          </div>
        </div>
        <div className="third row">
          <div className="input-container">
            <label htmlFor="">Parents</label>
            <Select
              options={options}
              onChange={handleParentsSelection}
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
          <div className="input-container">
            <label htmlFor="">Classe</label>
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
          <div className="input-container">
            <label htmlFor="">Genre</label>
            <Select
              options={genre}
              onChange={handleGenderSelection}
              value={selectedGenderOption}
            />
          </div>
        </div>

        <button type="submit" className="btn-student">
          Créer
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
