import { Route } from "react-router-dom";
import Dommande from "./Dommande";
import Layout from "../../layout/Layout";

export const dommandeRouter = (
  <Route path="/dommande" element={<Layout />}>
    <Route index element={<Dommande />} />
  </Route>
);
