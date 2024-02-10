import React from "react";
import Input from "../../components/share/Input";
import Btn from "../../components/share/Btn";
import { Link } from "react-router-dom";
import SelectObj from "../../components/share/SelectObject";
const Create = () => {
  return (
    <div className="create-etablissement">
      <div className="">
        <h1 className="etablissement-title"> Crée Etablissement :</h1>
      </div>
      <div className="container py-2 d-flex justify-content-center">
        <div className="etablissement-create-forme-container">
          <form className="w-100 h-100 shadow-lg p-4 border">
            <Input
              classParent="my-3"
              footer="Ne mettez pas les caractères spéciaux"
              className="form-control"
              field="nom"
              placeholder="Nome de Etablissement"
              classLabel="form-label"
              // classFooter="text text-danger"
            />
            <SelectSecteur className="form-select" classParent="my-3"/>
            <SelectObj titleOptions="choisire Responsable"  className="form-select" classParent="my-3"/>
            <SelectObj titleOptions="choisire Commune"  className="form-select" classParent="my-3"/>
            <div className="d-flex justify-content-between align-items-center ">
              <Link className="btn btn-warning" to="/etablissement">
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

export default Create;

const SelectSecteur = ({
  options = ["primaire", "collége", "lycée"],
  className,
  classParent,
}) => {
  return (
    <div className={classParent}>
      <select className={className}>
        <option value="">choisire le Secteur</option>
        {options.map((o) => (
          <option value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
};
