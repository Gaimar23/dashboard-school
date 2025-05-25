import "./AddParent.scss";
import { RxCross1 } from "react-icons/rx";
import parentImage from "../../../assets/images/john.jpg";
import Select, { MultiValue } from "react-select";
import React, { useContext, useState } from "react";
import { SchoolContext } from "../../../context/SchoolContext";

interface AddParentProps {
  setShowAddParent: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ParentInput {
  name: string;
  email?: string;
  photo: string;
  phone: string;
  students: string[];
  address: string;
  gender: string;
  password: string;
  role: string;
  firstname: string;
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
  students: string[];
  firstname: string;
}

const AddParent: React.FC<AddParentProps> = ({ setShowAddParent }) => {
  const options = [
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
      value: "entrepreneuriat",
      label: "Entrepreneuriat",
    },
  ];

  const genre = [
    {
      value: "man",
      label: "Mr",
    },
    {
      value: "woman",
      label: "Mme",
    },
  ];

  // Use of context
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("AddSuject must be inside a Provider");
  }
  const { url } = context;
  //

  const [formData, setFormData] = useState<ParentInput>({
    name: "",
    email: "",
    photo: "",
    phone: "",
    students: [],
    address: "",
    gender: "",
    password: "",
    role: "teacher",
    firstname: "",
  });

  const [isImage, setIsImage] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);

  const [selectedGenderOption, setSelectedGenderOption] =
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

  const handleStudentsSelection = (selectedOptions: MultiValue<ItemOption>) => {
    const selectedIds = selectedOptions.map((opt) => opt.value);
    setFormData((prev) => ({ ...prev, students: selectedIds }));
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
    extraRoleInfo.students = formData.students;
    extraRoleInfo.firstname = formData.firstname;

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
    <div className="add-parent-container" id="add-parent-container">
      <form className="form-parent" onSubmit={handleSubmit}>
        <div className="head-form">
          <div className="first-row">
            <div className="upload-picture">
              <label htmlFor="parent-picture">
                <img
                  src={
                    isImage && image ? URL.createObjectURL(image) : parentImage
                  }
                  alt="Profil"
                  className="parent-image"
                />
              </label>
              <input
                type="file"
                id="parent-picture"
                hidden
                required
                accept="image/*"
                onChange={(e) => {
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
            <h3>New Parent</h3>
          </div>
          <RxCross1 className="close" onClick={() => setShowAddParent(false)} />
        </div>
        <h4 className="sub-title one">Identification</h4>

        <div className="first row">
          <div className="input-container">
            <label htmlFor="">Genre</label>
            <Select
              options={genre}
              onChange={handleGenderSelection}
              value={selectedGenderOption}
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
            <label htmlFor="">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Prénom</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleDataChange}
              required
            />
          </div>
        </div>

        <h4 className="sub-title two">Information Personnel</h4>
        <div className="second row">
          <div className="input-container">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Téléphone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleDataChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Adresse</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="third row">
          <div className="input-container">
            <label htmlFor="">Mot de passe</label>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleDataChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="">Elèves</label>
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
        </div>

        <button type="submit" className="btn-parent">
          Créer
        </button>
      </form>
    </div>
  );
};

export default AddParent;
