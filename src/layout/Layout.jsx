import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

function Layout ({children}){
    return(
        <div className="flex flex-cols-1 sm flex-cols-2 md flex-cols-2 max-xl:">
            <div className="basis-[12%] h-[100vh]">
                <SideBar/>

            </div>
            <div className="basis-[88%] border">
        
               {children || <Outlet />}
            
            </div>

      </div>

       
    )
}
export default Layout