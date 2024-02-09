import { Route } from "react-router-dom";
import Etablissement from "./Etablissement";
import Layout from "../../layout/Layout";

export const etablissementRouter = (
  <Route path="/etablissement" element={<Layout />}>
    <Route index element={<Etablissement />} />
  </Route>
);
