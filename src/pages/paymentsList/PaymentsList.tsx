import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./PaymentsList.scss";

const PaymentsList = () => {
  return (
    <div className="payments-list-container">
      <Menu />
      <div className="right">
        <Navbar />
      </div>
    </div>
  );
};

export default PaymentsList;
