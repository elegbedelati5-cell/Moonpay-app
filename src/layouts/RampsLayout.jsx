import { Outlet } from "react-router-dom";
import GeneralFooter from "../components/GeneralFooter";
import RampsHeader from "../components/RampsHeader";


const RampsLayout = () => {
  return (
    <div className="">
      <RampsHeader />
      <Outlet />
      <GeneralFooter />
    </div>
  ); 
};

export default RampsLayout;