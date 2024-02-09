import { Route } from "react-router-dom";
import Absence from "./Absence";
import Layout from "../../layout/Layout";

export const absenceRouter = (
  <Route path="/absence" element={<Layout />}>
    <Route index element={<Absence />} />
  </Route>
);
