import { Outlet } from "react-router-dom";
import GeneralFooter from "../components/GeneralFooter";
import GeneralHeader from "../components/GeneralHeader";

const GeneralLayout = () => {
  return (
    <div className="">
      <GeneralHeader />
      <Outlet />
      <GeneralFooter />
    </div>
  );
};

export default GeneralLayout;
