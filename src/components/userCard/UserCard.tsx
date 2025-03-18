import "./UserCard.scss";
import { TfiMoreAlt } from "react-icons/tfi";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="user-card">
      <div className="date-icon">
        <span className="date">2024/25</span>
        <TfiMoreAlt
          color="white"
          style={{ cursor: "pointer" }}
          className="icon"
        />
      </div>
      <h1>1,234</h1>
      <h2>{type}s</h2>
    </div>
  );
};

export default UserCard;
