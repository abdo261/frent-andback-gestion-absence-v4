import { useState } from "react";
import "./commune.css";
import AdminCommune from "./show/AdminCommune";
import ResponsableCommune from "./show/ResponsableCommune";

const Commune = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return <div>{isAdmin ? <AdminCommune /> : <ResponsableCommune />}</div>;
};

export default Commune;
