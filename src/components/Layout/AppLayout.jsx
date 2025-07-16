import { Headers } from "../UI/Headers";
import { Outlet } from "react-router-dom";
import { Footers } from "../UI/Footers";



 export const AppLayout=()=>{
    return(
        <>
          <Headers/>
          <Outlet/>
          <Footers/>
        </>
    )
 }