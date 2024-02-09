import { Route } from "react-router-dom";
import Profile from "./Profile";
import Layout from "../../layout/Layout";

export const profileRouter = (
  <Route path="/profile" element={<Layout />}>
    <Route index element={<Profile />} />
  </Route>
);
