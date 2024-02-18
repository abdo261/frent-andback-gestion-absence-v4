import { Route } from "react-router-dom";
import Enseignant from "./Enseignant";
import Layout from "../../layout/Layout";
import { CreateEnseignant, DetailsEnseignant, EditeEnseignant } from ".";

export const enseignantRouter = (
  <Route path="/enseignant" element={<Layout />}>
    <Route index element={<Enseignant />} />
    <Route path="create" element={<CreateEnseignant />} />
    <Route path="edite/" element={<EditeEnseignant />} />
    <Route path="details/" element={<DetailsEnseignant />} /> 
  </Route>
);
