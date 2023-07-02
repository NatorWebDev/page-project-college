import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Feed() {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <NavBar />
      <Outlet/>
    </div>
    
    
  )
}
