import { Routes } from "react-router-dom";
import "./App.css";
import { absenceRouter } from "./pages/absence/routes";
import { dommandeRouter } from "./pages/dommande/routes";
import { enseignantRouter } from "./pages/enseignant/routes";
import { etablissementRouter } from "./pages/etablissement/routes";
import { homeRouter } from "./pages/home/routes";
import { responsableRouter } from "./pages/responsable/routes";
import { communeRouter } from "./pages/commune/routes";
import { profileRouter } from "./pages/profile/routes";
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="App">
      <Routes>
        {homeRouter}
        {communeRouter}
        {etablissementRouter}
        {enseignantRouter}
        {responsableRouter}
        {absenceRouter}
        {dommandeRouter}
        {profileRouter}
      </Routes>
    </div>
  );
}

export default App;
