import { Route } from "react-router-dom";
import Commune from "./Commune";
import Layout from "../../layout/Layout";

export const communeRouter = (
  <Route path="/commune" element={<Layout />}>
    <Route index element={<Commune />} />
  </Route>
);
