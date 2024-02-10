import { Route } from "react-router-dom";
import Etablissement from "./Etablissement";
import Layout from "../../layout/Layout";
import { CreateEtablissement, DetailsEtablissement, EditeEtablissement } from ".";

export const etablissementRouter = (
  <Route path="/etablissement" element={<Layout />}>
    <Route index element={<Etablissement />} />
    <Route path="create" element={<CreateEtablissement />} />
    <Route path="edite/" element={<EditeEtablissement />} />
    <Route path="details/" element={<DetailsEtablissement />} />
  </Route>
);
