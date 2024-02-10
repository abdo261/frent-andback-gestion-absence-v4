import { Route } from "react-router-dom";
import Commune from "./Commune";
import Layout from "../../layout/Layout";
import { CreateCommune, EditeCommune } from ".";

export const communeRouter = (
  <Route path="/commune" element={<Layout />}>
    <Route index element={<Commune />} />
    <Route path="create" element={<CreateCommune />} />
    <Route path="edite/" element={<EditeCommune />} />
  </Route>
);
