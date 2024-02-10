import "./header.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Header = ({ toggleShowNotifications }) => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <Link className="header-left nav-link" to="/">
          <img src="/agenda_icon.png" alt="logo" className="header-left-logo" />
          <span className="logo d-flex flex-column fw-bolder">
            {" "}
            <span>Suivi</span>
            <span>Absence </span>
          </span>
        </Link>
        <div className="header-right">
          <div
            className="header-icons-container"
            onClick={toggleShowNotifications}
          >
            <IoMdNotificationsOutline />
            <span className="header-icon-badg">2</span>
          </div>
          <Link className="header-avatar nav-link" to="/profile">
            {" "}
            <span>oumar abbassi</span>
            <img
              alt="avatar-logo"
              src="/user-avatar.png"
              className="avatar-logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
