import { useState } from "react"
import "./enseignant.css"
import AdminEnsaignant from "./show/AdminEnsaignant"
import ResponsableEnseignant from "./show/ResponsableEnseignant"

const Enseignant = () => {
  const [isAdmin,setIsAdmin]=useState(true)
  return (
    <div>
      {isAdmin ? (<AdminEnsaignant/>):(<ResponsableEnseignant />)}
    </div>
  )
}

export default Enseignant