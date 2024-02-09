import { Route } from "react-router-dom";
import Enseignant from "./Enseignant";
import Layout from "../../layout/Layout";

export const enseignantRouter = (
  <Route path="/enseignant" element={<Layout />}>
    <Route index element={<Enseignant />} />
  </Route>
);
