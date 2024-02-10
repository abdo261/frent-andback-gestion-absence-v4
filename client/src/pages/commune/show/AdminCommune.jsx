import { SlBadge } from "react-icons/sl";
import { LuBadgePlus } from "react-icons/lu";
import { BsEye, BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Btn from "../../../components/share/Btn";
const AdminCommune = () => {
  return (
    <div className="Admin-commune">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="Commune-title">
          {" "}
          <SlBadge /> Communes :
        </h1>

        <Link className="btn btn-primary btn-sm" to="/commune/create">
          <LuBadgePlus size={25} />
        </Link>
      </div>
      <div className="container py-2">
        <Table />
      </div>
    </div>
  );
};

export default AdminCommune;

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table table-info">
          <th>#</th>
          <th>Nom</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>TanTan</td>
          <td>
            <div className="d-flex justify-content-end gap-2 align-items-center">
             
              <Link className="btn btn-outline-warning btn-sm rounded-circle" to='/commune/edite'>
                {" "}
                <BsPencil />
              </Link>
              <Btn
                icon={<FaRegTrashAlt />}
                className="btn btn-outline-danger btn-sm rounded-circle"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
