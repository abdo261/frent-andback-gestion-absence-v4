import "./sidbar.css";
import { SlBadge } from "react-icons/sl";
import { FaSchool } from "react-icons/fa6";
import { ImUserTie } from "react-icons/im";
import {
  HiMiniUserGroup,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { FaChartLine,  FaArrowLeft } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Sidbar = ({ showSidbar, toggleShow }) => {
  return (
    <div className="sidbar">
      <span
        className={"toggle "+ (!showSidbar ? ("rotate"):("rerotate"))}
        onClick={toggleShow}
      >
        <FaArrowLeft size={18} />
      </span>
      {showSidbar ? (
        <div className="sidbarWrapper">
          <div className="sidbarMenu">
            <h3 className="sidbar-title">Dashbord</h3>
            <ul className="sidbar-list">
              <li className="sidbar-list-item ">
               <NavLink to="/commune"> <SlBadge /> Commune</NavLink>
              </li>
              <li className="sidbar-list-item">
              <NavLink to="/etablissement"> <FaSchool /> Etablissement</NavLink>
              </li>
            </ul>
          </div>
          <div className="sidbarMenu">
            <h3 className="sidbar-title">Personnes</h3>
            <ul className="sidbar-list">
              <li className="sidbar-list-item">
              <NavLink to="/enseignant"><HiMiniUserGroup /> Enseignant</NavLink> 
              </li>
              <li className="sidbar-list-item">
              <NavLink to="/responsable"><ImUserTie /> Responsable</NavLink> 
              </li>
            </ul>
          </div>
          <div className="sidbarMenu">
            <h3 className="sidbar-title">Tableau De Bord</h3>
            <ul className="sidbar-list">
              <li className="sidbar-list-item">
              <NavLink to="/absence"> <FaChartLine /> Absence</NavLink> 
              </li>
              <li className="sidbar-list-item">
              <NavLink to="/dommande"><HiOutlineClipboardDocumentList /> Dommande</NavLink> 
              </li>
            </ul>
          </div>
          <div className="sidbat-footer">
            <button className="sidbar-button">
              <CiLogout /> Deconnecté
            </button>
          </div>
        </div>
      ) : (
        <div style={{ width: "17px" }}> </div>
      )}
    </div>
  );
};

export default Sidbar;
