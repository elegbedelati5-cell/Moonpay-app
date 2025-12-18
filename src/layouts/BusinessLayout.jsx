import { Outlet } from "react-router-dom";
import GeneralFooter from "../components/GeneralFooter";
import BusinessHeader from "../components/BusinessHeader";


const BusinessLayout = () => {
  return (
    <div className="">
      <BusinessHeader />
      <Outlet />
      <GeneralFooter />
    </div>
  ); 
};

export default BusinessLayout;