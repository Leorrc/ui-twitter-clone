import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";


export function Default() {
  return (
    <div className={`min-h-screen mx-auto my-0 grid grid-cols-[80px,1fr]
      max-w-[1000px] md:grid-cols-[300px,1fr]`}>

      <SideBar />
      <div className={`border-l border-r border-solid border-[1px] border-[#ebeef0] dark:border-[#202020] `}>
        <Outlet />
      </div>

    </div>
  )
}