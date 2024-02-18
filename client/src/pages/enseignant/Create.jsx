import React from "react";
import Input from "../../components/share/Input";
import Btn from "../../components/share/Btn";
import { Link } from "react-router-dom";
import SelectObj from "../../components/share/SelectObject";
const Create = () => {
  return (
    <div className="create-enseignant">
      <div className="">
        <h1 className="enseignant-title"> Crée Enseignant :</h1>
      </div>
      <div className="container py-2 d-flex justify-content-center">
        <div className="enseignant-create-forme-container">
          <form className="w-100 h-100 shadow-lg p-4 border">
            <Input
              classParent="my-3"
              
              className="form-control"
              field="PPR"
              placeholder="PPR"
              classLabel="form-label"
              // classFooter="text text-danger"
            />
            <Input
              classParent="my-3"
              
              className="form-control"
              field="CIN"
              placeholder=" N° CIN"
              classLabel="form-label"
              // classFooter="text text-danger"
            />
            <Input
              classParent="my-3"
              
              className="form-control"
              field="nom_FR"
              placeholder="Nome  EN FR"
              classLabel="form-label"
              // classFooter="text text-danger"
            />
            <Input
              classParent="my-3"
              
              className="form-control"
              field="prenom_FR"
              placeholder="Prenom  EN FR"
              classLabel="form-label"
              // classFooter="text text-danger"
            />
            <Input
              classParent="my-3"
              
              className="form-control"
              field="nom_AR"
              placeholder="Nome  EN AR"
              classLabel="form-label"
              // classFooter="text text-danger"
            />
            <Input
              classParent="my-3"
              
              className="form-control"
              field="prenom_AR"
              placeholder="Prenom  EN AR"
              classLabel="form-label"
              // classFooter="text text-danger"
            />
            <Input
              classParent="my-3"
              
              className="form-control"
              field="cadre"
              placeholder="Cadre"
              classLabel="form-label"
              // classFooter="text text-danger"
            />
            <Select className="form-select" optionsTitle="choisire le sexe" options={["homme", "femme"]} classParent="my-3"/>
            <Select className="form-select" classParent="my-3"/>
            <SelectObj titleOptions="choisire L'etablissement"  className="form-select" classParent="my-3"/>
            
            <div className="d-flex justify-content-between align-items-center ">
              <Link className="btn btn-warning" to="/enseignant">
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

const Select = ({
  options = ["primaire", "collége", "lycée"],
  className,
  classParent,
  optionsTitle="choisire le Secteur"
}) => {
  return (
    <div className={classParent}>
      <select className={className}>
        <option value="" >{optionsTitle}</option>
        {options.map((o) => (
          <option value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
};
