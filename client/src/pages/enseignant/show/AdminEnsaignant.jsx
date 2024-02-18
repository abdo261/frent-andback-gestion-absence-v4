import { SlBadge } from "react-icons/sl";
import { LuBadgePlus } from "react-icons/lu";
import { BsEye, BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Btn from "../../../components/share/Btn";
const AdminEnsaignant = () => {
  return (
    <div className="Admin-enseignant">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="Enseignant-title">
          {" "}
          <SlBadge /> Enseignant :
        </h1>

        <Link className="btn btn-primary btn-sm" to="/enseignant/create">
          <LuBadgePlus size={25} />
        </Link>
      </div>
      <div className="container py-2">
        <Table />
      </div>
    </div>
  );
};

export default AdminEnsaignant;

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table table-info">
          <th>PPR</th>
          <th>CIN</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123SHGD</td>
          <td>JF8888</td>
          <td>mohamed</td>
          <td>alami</td>
          <td>
            <div className="d-flex justify-content-end gap-1 align-items-center">
              <Link
                className="btn btn-outline-dark btn-action  btn-sm rounded-circle"
                to="/enseignant/details"
              >
                {" "}
                <BsEye />
              </Link>
              <Link
                className="btn btn-outline-warning btn-action  btn-sm rounded-circle"
                to="/enseignant/edite"
              >
                {" "}
                <BsPencil />
              </Link>
              <Btn
                icon={<FaRegTrashAlt />}
                className="btn btn-outline-danger  btn-action btn-sm rounded-circle"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
