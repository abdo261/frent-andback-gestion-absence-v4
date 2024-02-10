import React from "react";
import Input from "../../components/share/Input";
import Btn from "../../components/share/Btn";
import { Link } from "react-router-dom";
const Edite = () => {
  return (
    <div className="create-commune">
      <div className="">
        <h1 className="Commune-title"> Modifier Commune :</h1>
      </div>
      <div className="container py-2 d-flex justify-content-center">
        <div className="commune-create-forme-container">
          <form className="w-100 h-100 shadow-lg p-4 border">
            <Input
              classParent="my-2"
              footer="Ne mettez pas les caractères spéciaux"
              className="form-control"
              field="nom"
              placeholder="Nome de Commune"
              classLabel="form-label"
            />
            <div className="d-flex justify-content-between align-items-center ">
              <Link className="btn btn-warning" to="/commune">
                Annuler
              </Link>
              <Btn className="btn btn-primary" type="submit" text="crée" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edite;
