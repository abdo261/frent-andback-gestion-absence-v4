import { useState } from "react"
import "./etablissement.css"
import ResponsableShow from "./show/ResponsableShow"
import AdminShow from "./show/AdminShow"

const Etablissement = () => {
  const [isAdmin,setIsAdmin]=useState(true)
  return (
    <div> <div>{isAdmin ? <AdminShow /> : <ResponsableShow />}</div></div>
  )
}

export default Etablissement