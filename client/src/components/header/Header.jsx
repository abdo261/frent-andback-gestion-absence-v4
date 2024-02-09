import "./header.css";
import { NotificationsNone } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Header = ({toggleShowNotifications}) => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <Link className="header-left" to="/">
          <img src="/agenda_icon.png" alt="logo" className="header-left-logo" />
          <span className="logo">
            {" "}
            <span>Suivi</span>
            <span>Absence </span>
          </span>
        </Link>
        <div className="header-right">
          <div className="header-icons-container" onClick={toggleShowNotifications}>
            <NotificationsNone />
            <span className="header-icon-badg">2</span>
          </div>
          <Link className="header-avatar" to="/profile">
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
