
import "./notification.css";
import { FaBan, FaCheck } from "react-icons/fa";
import Btn from "../share/Btn";
const Notification = ({ style }) => {
  return (
    <div className="notification-list" style={style}>
      <div className="natification-iteme">
        <span className="notification-item-text">
          dommande de l'atestation de ali alami pour 15 jour dommande de
          l'atestation de ali alami pour 15 jour dommande de l'atestation de ali
          alami pour 15 jour
        </span>
        <span className="notification-item-options">
          <Btn icon={<FaCheck />} className="btn btn-success" />
          <Btn icon={<FaBan />} className="btn btn-danger" />
        </span>
      </div>
    </div>
  );
};

export default Notification;
