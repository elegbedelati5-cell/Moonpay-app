import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { SiBitcoinsv, SiCardano, SiDogecoin, SiPolygon } from "react-icons/si";

const GeneralHeaderDesktopSection = () => {
  const [showHoverBuyMenu, setShowHoverBuyMenu] = useState(false);
  const [showHoverSellMenu, setShowHoverSellMenu] = useState(false);
  const [showHoverSwapMenu, setShowHoverSwapMenu] = useState(false);
  const [showHoverMenu, setShowHoverMenu] = useState(false);
  const [showHoverCompanyMenu, setShowHoverCompanyMenu] = useState(true);
  const [showHoverCryptopricesMenu, setShowHoverCryptopricesMenu] = useState(false);
  const [showHoverLearnMenu, setShowHoverLearnMenu] = useState(false)
  const [showHoverSupportMenu, setShowHoverSupportMenu] = useState(false)

  const handleShowHoverBuyMenu = () => {
    setShowHoverBuyMenu(true);
    setShowHoverSellMenu(false)
    setShowHoverSwapMenu(false)
    setShowHoverMenu(false)
  };

  const handleCloseHoverBuyMenu = () => {
    setShowHoverBuyMenu(false);
    setShowHoverSellMenu(false)
    setShowHoverSwapMenu(false)
    setShowHoverMenu(false)
  };

  const handleShowHoverSellMenu = () => {
    setShowHoverSellMenu(true);
    setShowHoverBuyMenu(false)
    setShowHoverSwapMenu(false)
    setShowHoverMenu(false)
  };

  const handleCloseHoverSellMenu = () => {
    setShowHoverSellMenu(false);
    setShowHoverBuyMenu(false)
    setShowHoverSwapMenu(false)
    setShowHoverMenu(false)
  };

  const handleShowHoverSwapMenu = () => {
    setShowHoverSwapMenu(true);
    setShowHoverSellMenu(false)
    setShowHoverBuyMenu(false)
    setShowHoverMenu(false)
  };

  const handleCloseHoverSwapMenu = () => {
    setShowHoverSwapMenu(false);
    setShowHoverSellMenu(false)
    setShowHoverBuyMenu(false)
    setShowHoverMenu(false)
  };

  const handleShowHoverMenu = () => {
    setShowHoverMenu(true);
    setShowHoverSellMenu(false)
    setShowHoverSwapMenu(false)
    setShowHoverBuyMenu(false)
  };

  const handleCloseHoverMenu = () => {
    setShowHoverMenu(false);
    setShowHoverSellMenu(false)
    setShowHoverSwapMenu(false)
    setShowHoverBuyMenu(false)
  };

  const handleShowHoverCompanyMenu = () => {
    setShowHoverCompanyMenu(!showHoverCompanyMenu);
    setShowHoverCryptopricesMenu(false)
    setShowHoverLearnMenu(false)
    setShowHoverSupportMenu(false)
  };

  const handleShowHoverCryptopricesMenu = () => {
    setShowHoverCryptopricesMenu(!showHoverCryptopricesMenu);
    setShowHoverCompanyMenu(false)
    setShowHoverLearnMenu(false)
     setShowHoverSupportMenu(false)
  };

  const handleShowHoverLearnMenu = () => {
     setShowHoverLearnMenu(!showHoverLearnMenu)
     setShowHoverCryptopricesMenu(false)
     setShowHoverCompanyMenu(false)
     setShowHoverSupportMenu(false)
  }

  const handleShowHoverSupportMenu = () => {
    setShowHoverSupportMenu(!showHoverSupportMenu)
    setShowHoverCryptopricesMenu(false)
    setShowHoverCompanyMenu(false)
    setShowHoverLearnMenu(false)
  }
   return (
    <div className="w-screen  bg-[#F9F8FB] shadow-sm ">
        <div className="flex sticky bg-[#D8C8FF] py-2 text-sm items-center justify-center">
           <span>MoonPay has secured its New York Trust Charter</span>
           <IoIosArrowRoundForward size={25}/>
           <Link className="underline font-semibold">Learn More</Link>
        </div>
      {/* Desktop navbar */}
      <div className="container lg:py-5 lg:flex items-center justify-between hidden">
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
            <Link
              to=""
              onMouseEnter={handleShowHoverBuyMenu}
               className={`flex items-center justify-between gap-5 ${
                showHoverBuyMenu ? "text-black/50" : "text-black"
              }`}
            >
              Buy
            </Link>
            <Link
              to=""
              onMouseEnter={handleShowHoverSellMenu}
               className={`flex items-center justify-between gap-5 ${
                showHoverSellMenu ? "text-black/50" : "text-black"
              }`}
            >
              Sell
            </Link>
            <Link
              to=""
              onMouseEnter={handleShowHoverSwapMenu}
               className={`flex items-center justify-between gap-5 ${
                showHoverSwapMenu ? "text-black/50" : "text-black"
              }`}
            >
              Swap
            </Link>
            <Link
              to=""
              onMouseEnter={handleShowHoverMenu}
              className={`flex items-center justify-between gap-5 ${
                showHoverMenu ? "text-black/50" : "text-black"
              }`}
            >
              <CgMenuGridO size={22} />
            </Link>
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
            <div className="flex flex-col">
              <h3 className="text-black font-bold hover:text-black/50">
                Buy Bitcoin
              </h3>
              <p className="text-[#5e5e5e]">BTC</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <SiDogecoin size={35} color="#E1B303" />
            <div className="flex flex-col">
              <h3 className="text-black font-bold hover:text-black/50">
                Buy Dogecoin
              </h3>
              <p className="text-[#5e5e5e]">DOGE</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img
              src="/images/ethereum-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col">
              <h3 className="text-black hover:text-black/50 font-bold">
                Buy Ethereum
              </h3>
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
              <h3 className=" text-black font-bold hover:text-black/50">
                Buy Cardano
              </h3>
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
              <h3 className=" text-black hover:text-black/50 font-bold">
                Buy Polygon
              </h3>
              <p className="text-[#5e5e5e]">POL</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <img src="/images/avalanche-avax-logo.svg" alt="" className="h-9" />
            <div className="flex flex-col ">
              <h3 className="text-black hover:text-black/50 font-bold">
                Buy Avalanche
              </h3>
              <p className="text-[#5e5e5e]">AVAX</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img src="/images/Solana_logo.png" alt="" className="h-9" />
            <div className="flex flex-col ">
              <h3 className="text-black hover:text-black/50 font-bold">
                Buy Solana
              </h3>
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
        <div className="bg-[#ffffff] w-[23%] px-9 text-white pt-6 rounded-2xl pb-24 border-[1px] border-[black]">
          <Link
            to=""
            className="flex flex-col gap-5 text-black hover:text-black/50"
          >
            <div className="flex items-center justify-between font-bold text-black">
              Sell <IoIosArrowForward />
            </div>
            Turn your crypto into cash. In a flash. Get paid straight into your
            bank account or Visa card.
          </Link>
        </div>

        <div className="grid grid-cols-2  bg-white w-[52%] px-9 pt-6 rounded-2xl border-[1px] border-[black]">
          <Link to="/sellBtc" className="col-span-1 flex gap-5 pb-3 ">
            <SiBitcoinsv size={35} color="#F7931A" />
            <div className="flex flex-col ">
              <h3 className="text-black  hover:text-black/50 font-bold">
                Sell Bitcoin
              </h3>
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
              <h3 className=" text-black hover:text-black/50 font-bold">
                Sell Cardano
              </h3>
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
              <h3 className="text-black hover:text-black/50 font-bold">
                Sell Ethereum
              </h3>
              <p className="text-[#5e5e5e]">ETH</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <SiDogecoin size={35} color="#E1B303" />
            <div className="flex flex-col">
              <h3 className="text-black font-bold hover:text-black/50">
                Sell Dogecoin
              </h3>
              <p className="text-[#5e5e5e]">DOGE</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img
              src="/images/usdc-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col">
              <h3 className=" text-black font-bold  hover:text-black/50">
                Sell USDC
              </h3>
              <p className="text-[#5e5e5e]">USDC</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5">
            <img src="/images/avalanche-avax-logo.svg" alt="" className="h-9" />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold hover:text-black/50">
                Sell Avalanche
              </h3>
              <p className="text-[#5e5e5e]">AVAX</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img src="/images/Solana_logo.png" alt="" className="h-9" />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold  hover:text-black/50">
                Sell Solana
              </h3>
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
        <div className="bg-[#ffffff] w-[23%] px-9 text-white pt-6 rounded-2xl pb-24 border-[1px] border-[black]">
          <Link
            to=""
            className="flex flex-col gap-5 text-black hover:text-black/50"
          >
            <div className="flex items-center justify-between font-bold text-black">
              Swap <IoIosArrowForward />
            </div>
            Swap between tokens, even if they're on different chains(we make
            bridging seamless too).
          </Link>
        </div>

        <div className="grid grid-cols-2  bg-white w-[52%] px-9 pt-6 rounded-2xl border-[1px] border-[black]">
          <Link to="/swapEth" className="col-span-1 flex gap-5 pb-3">
            <img
              src="/images/ethereum-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold  hover:text-black/50">
                Swap Ethereum
              </h3>
              <p className="text-[#5e5e5e]">ETH</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3 ">
            <img
              src="/images/images-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold hover:text-black/50">
                Swap Wrapped Bitcoin
              </h3>
              <p className="text-[#5e5e5e]">WBTC</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
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

          <Link className="col-span-1 flex gap-5">
            <img src="/images/dai-logo.png" alt="" className="h-9" />
            <div className="flex flex-col">
              <h3 className=" text-black font-bold hover:text-black/50">
                Swap Dai
              </h3>
              <p className="text-[#5e5e5e]">DAI</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img
              src="/images/aave.svg"
              alt=""
              className="h-9 bg-black p-2 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className=" text-black font-bold hover:text-black/50">
                Swap Aave
              </h3>
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
              <h3 className="text-black font-bold hover:text-black/50">
                Swap Compound
              </h3>
              <p className="text-[#5e5e5e]">COMP</p>
            </div>
          </Link>

          <Link className="col-span-1 flex gap-5 pb-3">
            <img
              src="/images/chainlink-removebg-preview.png"
              alt=""
              className="h-9"
            />
            <div className="flex flex-col ">
              <h3 className="text-black font-bold hover:text-black/50">
                Swap Chainlink
              </h3>
              <p className="text-[#5e5e5e]">LINK</p>
            </div>
          </Link>
        </div>
      </div>

      <div
        onMouseLeave={handleCloseHoverMenu}
        className={
          showHoverMenu === true
            ? "container fixed top-32 left-28 w-full lg:flex hidden items-center gap-2"
            : "hidden"
        }
      >
        <div className="bg-[#ffffff] w-[23%] px-9 text-white rounded-2xl py-6 border-[1px] border-[black]">
          <div className="flex flex-col gap-10">
            <Link
              onClick={handleShowHoverCompanyMenu}
              to=""
              className={`flex items-center justify-between gap-5 ${
                showHoverCompanyMenu ? "text-black/50" : "text-black"
              }`}
            >
              Company
              <IoIosArrowForward
                className={`transition-transform ${
                  showHoverCompanyMenu ? "rotate-360" : "hidden"
                }`}
              />
            </Link>
            <Link
              onClick={handleShowHoverCryptopricesMenu}
              to=""
              className={`flex items-center justify-between gap-5 ${
                showHoverCryptopricesMenu ? "text-black/50" : "text-black"
              }`}
            >
              Crypto prices
              <IoIosArrowForward
                className={`transition-transform ${
                  showHoverCryptopricesMenu ? "rotate-360" : "hidden"
                }`}
              />
            </Link>
            <Link  onClick={handleShowHoverLearnMenu}
              to=""
              className={`flex items-center justify-between gap-5 ${
                showHoverLearnMenu ? "text-black/50" : "text-black"
              }`}>
              Learn
              <IoIosArrowForward
                className={`transition-transform ${
                  showHoverLearnMenu ? "rotate-360" : "hidden"
                }`}
              />
            </Link>
            <Link onClick={handleShowHoverSupportMenu}
              to=""
              className={`flex items-center justify-between gap-5 ${
                showHoverSupportMenu ? "text-black/50" : "text-black"
              }`}>
              Support
              <IoIosArrowForward
                className={`transition-transform ${
                  showHoverSupportMenu ? "rotate-360" : "hidden"
                }`}
              />
            </Link>
          </div>
        </div>

        {showHoverCompanyMenu && (
          <div>
            <div className="grid grid-cols-2 px-5 bg-[#F9F8FB] w-full h-[260px] rounded-2xl border-[1px] border-[black]">
              <Link className="flex items-center gap-2 hover:bg-gray-50">
                <img src="/icons/newsroom.svg" alt="Newsroom" className="h-9" />
                <h3 className="font-bold">Newsroom</h3>
              </Link>

              <Link className="flex items-center gap-2 hover:bg-gray-50">
                <img src="/icons/media.svg" alt="media" className="h-9" />
                <h3 className="font-bold">Media</h3>
              </Link>

              <Link className="flex items-center gap-2 hover:bg-gray-50">
                <img src="/icons/careers.svg" alt="" className="h-9" />
                <h3 className="font-bold">Careers</h3>
              </Link>

              <Link className="flex items-center gap-2 hover:bg-gray-50">
                <img src="/icons/changelog.svg" alt="" className="h-9" />
                <h3 className="font-bold">Changelog</h3>
              </Link>

              <Link className="flex items-center gap-2 hover:bg-gray-50">
                <img src="/icons/affiliates.svg" alt="" className="h-9" />
                <h3 className="font-bold">Affliates</h3>
              </Link>

              <Link className="flex items-center gap-2 hover:bg-gray-50">
                <img
                  src="/icons/MoonPay-Discover logo.png"
                  alt=""
                  className="h-9"
                />
                <h3 className="font-bold">Moonpay Discov...</h3>
                <span className="text-white bg-[#7700DF] mx-2 py-1 px-2 rounded-lg">
                  New
                </span>
              </Link>
            </div>
          </div>
        )}
        {showHoverCryptopricesMenu &&(
             <div className="grid grid-cols-2 px-5 bg-[#F9F8FB] w-[55%] h-[260px] rounded-2xl border-[1px] border-[black]">
                    <Link className="flex items-center gap-2 hover:bg-gray-50">
                      <img
                        src="/icons/bitcoin.svg"
                        alt="Newsroom"
                        className="h-9"
                      />
                      <h3 className="font-bold">Bitcoin Price</h3>
                    </Link>

                    <Link className="flex items-center gap-2 hover:bg-gray-50">
                      <img src="/icons/ethereum-2.svg" alt="media" className="h-9" />
                      <h3 className="font-bold">Ethereum Price</h3>
                    </Link>

                    <Link className="flex items-center gap-2 hover:bg-gray-50">
                      <img src="/images/Solana_logo.png" alt="" className="h-9" />
                      <h3 className="font-bold">Solana Price</h3>
                    </Link>

                    <Link className="flex items-center gap-2 hover:bg-gray-50">
                      <img src="/icons/doge logo.png" alt="" className="h-9" />
                      <h3 className="font-bold">Dogecoin Price</h3>
                    </Link>

                    <Link className="flex items-center gap-2 hover:bg-gray-50">
                      <img src="/icons/Cardano.svg" alt="" className="h-9" />
                      <h3 className="font-bold">Cardano Price</h3>
                    </Link>

                    <Link className="flex items-center gap-2 hover:bg-gray-50">
                      <img
                        src="/icons/XRP.svg"
                        alt=""
                        className="h-9"
                      />
                      <h3 className="font-bold">XRP Price</h3>
                    </Link>
                    <Link className="flex items-center gap-2 hover:bg-gray-50">
                      <img
                        src="/icons/bnb-logo.png"
                        alt=""
                        className="h-9"
                      />
                      <h3 className="font-bold">BNB Price</h3>
                    </Link>
                    <Link className="flex items-center gap-2 hover:bg-gray-50">
                      <h3 className="font-bold">All Crypto Prices</h3>
                    </Link>
                  </div>
        )}
        {showHoverLearnMenu &&(
             <div className="grid grid-cols-2 px-5 bg-[#F9F8FB] w-[55%] h-[260px] rounded-2xl border-[1px] border-[black]">
                    <Link className="flex items-center gap-4 px-5 py-1 hover:bg-gray-50">
                      <img
                        src="/icons/blockchain.svg"
                        alt=""
                        className="h-9"
                      />
                      <h3 className="font-bold">What is Blockchain?</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-5 py-1 hover:bg-gray-50">
                      <img src="/icons/nft.svg" alt="media" className="h-9" />
                      <h3 className="font-bold">What are NFTs?</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-5 py-1 hover:bg-gray-50">
                      <img src="/icons/bitcoin-mining.svg" alt="" className="h-9" />
                      <h3 className="font-bold">What is Bitcoin mining?</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-5 py-1 hover:bg-gray-50">
                      <img src="/icons/DeFisvg.svg" alt="" className="h-9" />
                      <h3 className="font-bold">What is DeFi?</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-5 py-1 hover:bg-gray-50">
                      <img src="/icons/crypto-stacking.svg" alt="" className="h-9" />
                      <h3 className="font-bold">What is crypto stacking</h3>
                    </Link>

                    <Link className="flex items-center gap-4 px-5 py-1 hover:bg-gray-50">
                      <h3 className="font-bold">All Learn Articles</h3>
                    </Link>
                  </div>
        )}
        {showHoverSupportMenu &&(
             <div className="grid grid-cols-2 px-5 bg-[#F9F8FB] w-[55%] h-[260px] rounded-2xl border-[1px] border-[black]">
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

                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                  </div>
        )}
      </div>
    </div>
  );
};
export default GeneralHeaderDesktopSection;
