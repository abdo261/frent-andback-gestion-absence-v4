import "./home.css";
import SwipperContainer from "../../components/share/swipper/SwipperContainer";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Home = () => {
  return (
    <div className="home">
      <div className="home-title-container shadow-sm">
        <h1 className="home-title">
          Bienvenue sur l'Application de Gestion des Absences
        </h1>
        <h3 className="home-shild-title">
          Gérez facilement les absences des enseignants
        </h3>
      </div>
      <div className="home-items ">
        <div className="row w-100 gap-1 mx-auto">
          <div className="col-md-7 col-sm-6 home-item-info p-2 shadow-sm ">
            <UserInfo />
          </div>
          <div className="col-md-4 col-sm-5">
            <SwipperContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const UserInfo = () => {
  return (
    <div className="home-user-info w-100 h-100">
      <div className="w-100 d-flex justify-content-center align-items-center flex-column">
        <img
          alt="avatar-logo"
          src="/user-avatar.png"
          className="avatar-logo-home"
        />
        <div className="fw-bold fs-3">oumar abbassi</div>
      </div>
      <div className="him-user-info-body fs-5">
        <div>
          <span className="fw-bold text text-secondary">PPR :</span>
          <span className="fw-medium"> CE12345</span>
        </div>
        <div>
          <span className="fw-bold text text-secondary">Nom :</span>
          <span className="fw-medium"> abbassi</span>
        </div>
        <div>
          <span className="fw-bold text text-secondary">Prenom :</span>
          <span className="fw-medium"> oumar</span>
        </div>
        <div>
          <span className="fw-bold text text-secondary">Email :</span>
         <span className="fw-medium"> oumar@gmail.com{" "}</span> 
        </div>
        <div>
          <span className="fw-bold text text-secondary">Role :</span>
         <span className="fw-medium"> Admin</span> 
        </div>
      </div>
      <div className="home-user-info-badg d-flex justify-content-center bg-success text-light fw-bold">
        
       <span className="fs-6">Admin</span> 
      </div>
    </div>
  );
};
