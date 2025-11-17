import { Link } from "react-router-dom";
import { LuSquareMenu } from "react-icons/lu";

const GeneralHeader = () => {
  return (
    <div className="w-screen py-5 bg-[#F9F8FB] shadow-sm ">
      {/* Desktop navbar */}
      <div className="container flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <img src="/images/logo-coloured.png" alt="" className="h-7" />

          <div className="flex gap-4 items-center">
            <Link to="/" className="text-black font-semibold">
              Individuals
            </Link>
            <Link to="/" className="text-black/90">
              Business
            </Link>
          </div>

          <div className="ml-5 flex gap-4 items-center font-semibold">
            <Link to="">Buy</Link>
            <Link to="">Sell</Link>
            <Link to="">Swap</Link>
            <LuSquareMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
