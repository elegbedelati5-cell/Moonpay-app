import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { SiBitcoinsv, SiCardano, SiDogecoin, SiPolygon } from "react-icons/si";

const GeneralHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showHoverBuyMenu, setShowHoverBuyMenu] = useState(false);
  const [showHoverSellMenu, setShowHoverSellMenu] = useState(false);
  const [showHoverSwapMenu, setShowHoverSwapMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const handleShowHoverBuyMenu = () => {
    setShowHoverBuyMenu(true);
  };

  const handleCloseHoverBuyMenu = () => {
    setShowHoverBuyMenu(false);
  };

   const handleShowHoverSellMenu = () => {
    setShowHoverSellMenu(true);
  };

  const handleCloseHoverSellMenu = () => {
    setShowHoverSellMenu(false);
  };

   const handleShowHoverSwapMenu = () => {
    setShowHoverSwapMenu(true);
  };

  const handleCloseHoverSwapMenu = () => {
    setShowHoverSwapMenu(false);
  };



  return (
    <div className="w-screen py-5 bg-[#F9F8FB] shadow-sm ">
      {/* Desktop navbar */}
      <div className="container lg:flex items-center justify-between hidden">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <img src="/images/logo-coloured.png" alt="" className="h-7" />

          <div className="flex gap-4 items-center">
            <Link to="/" className="text-black font-semibold">
              Individuals
            </Link>
            <Link to="/business" className="text-[#7C7C7D]">
              Business
            </Link>
          </div>

          <div className="ml-5 flex gap-5 items-center font-semibold">
            <Link to="" onMouseEnter={handleShowHoverBuyMenu} className=" hover:text-black/50">
              Buy
            </Link>
            <Link to="" onMouseEnter={handleShowHoverSellMenu} className=" hover:text-black/50">
              Sell
            </Link>
            <Link to="" onMouseEnter={handleShowHoverSwapMenu} className=" hover:text-black/50">Swap</Link>
            <CgMenuGridO size={22} />
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-7">
          <TbWorld size={20} />

          <button className="px-5 py-2 bg-black text-white rounded-xl hover:bg-black/30">
            Get Started
          </button>
        </div>
      </div>

      {/* mobile navbar */}

      <div className="flex lg:hidden items-center justify-between lg:px-0 px-5">
        <img src="/images/blacklogo.png" alt="" className="h-6" />
        <CgMenuGridO size={25} onClick={handleShowMobileMenu} />
      </div>

      {/* mobile menu */}
      <div
        className={
          showMobileMenu === true
            ? "fixed top-0 left-0 flex lg:hidden flex-col gap-7 w-screen h-screen"
            : "hidden"
        }
      >
        <div className="bg-white w-full h-full flex flex-col gap-5">
          <div className="flex items-center justify-between p-5 text-3xl font-semibold text-black">
            <img src="/images/blacklogo.png" alt="" className="h-6" />
            <IoIosClose
              size={30}
              onClick={handleCloseMobileMenu}
              className="cursor-pointer "
            />
          </div>
          <div className="flex gap-6 items-center px-5">
            <Link
              to="/"
              className="text-black text-sm font-semibold bg-[#d7d5d5] p-2 rounded-[10px]"
            >
              Individuals
            </Link>
            <Link
              to="/business"
              className="text-black/90 text-sm bg-[#d7d5d5] p-2 rounded-[10px]"
            >
              Business
            </Link>
          </div>
          <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

          <div className="px-5 flex flex-col gap-6">
            <Link to="" className="flex items-center justify-between font-bold">
              Sell <IoIosArrowForward />{" "}
            </Link>
            <Link to="" className="flex items-center justify-between font-bold">
              Swap <IoIosArrowForward />{" "}
            </Link>
            <Link to="" className="flex items-center justify-between font-bold">
              Company <IoIosArrowForward />{" "}
            </Link>
            <Link to="" className="flex items-center justify-between font-bold">
              Crypto Prices <IoIosArrowForward />{" "}
            </Link>
            <Link to="" className="flex items-center justify-between font-bold">
              Learn <IoIosArrowForward />{" "}
            </Link>
            <Link to="" className="flex items-center justify-between font-bold">
              Support <IoIosArrowForward />{" "}
            </Link>
          </div>

          <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

          <div className="px-5 flex flex-col gap-6 pb-5">
            <Link to="" className="flex items-center justify-between font-bold">
              <div className="flex gap-4 items-center">
                <TbWorld size={25} />
                <span className="text-[#70706c] text-[15px]">Language</span>
                <div className="border-l-[1px] border-[#D4D4D4] h-[30px]"></div>
                <span className="text-[15px]">English</span>
              </div>
              <IoIosArrowForward />{" "}
            </Link>
          </div>

          <div className="px-5 w-full">
            <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div
        onMouseLeave={handleCloseHoverBuyMenu}
        className={
          showHoverBuyMenu === true
            ? "container fixed top-32 left-28 w-full lg:flex hidden items-center gap-2"
            : "hidden"
        }
      >
        <div className="bg-[#ffffff] w-[23%] px-9 text-white pt-6 rounded-2xl pb-20 border-[1px] border-[black]">
          <Link
            to=""
            className="flex flex-col gap-5 text-black hover:text-black/50"
          >
            <div className="flex items-center justify-between font-bold text-black">
              Buy <IoIosArrowForward />
            </div>
            Use a card, Apple Pay or Goggle Pay to buy crypto fast. We also
            accept bank transfers and wires.
          </Link>
        </div>

        <div className="grid grid-cols-2  bg-white w-[52%] px-9 pt-6 rounded-2xl border-[1px] border-[black]">
          <Link className="col-span-1 flex gap-5 pb-3 ">
            <SiBitcoinsv size={35} color="#F7931A" />
            <div className="flex flex-col  hover:text-black/50">
              <h3 className="text-black font-bold">Buy Bitcoin</h3>
              <p className="text-[#5e5e5e]">BTC</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <SiDogecoin size={35} color="#E1B303" />
            <div className="flex flex-col">
              <h3 className="text-black font-bold">Buy Dogecoin</h3>
              <p className="text-[#5e5e5e]">DOGE</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img
              src="/images/ethereum-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Buy Ethereum</h3>
              <p className="text-[#5e5e5e]">ETH</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <SiCardano
              size={35}
              color="#FFF"
              className="bg-blue-700 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className=" text-black font-bold">Buy Cardano</h3>
              <p className="text-[#5e5e5e]">BTC</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <SiPolygon
              size={35}
              color="#FFF"
              className="bg-purple-600 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className=" text-black font-bold">Buy Polygon</h3>
              <p className="text-[#5e5e5e]">POL</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <img
              src="/public/images/avalanche-avax-logo.svg"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Buy Avalanche</h3>
              <p className="text-[#5e5e5e]">AVAX</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img src="/images/Solana_logo.png" alt="" className="h-9" />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Buy Solana</h3>
              <p className="text-[#5e5e5e]">SOL</p>
            </div>
          </Link>
        </div>
      </div>

      <div
        onMouseLeave={handleCloseHoverSellMenu}
        className={
          showHoverSellMenu === true
            ? "container fixed top-32 left-28 w-full lg:flex hidden items-center gap-2"
            : "hidden"
        }
      >
        <div className="bg-[#ffffff] w-[23%] px-9 text-white pt-6 rounded-2xl pb-20 border-[1px] border-[black]">
          <Link
            to=""
            className="flex flex-col gap-5 text-black hover:text-black/50"
          >
            <div className="flex items-center justify-between font-bold text-black">
              Sell <IoIosArrowForward />
            </div>
            Turn your crypto into cash. In a flash. Get paid straight into your bank account or Visa card.
          </Link>
        </div>

        <div className="grid grid-cols-2  bg-white w-[52%] px-9 pt-6 rounded-2xl border-[1px] border-[black]">
          <Link className="col-span-1 flex gap-5 pb-3 ">
            <SiBitcoinsv size={35} color="#F7931A" />
            <div className="flex flex-col  hover:text-black/50">
              <h3 className="text-black font-bold">Sell Bitcoin</h3>
              <p className="text-[#5e5e5e]">BTC</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <SiCardano
              size={35}
              color="#FFF"
              className="bg-blue-700 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className=" text-black font-bold">Sell Cardano</h3>
              <p className="text-[#5e5e5e]">BTC</p>
            </div>
          </Link>


          <Link className="col-span-1 flex gap-5 pb-3">
            <img
              src="/images/ethereum-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Sell Ethereum</h3>
              <p className="text-[#5e5e5e]">ETH</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <SiDogecoin size={35} color="#E1B303" />
            <div className="flex flex-col">
              <h3 className="text-black font-bold">Sell Dogecoin</h3>
              <p className="text-[#5e5e5e]">DOGE</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img src="/public/images/usdc-removebg-preview.png" alt="" className="h-9"/>
            <div className="flex flex-col">
              <h3 className=" text-black font-bold">Sell USDC</h3>
              <p className="text-[#5e5e5e]">USDC</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <img
              src="/public/images/avalanche-avax-logo.svg"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Sell Avalanche</h3>
              <p className="text-[#5e5e5e]">AVAX</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img src="/images/Solana_logo.png" alt="" className="h-9" />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Sell Solana</h3>
              <p className="text-[#5e5e5e]">SOL</p>
            </div>
          </Link>
        </div>
      </div>

           <div
        onMouseLeave={handleCloseHoverSwapMenu}
        className={
          showHoverSwapMenu === true
            ? "container fixed top-32 left-28 w-full lg:flex hidden items-center gap-2"
            : "hidden"
        }
      >
        <div className="bg-[#ffffff] w-[23%] px-9 text-white pt-6 rounded-2xl pb-20 border-[1px] border-[black]">
          <Link
            to=""
            className="flex flex-col gap-5 text-black hover:text-black/50"
          >
            <div className="flex items-center justify-between font-bold text-black">
              Swap <IoIosArrowForward />
            </div>
           Swap between tokens, even if they're on different chains(we make bridging seamless too).
          </Link>
        </div>

        <div className="grid grid-cols-2  bg-white w-[52%] px-9 pt-6 rounded-2xl border-[1px] border-[black]">
          <Link className="col-span-1 flex gap-5 pb-3">
            <img
              src="/images/ethereum-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Swap Ethereum</h3>
              <p className="text-[#5e5e5e]">ETH</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3 ">
         <img src="/images/images-removebg-preview.png" alt="" className="h-9"/>
            <div className="flex flex-col  hover:text-black/50">
              <h3 className="text-black font-bold">Swap Wrapped Bitcoin</h3>
              <p className="text-[#5e5e5e]">WBTC</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img src="/images/usdc-removebg-preview.png" alt="" className="h-9"/>
            <div className="flex flex-col">
              <h3 className=" text-black font-bold">Swap USDC</h3>
              <p className="text-[#5e5e5e]">USDC</p>
            </div>
          </Link>



          <Link className="col-span-1 flex gap-5">
           <img src="/images/dai-logo.png" alt="" className="h-9"/>
            <div className="flex flex-col">
              <h3 className=" text-black font-bold">Swap Dai</h3>
              <p className="text-[#5e5e5e]">DAI
              </p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <SiPolygon
              size={35}
              color="#FFF"
              className="bg-purple-600 p-2 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className=" text-black font-bold">Swap Aave</h3>
              <p className="text-[#5e5e5e]">AAVE</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <img
              src="/images/copms-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Swap Compound</h3>
              <p className="text-[#5e5e5e]">COMP</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img src="/public/images/chainlink-removebg-preview.png" alt="" className="h-9" />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold">Swap Chainlink</h3>
              <p className="text-[#5e5e5e]">LINK</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
