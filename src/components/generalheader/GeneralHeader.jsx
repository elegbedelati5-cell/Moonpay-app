import GeneralHeaderDesktopSection from "./GeneralHeaderDesktopSection";
import GeneralHeaderMobileSection from "./GeneralHeaderMobileSection";


const GeneralHeader = () => {
  return(
    <div>
      <GeneralHeaderDesktopSection/>
      <GeneralHeaderMobileSection/>
    </div>
  );
};

export default GeneralHeader;
