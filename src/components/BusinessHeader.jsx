import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BusinessHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="w-screen py-5 bg-[#F9F8FB] shadow-sm">
      {/* Desktop navbar */}
      <div className="container lg:flex items-center justify-between hidden">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <img src="/images/logo-coloured.png" alt="" className="h-7" />

          <div className="flex gap-4 items-center">
            <Link to="/" className="text-[#7C7C7D]">
              Individuals
            </Link>
            <Link to="/business" className="text-black/90 font-semibold">
              Business
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-7">
          <div className="flex flex-col gap-7">
            <div
              className="flex items-center gap-2 cursor-pointer py-2"
              onClick={handleShowMenu}
            >
              <p className="text-black font-semibold">Products</p>
              {showMenu ? (
                <IoIosArrowUp size={25} />
              ) : (
                <IoIosArrowDown size={25} />
              )}
            </div>
          </div>

          <button className="px-5 py-2 bg-black text-white rounded-xl hover:bg-black/30">
            Get Started
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="grid grid-cols-3 justify-between pt-20 overflow-hidden px-20 fixed bg-white">
          <div className="col-span-1">
            <h1 className="text-4xl font-semibold">Products</h1>
          </div>
          <div className="col-span-2 lg:grid hidden grid-cols-2 gap-6 mt-3 w-full h-full pb-5">
            <Link to="/ramps" className="flex flex-col gap-2 col-span-1">
              <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
              <div className="flex items-center justify-between hover:text-purple-500">
                <span className="font-bold text-[16px]">Ramps </span>
                <IoArrowForwardCircleOutline size={30} />
              </div>
              <p className="text-[16px] text-[#797D85]">
                A fast way to let users buy and sell crypto, increase revenue, and drive retention - all with payment and minimal code. 
                Let your consumers buy crpto within your app or website using
                local fiat payment method.
              </p>
            </Link>


            <Link className="flex flex-col gap-2 col-span-1">
              <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
              <div className="flex items-center justify-between hover:text-purple-500">
                <span className="font-bold text-[16px]">Swaps </span>
                <IoArrowForwardCircleOutline size={30} />
              </div>
              <p className="text-[16px] text-[#797D85]">
                Allow your users to swap crypto cross-chain and with low fees.
              </p>
            </Link>

            <Link className="flex flex-col gap-2 col-span-1">
              <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
              <div className="flex items-center justify-between hover:text-purple-500">
                <span className="font-bold text-[16px]">Virtual Accounts </span>
                <IoArrowForwardCircleOutline size={30} />
              </div>
              <p className="text-[16px] text-[#797D85]">
                Issue virtual USD accounts. Settle to stablecoins. All via API.
              </p>
            </Link>

            <Link className="flex flex-col gap-2 col-span-1">
              <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
              <div className="flex items-center justify-between hover:text-purple-500">
                <span className="font-bold text-[16px]">Commerce </span>
                <IoArrowForwardCircleOutline size={30} />
              </div>
              <p className="text-[16px] text-[#797D85]">
                Accept crypto payments instantly with a simple secure checkout.
                Power deposits, subscriptions abd e-commerce with stable coin
                settlements _ all through Moonpay.
              </p>
            </Link>

 <Link className="flex flex-col gap-2 col-span-1">
              <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
              <div className="flex items-center justify-between hover:text-purple-500">
                <span className="font-bold text-[16px]">Issuance</span>
                <IoArrowForwardCircleOutline size={30} />
              </div>
              <p className="text-[16px] text-[#797D85]">
               A regulated platform to build, launch, and scale your own branded stablecoin.
              </p>
            </Link>


            <Link className="flex flex-col gap-2 col-span-1">
              <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
              <div className="flex items-center justify-between hover:text-purple-500">
                <span className="font-bold text-[16px]">Iron </span>
                <IoArrowForwardCircleOutline size={30} />
              </div>
              <p className="text-[16px] text-[#797D85]">
                Stableicon payment infrastructure offering APIs for global
                on/off rampings, wallets and virual accounts built for
                developers.
              </p>
            </Link>

            <Link className="flex flex-col gap-2 col-span-1">
              <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
              <div className="flex items-center justify-between hover:text-purple-500">
                <span className="font-bold text-[16px]">Otherlife </span>
                <IoArrowForwardCircleOutline size={30} />
              </div>
              <p className="text-[16px] text-[#797D85]">
                Award winning Web3 Agency supporting our patners with ideation,
                strategy, communication marketing and Frontend Development.
              </p>
            </Link>
          </div>
        </div>
      )}
      {/* mobile navbar */}

      <div className="flex lg:hidden items-center justify-between lg:px-0 px-5">
        <img src="/images/blacklogo.png" alt="" className="h-6" />
        <CgMenuGridO size={25} onClick={handleShowMobileMenu} />
      </div>

      {/* mobile menu */}
      <div
        className={
          showMobileMenu === true
            ? "fixed  z-50 inset-0 flex lg:hidden flex-col gap-7  overflow-y-auto"
            : "hidden"
        }
      >
        <div className=" bg-white w-full h-screen overflow-y-auto pb-8">
          <div className="flex items-center justify-between p-2 text-3xl font-semibold text-black bg-[#f9f8f8]">
            <img src="/images/blacklogo.png" alt="" className="h-6" />
            <IoIosClose
              size={30}
              onClick={handleCloseMobileMenu}
              className="cursor-pointer "
            />
          </div>
          <div className="flex gap-6 items-center px-5 py-5">
            <Link
              to="/"
              className="text-black text-sm bg-[#f9f8f8] p-2 rounded-[10px]"
            >
              Individuals
            </Link>
            <Link
              to="/business"
              className="text-black/90 text-sm font-semibold bg-[#f9f8f8] p-2 rounded-[10px]"
            >
              Business
            </Link>
          </div>
          <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

          <div className="flex flex-col gap-4 px-5">
            <div
              className="flex items-center gap-2 cursor-pointer py-2"
              onClick={handleShowMenu}
            >
              <p className="text-black font-semibold">Products</p>
              {showMenu ? (
                <IoIosArrowUp size={25} />
              ) : (
                <IoIosArrowDown size={25} />
              )}
            </div>

            {showMobileMenu && (
              <div className="flex flex-col gap-6 mt-3 w-full h-full overflow-y-auto pb-5">
                <Link to="/ramps" className="flex flex-col gap-2">
                  <div className="flex items-center justify-between hover:text-purple-500">
                    <span className="font-bold text-[16px]">Ramps </span>
                    <IoArrowForwardCircleOutline size={30} />
                  </div>
                  <p className="text-[16px] text-[#797D85]">
                    A fast way to let users buy and sell crypto, increase revenue, and drive retention - all with payment and minimal code. 
                  </p>
                </Link>
                

                <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
                <Link className="flex flex-col gap-2">
                  <div className="flex items-center justify-between hover:text-purple-500">
                    <span className="font-bold text-[16px]">Swaps </span>
                    <IoArrowForwardCircleOutline size={30} />
                  </div>
                  <p className="text-[16px] text-[#797D85]">
                    Allow your users to swap crypto cross-chain and with low
                    fees.
                  </p>
                </Link>
                
                <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
                <Link className="flex flex-col gap-2">
                  <div className="flex items-center justify-between hover:text-purple-500">
                    <span className="font-bold text-[16px]">
                      Virtual Accounts{" "}
                    </span>
                    <IoArrowForwardCircleOutline size={30} />
                  </div>
                  <p className="text-[16px] text-[#797D85]">
                    Issue virtual USD accounts. Settle to stablecoins. All via
                    API.
                  </p>
                </Link>
                <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
                <Link className="flex flex-col gap-2">
                  <div className="flex items-center justify-between hover:text-purple-500">
                    <span className="font-bold text-[16px]">Commerce </span>
                    <IoArrowForwardCircleOutline size={30} />
                  </div>
                  <p className="text-[16px] text-[#797D85]">
                    Accept crypto payments instantly with a simple secure
                    checkout. Power deposits, subscriptions abd e-commerce with
                    stable coin settlements _ all through Moonpay.
                  </p>
                </Link>

                <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
                <Link to="/ramps" className="flex flex-col gap-2">
                  <div className="flex items-center justify-between hover:text-purple-500">
                    <span className="font-bold text-[16px]">Issuance </span>
                    <IoArrowForwardCircleOutline size={30} />
                  </div>
                  <p className="text-[16px] text-[#797D85]">
                    A regulated platform to build, launch, and scale your own branded stablecoin.
                  </p>
                </Link>

                <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
                <Link className="flex flex-col gap-2">
                  <div className="flex items-center justify-between hover:text-purple-500">
                    <span className="font-bold text-[16px]">Iron </span>
                    <IoArrowForwardCircleOutline size={30} />
                  </div>
                  <p className="text-[16px] text-[#797D85]">
                    Stableicon payment infrastructure offering APIs for global
                    on/off rampings, wallets and virual accounts built for
                    developers.
                  </p>
                </Link>

                <div className="border-t-[1px] border-[#D4D4D4] w-full mx-auto"></div>
                <Link className="flex flex-col gap-2">
                  <div className="flex items-center justify-between hover:text-purple-500">
                    <span className="font-bold text-[16px]">Otherlife </span>
                    <IoArrowForwardCircleOutline size={30} />
                  </div>
                  <p className="text-[16px] text-[#797D85]">
                    Award winning Web3 Agency supporting our patners with
                    ideation, strategy, communication marketing and Frontend
                    Development.
                  </p>
                </Link>
              </div>
            )}
          </div>

          <div className="px-5 w-full pt-5">
            <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-2xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessHeader;

