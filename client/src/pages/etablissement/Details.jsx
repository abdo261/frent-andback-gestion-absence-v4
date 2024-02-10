import React from "react";
import { Link } from "react-router-dom";
import { ImUserTie } from "react-icons/im";

import SwipperEtablissementDetails from "../../components/share/swipper/SwipperEtablissementDetails";
import ChartEtablissementDetails from "../../components/share/charts/ChartEtablissementDetails";

const Details = () => {
  return (
    <div className="Admin-responsable">
      <div className="d-flex justify-content-start align-items-center">
        <h1 className="etablissement-title">Details D'Etablissement:</h1>
      </div>
      <div className="container py-2">
        <div className="border rounded-3 shadow-lg w-100 p-3">
          <div className="row w-100">
            <div className="col-md-6">
              <div className="d-flex justify-content-start my-2 gap-2">
                {" "}
                <h5>Nom:</h5>{" "}
                <strong className="fs-6 text text-secondary">
                  charif el idrissi
                </strong>
              </div>
              <div className="d-flex justify-content-start my-2 gap-2">
                {" "}
                <h5>Secteur:</h5>{" "}
                <strong className="fs-6 text text-secondary">Primaire</strong>
              </div>
              <div className="d-flex justify-content-start my-2 gap-2">
                {" "}
                <h5>Commune:</h5>{" "}
                <strong className="fs-6 text text-secondary">Tantan</strong>
              </div>
              <div className="d-flex justify-content-start w-100 h-100">
          
            <ChartEtablissementDetails />
              </div>
            </div>
            <div className="col-md-6">
              <div className="w-100 h-100 d-flex flex-column align-items-center">
                <div className="d-flex justify-content-start align-items-end">
                  <h5>
                    <ImUserTie size={40} />
                  </h5>
                  <Link className="nav-link fw-bold" to="/responsable/details">
                    ali alami
                  </Link>
                </div>
                <SwipperEtablissementDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
