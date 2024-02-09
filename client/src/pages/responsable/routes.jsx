import { Route } from "react-router-dom";
import Responsable from "./Responsable";
import Layout from "../../layout/Layout";

export const responsableRouter = (
  <Route path="/responsable" element={<Layout />}>
    <Route index element={<Responsable />} />
  </Route>
);
