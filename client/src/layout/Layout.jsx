import "./layout.css";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Sidbar from "../components/sidbar/Sidbar";
import {useState } from "react";
import Notification from "../components/notification/Notification";

const Layout = () => {
  const [showSidbar, setShowSidbar] = useState(true);
  const toggleShow = () => {
    setShowSidbar(!showSidbar);
  };
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleShowNotifications = () => {
    setShowNotifications(!showNotifications);
  };
 
  return (
    <>
      <Header toggleShowNotifications={toggleShowNotifications} />
      <div className="main-conteiner">
        <Sidbar toggleShow={toggleShow} showSidbar={showSidbar} />
        <div
          className="outher"
          //  style={{ flex: showSidbar ? "4" : "20" }}
          onClick={()=>setShowNotifications(false)}
        >
          <Outlet />
        </div>
      </div>
      
        <Notification
          style={
            showNotifications
              ? { clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)" }
              : { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }
          }
        />
      
    </>
  );
};

export default Layout;
