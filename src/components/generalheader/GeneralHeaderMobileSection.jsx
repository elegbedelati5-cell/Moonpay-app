import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { SiBitcoinsv, SiCardano, SiDogecoin, SiPolygon } from "react-icons/si";

const GeneralHeaderMobileSection = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showHoverMobileBuyMenu, setShowHoverMobileBuyMenu] = useState(false);
  const [showHoverMobileSellMenu, setShowHoverMobileSellMenu] = useState(false);
  const [showHoverMobileSwapMenu, setShowHoverMobileSwapMenu] = useState(false);
  const [showHoverMobileCompanyMenu, setShowHoverMobileCompanyMenu]=useState(false);
  const [showHoverMobileCryptopricesMenu, setShowHoverMobileCryptopricesMenu] = useState(false)
  const [showHoverMobileLearnMenu, setShowHoverMobileLearnMenu] = useState(false)
  const [showHoverMobileSupportMenu, setShowHoverMobileSupportMenu] = useState(false)
  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const handleShowHoverMobileBuyMenu = () => {
    setShowHoverMobileBuyMenu(!showHoverMobileBuyMenu);
  };

  const handleShowHoverMobileSellMenu = () => {
    setShowHoverMobileSellMenu(!showHoverMobileSellMenu);
  };

  const handleShowHoverMobileSwapMenu = () => {
    setShowHoverMobileSwapMenu(!showHoverMobileSwapMenu);
  };

  const handleShowHoverMobileCompanyMenu = () => {
    setShowHoverMobileCompanyMenu(!showHoverMobileCompanyMenu);
  };

  const handleShowHoverMobileCryptopricesMenu = () => {
    setShowHoverMobileCryptopricesMenu(!showHoverMobileCryptopricesMenu)
  }

  const handleShowHoverMobileLearnMenu = () => {
    setShowHoverMobileLearnMenu(!showHoverMobileLearnMenu)
  }

  const handleShowHoverMobileSupportMenu = () => {
    setShowHoverMobileSupportMenu(!showHoverMobileSupportMenu)
  }
  return (
    <div className="w-screen py-5 lg:py-0 bg-[#F9F8FB] shadow-sm ">
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
              className="text-black text-sm font-semibold bg-[#F2F2F2] p-2 rounded-[10px]"
            >
              Individuals
            </Link>
            <Link
              to="/business"
              className="text-black/50 text-sm bg-[#F8F8F8] p-2 rounded-[10px]"
            >
              Business
            </Link>
          </div>
          <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

          <div className="px-5 flex flex-col gap-6 pb-10">
            <div className="w-full">
              <button
                onClick={handleShowHoverMobileBuyMenu}
                className="w-full flex items-center justify-between text-sm font-bold lg:hidden"
              >
                Buy
                <IoIosArrowForward
                  className={`transition-transform ${
                    showHoverMobileBuyMenu ? "rotate-90" : ""
                  }`}
                />
              </button>

              {showHoverMobileBuyMenu && (
                <div className="fixed inset-0 top-[150px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden ">
                  <button
                    onClick={() => setShowHoverMobileBuyMenu(false)}
                    className="flex items-center gap-2 px-6 py-3 hover:bg-gray-50 w-full text-left"
                  >
                    <IoIosArrowBack />
                    <span className="text-sm font-semibold">
                      Back to the main menu
                    </span>
                  </button>
                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

                  <div className=" px-6 mt-3 ">
                    <div className="flex flex-col bg-[#F8F8F8] px-2 py-3 rounded-xl gap-2 ">
                      <span className="font-semibold text-sm">Buy Crypto</span>
                      <p className="text-xs text-[#8d8d8d]">
                        Use a card, Apple Pay or Goggle Pay to buy crypto fast.
                        We also accept bank tranfers and wires.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col py-4 pb-16">
                    <Link className="flex items-center gap-5 px-9 py-2 hover:bg-gray-50">
                      <SiBitcoinsv size={35} color="#F7931A" />
                      <div className="flex flex-col">
                        <h3 className="font-bold">Buy Bitcoin</h3>
                        <p className="text-[#5e5e5e]">BTC</p>
                      </div>
                    </Link>
                    <Link className="flex items-center gap-5 px-9 py-2 hover:bg-gray-50">
                      <img
                        src="/images/ethereum-removebg-preview.png"
                        alt="Ethereum"
                        className="h-9"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-bold">Buy Ethereum</h3>
                        <p className="text-[#5e5e5e]">ETH</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-2 hover:bg-gray-50">
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

                    <Link className="flex items-center gap-5 px-9 py-2 hover:bg-gray-50">
                      <img
                        src="/images/Solana_logo.png"
                        alt=""
                        className="h-9"
                      />
                      <div className="flex flex-col ">
                        <h3 className="text-black font-bold">Buy Solana</h3>
                        <p className="text-[#5e5e5e]">SOL</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-2 hover:bg-gray-50">
                      <SiDogecoin size={35} color="#E1B303" />
                      <div className="flex flex-col">
                        <h3 className="font-bold">Buy Dogecoin</h3>
                        <p className="text-[#5e5e5e]">DOGE</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-2 hover:bg-gray-50">
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
                  </div>
                   <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>
                  <div className="px-5 pt-5 flex flex-col gap-6 pb-5">
                    <Link
                      to=""
                      className="flex items-center justify-between font-bold"
                    >
                      <div className="flex gap-4 items-center">
                        <TbWorld size={25} />
                        <span className="text-[#70706c] text-[15px]">
                          Language
                        </span>
                        <div className="border-l-[1px] border-[#D4D4D4] h-[30px]"></div>
                        <span className="text-[15px]">English</span>
                      </div>
                      <IoIosArrowForward />{" "}
                    </Link>
                  </div>

                  <div className="px-5 w-full pb-10">
                    <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-xl">
                      Get Started
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full">
              <button
                onClick={handleShowHoverMobileSellMenu}
                className="w-full flex items-center justify-between text-sm font-bold lg:hidden"
              >
                Sell
                <IoIosArrowForward
                  className={`transition-transform ${
                    showHoverMobileSellMenu ? "rotate-90" : ""
                  }`}
                />
              </button>

              {showHoverMobileSellMenu && (
                <div className="fixed inset-0 top-[150px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden ">
                  <button
                    onClick={() => setShowHoverMobileSellMenu(false)}
                    className="flex items-center gap-2 px-6 py-3 hover:bg-gray-50 w-full text-left"
                  >
                    <IoIosArrowBack />
                    <span className="text-sm font-semibold">
                      Back to the main menu
                    </span>
                  </button>
                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

                  <div className=" px-6 mt-5 ">
                    <div className="flex flex-col bg-[#F8F8F8] px-2 py-3 rounded-xl gap-2 ">
                      <span className="font-semibold text-sm">Sell Crypto</span>
                      <p className="text-xs text-[#8d8d8d]">
                        Turn your crypto into cash. In a flash. Get paid
                        straight to your bank account or Visa card.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col py-4 pb-16">
                    <Link
                      to="/sellBtc"
                      className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50"
                    >
                      <SiBitcoinsv size={35} color="#F7931A" />
                      <div className="flex flex-col">
                        <h3 className="font-bold">Sell Bitcoin</h3>
                        <p className="text-[#5e5e5e]">BTC</p>
                      </div>
                    </Link>
                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/images/ethereum-removebg-preview.png"
                        alt="Ethereum"
                        className="h-9"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-bold">Sell Ethereum</h3>
                        <p className="text-[#5e5e5e]">ETH</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/images/usdc-removebg-preview.png"
                        alt=""
                        className="h-9"
                      />
                      <div className="flex flex-col">
                        <h3 className=" text-black font-bold">Sell USDC</h3>
                        <p className="text-[#5e5e5e]">USDC</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/images/Solana_logo.png"
                        alt=""
                        className="h-9"
                      />
                      <div className="flex flex-col ">
                        <h3 className="text-black font-bold">Sell Solana</h3>
                        <p className="text-[#5e5e5e]">SOL</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
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

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <SiDogecoin size={35} color="#E1B303" />
                      <div className="flex flex-col">
                        <h3 className="font-bold">Sell Dogecoin</h3>
                        <p className="text-[#5e5e5e]">DOGE</p>
                      </div>
                    </Link>
                  </div>
                   <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>
                  <div className="px-5 pt-5 flex flex-col gap-6 pb-5">
                    <Link
                      to=""
                      className="flex items-center justify-between font-bold"
                    >
                      <div className="flex gap-4 items-center">
                        <TbWorld size={25} />
                        <span className="text-[#70706c] text-[15px]">
                          Language
                        </span>
                        <div className="border-l-[1px] border-[#D4D4D4] h-[30px]"></div>
                        <span className="text-[15px]">English</span>
                      </div>
                      <IoIosArrowForward />{" "}
                    </Link>
                  </div>

                  <div className="px-5 w-full pb-10">
                    <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-xl">
                      Get Started
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full">
              <button
                onClick={handleShowHoverMobileSwapMenu}
                className="w-full flex items-center justify-between text-sm font-bold lg:hidden"
              >
                Swap
                <IoIosArrowForward
                  className={`transition-transform ${
                    showHoverMobileSwapMenu ? "rotate-90" : ""
                  }`}
                />
              </button>

              {showHoverMobileSwapMenu && (
                <div className="fixed inset-0 top-[150px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden ">
                  <button
                    onClick={() => setShowHoverMobileSwapMenu(false)}
                    className="flex items-center gap-2 px-6 py-3 hover:bg-gray-50 w-full text-left"
                  >
                    <IoIosArrowBack />
                    <span className="text-sm font-semibold">
                      Back to the main menu
                    </span>
                  </button>
                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

                  <div className=" px-6 mt-5 ">
                    <div className="flex flex-col bg-[#F8F8F8] px-2 py-3 rounded-xl gap-2 ">
                      <span className="font-semibold text-sm">Swap Crypto</span>
                      <p className="text-xs text-[#8d8d8d]">
                        Swap between tokens, even if they're on different chains
                        (we make bridging seamless too).
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col py-4 pb-16">
                    <Link to="/swapEth" className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/images/ethereum-removebg-preview.png"
                        alt="Ethereum"
                        className="h-9"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-bold">Swap Ethereum</h3>
                        <p className="text-[#5e5e5e]">ETH</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/images/usdc-removebg-preview.png"
                        alt=""
                        className="h-9"
                      />
                      <div className="flex flex-col">
                        <h3 className=" text-black font-bold">Swap USDC</h3>
                        <p className="text-[#5e5e5e]">USDC</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/images/aave.svg"
                        alt=""
                        className="h-9 bg-black p-2 rounded-full"
                      />
                      <div className="flex flex-col">
                        <h3 className=" text-black font-bold">Swap Aave</h3>
                        <p className="text-[#5e5e5e]">AAVE</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/images/chainlink-removebg-preview.png"
                        alt=""
                        className="h-9"
                      />
                      <div className="flex flex-col ">
                        <h3 className="text-black font-bold">Swap Chainlink</h3>
                        <p className="text-[#5e5e5e]">LINK</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50 ">
                      <img
                        src="/images/images-removebg-preview.png"
                        alt=""
                        className="h-9"
                      />
                      <div className="flex flex-col  hover:text-black/50">
                        <h3 className="text-black font-bold">
                          Swap Wrapped Bitcoin
                        </h3>
                        <p className="text-[#5e5e5e]">WBTC</p>
                      </div>
                    </Link>

                    <Link className="flex items-center gap-5 px-9 py-3 hover:bg-gray-50">
                      <img src="/images/dai-logo.png" alt="" className="h-9" />
                      <div className="flex flex-col">
                        <h3 className=" text-black font-bold">Swap Dai</h3>
                        <p className="text-[#5e5e5e]">DAI</p>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>
                  <div className="px-5 pt-5 flex flex-col gap-6 pb-5">
                    <Link
                      to=""
                      className="flex items-center justify-between font-bold"
                    >
                      <div className="flex gap-4 items-center">
                        <TbWorld size={25} />
                        <span className="text-[#70706c] text-[15px]">
                          Language
                        </span>
                        <div className="border-l-[1px] border-[#D4D4D4] h-[30px]"></div>
                        <span className="text-[15px]">English</span>
                      </div>
                      <IoIosArrowForward />{" "}
                    </Link>
                  </div>

                  <div className="px-5 w-full pb-10">
                    <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-xl">
                      Get Started
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full">
              <button
                onClick={handleShowHoverMobileCompanyMenu}
                className="w-full flex items-center justify-between text-sm font-bold lg:hidden"
              >
                Company
                <IoIosArrowForward
                  className={`transition-transform ${
                    showHoverMobileCompanyMenu ? "rotate-90" : ""
                  }`}
                />
              </button>

              {showHoverMobileCompanyMenu && (
                <div className="fixed inset-0 top-[150px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden ">
                  <button
                    onClick={() => setShowHoverMobileCompanyMenu(false)}
                    className="flex items-center gap-2 px-6 py-3 hover:bg-gray-50 w-full text-left"
                  >
                    <IoIosArrowBack />
                    <span className="text-sm font-semibold">
                      Back to the main menu
                    </span>
                  </button>
                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

                  <div className="flex flex-col py-4 pb-16">
                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/icons/newsroom.svg"
                        alt="Newsroom"
                        className="h-9"
                      />
                      <h3 className="font-bold">Newsroom</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img src="/icons/media.svg" alt="media" className="h-9" />
                      <h3 className="font-bold">Media</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img src="/icons/careers.svg" alt="" className="h-9" />
                      <h3 className="font-bold">Careers</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img src="/icons/changelog.svg" alt="" className="h-9" />
                      <h3 className="font-bold">Changelog</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img src="/icons/affiliates.svg" alt="" className="h-9" />
                      <h3 className="font-bold">Affliates</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/icons/MoonPay-Discover logo.png"
                        alt=""
                        className="h-9"
                      />
                      <h3 className="font-bold">Moonpay Discover</h3>
                      <span className="text-white bg-[#7700DF] py-1 px-2 rounded-lg">
                        New
                      </span>
                    </Link>
                  </div>

                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>
                  <div className="px-5 pt-5 flex flex-col gap-6 pb-5">
                    <Link
                      to=""
                      className="flex items-center justify-between font-bold"
                    >
                      <div className="flex gap-4 items-center">
                        <TbWorld size={25} />
                        <span className="text-[#70706c] text-[15px]">
                          Language
                        </span>
                        <div className="border-l-[1px] border-[#D4D4D4] h-[30px]"></div>
                        <span className="text-[15px]">English</span>
                      </div>
                      <IoIosArrowForward />{" "}
                    </Link>
                  </div>

                  <div className="px-5 w-ful pb-10">
                    <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-xl">
                      Get Started
                    </button>
                  </div>

                </div>
              )}
            </div>

            <div className="w-full">
              <button
                onClick={handleShowHoverMobileCryptopricesMenu}
                className="w-full flex items-center justify-between text-sm font-bold lg:hidden"
              >
              Crypto Prices
                <IoIosArrowForward
                  className={`transition-transform ${
                    showHoverMobileCryptopricesMenu ? "rotate-90" : ""
                  }`}
                />
              </button>

              {showHoverMobileCryptopricesMenu && (
                <div className="fixed inset-0 top-[150px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden ">
                  <button
                    onClick={() => setShowHoverMobileCryptopricesMenu(false)}
                    className="flex items-center gap-2 px-6 py-3 hover:bg-gray-50 w-full text-left"
                  >
                    <IoIosArrowBack />
                    <span className="text-sm font-semibold">
                      Back to the main menu
                    </span>
                  </button>
                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

                  <div className="flex flex-col py-4 pb-16">
                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/icons/bitcoin.svg"
                        alt="Newsroom"
                        className="h-9"
                      />
                      <h3 className="font-bold">Bitcoin Price</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img src="/icons/ethereum-2.svg" alt="media" className="h-9" />
                      <h3 className="font-bold">Ethereum Price</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img src="/images/Solana_logo.png" alt="" className="h-9" />
                      <h3 className="font-bold">Solana Price</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img src="/icons/doge logo.png" alt="" className="h-9" />
                      <h3 className="font-bold">Dogecoin Price</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img src="/icons/Cardano.svg" alt="" className="h-9" />
                      <h3 className="font-bold">Cardano Price</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-9 py-3 hover:bg-gray-50">
                      <img
                        src="/icons/XRP.svg"
                        alt=""
                        className="h-9"
                      />
                      <h3 className="font-bold">XRP Price</h3>
                    </Link>
                  </div>

                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>
                  <div className="px-5 pt-5 flex flex-col gap-6 pb-5">
                    <Link
                      to=""
                      className="flex items-center justify-between font-bold"
                    >
                      <div className="flex gap-4 items-center">
                        <TbWorld size={25} />
                        <span className="text-[#70706c] text-[15px]">
                          Language
                        </span>
                        <div className="border-l-[1px] border-[#D4D4D4] h-[30px]"></div>
                        <span className="text-[15px]">English</span>
                      </div>
                      <IoIosArrowForward />{" "}
                    </Link>
                  </div>

                  <div className="px-5 w-ful pb-10">
                    <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-xl">
                      Get Started
                    </button>
                  </div>

                </div>
              )}
            </div>
            <div className="w-full">
              <button
                onClick={handleShowHoverMobileLearnMenu}
                className="w-full flex items-center justify-between text-sm font-bold lg:hidden"
              >
               Learn
                <IoIosArrowForward
                  className={`transition-transform ${
                    showHoverMobileLearnMenu ? "rotate-90" : ""
                  }`}
                />
              </button>

              {showHoverMobileLearnMenu && (
                <div className="fixed inset-0 top-[150px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden ">
                  <button
                    onClick={() => setShowHoverMobileLearnMenu(false)}
                    className="flex items-center gap-2 px-6 py-3 hover:bg-gray-50 w-full text-left"
                  >
                    <IoIosArrowBack />
                    <span className="text-sm font-semibold">
                      Back to the main menu
                    </span>
                  </button>
                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

                  <div className="flex flex-col py-4 pb-16">
                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img
                        src="/icons/blockchain.svg"
                        alt=""
                        className="h-9"
                      />
                      <h3 className="font-bold">What is Blockchain?</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img src="/icons/nft.svg" alt="media" className="h-9" />
                      <h3 className="font-bold">What are NFTs?</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img src="/icons/bitcoin-mining.svg" alt="" className="h-9" />
                      <h3 className="font-bold">What is Bitcoin mining?</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img src="/icons/DeFisvg.svg" alt="" className="h-9" />
                      <h3 className="font-bold">What is DeFi?</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img src="/icons/crypto-stacking.svg" alt="" className="h-9" />
                      <h3 className="font-bold">What is crypto stacking</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50">
                      <h3 className="font-bold">All Learn Articles</h3>
                    </Link>
                  </div>

                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>
                  <div className="px-5 pt-5 flex flex-col gap-6 pb-5">
                    <Link
                      to=""
                      className="flex items-center justify-between font-bold"
                    >
                      <div className="flex gap-4 items-center">
                        <TbWorld size={25} />
                        <span className="text-[#70706c] text-[15px]">
                          Language
                        </span>
                        <div className="border-l-[1px] border-[#D4D4D4] h-[30px]"></div>
                        <span className="text-[15px]">English</span>
                      </div>
                      <IoIosArrowForward />{" "}
                    </Link>
                  </div>

                  <div className="px-5 w-ful pb-10">
                    <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-xl">
                      Get Started
                    </button>
                  </div>

                </div>
              )}
            </div>
    
             <div className="w-full">
              <button
                onClick={handleShowHoverMobileSupportMenu}
                className="w-full flex items-center justify-between text-sm font-bold lg:hidden"
              >
               Support
                <IoIosArrowForward
                  className={`transition-transform ${
                    showHoverMobileSupportMenu ? "rotate-90" : ""
                  }`}
                />
              </button>

              {showHoverMobileSupportMenu && (
                <div className="fixed inset-0 top-[150px] left-0 right-0 bg-white shadow-lg z-50 lg:hidden ">
                  <button
                    onClick={() => setShowHoverMobileSupportMenu(false)}
                    className="flex items-center gap-2 px-6 py-3 hover:bg-gray-50 w-full text-left"
                  >
                    <IoIosArrowBack />
                    <span className="text-sm font-semibold">
                      Back to the main menu
                    </span>
                  </button>
                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

                  <div className="flex flex-col py-4 pb-16">
                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img
                        src="/icons/newsroom.svg"
                        alt=""
                        className="h-9"
                      />
                      <h3 className="font-bold">Documentation</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img src="/icons/help-centre.svg" alt="media" className="h-9" />
                      <h3 className="font-bold">Help Center</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img src="/icons/contact-us.svg" alt="" className="h-9" />
                      <h3 className="font-bold">Contact Us</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50">
                      <img src="/icons/crypto-stacking.svg" alt="" className="h-9" />
                      <h3 className="font-bold">Status</h3>
                    </Link>
                  </div>

                  <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>
                  <div className="px-5 pt-5 flex flex-col gap-6 pb-5">
                    <Link
                      to=""
                      className="flex items-center justify-between font-bold"
                    >
                      <div className="flex gap-4 items-center">
                        <TbWorld size={25} />
                        <span className="text-[#70706c] text-[15px]">
                          Language
                        </span>
                        <div className="border-l-[1px] border-[#D4D4D4] h-[30px]"></div>
                        <span className="text-[15px]">English</span>
                      </div>
                      <IoIosArrowForward />{" "}
                    </Link>
                  </div>

                  <div className="px-5 w-ful pb-10">
                    <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-xl">
                      Get Started
                    </button>
                  </div>

                </div>
              )}
            </div>
          </div>

          <div className="border-t-[1px] border-[#D4D4D4] w-[90%] mx-auto"></div>

          <div className="px-5 flex flex-col gap-4">
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
            <button className="w-full px-5 py-3 bg-black hover:bg-black/50 transition text-white text-sm font-semibold rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralHeaderMobileSection;
