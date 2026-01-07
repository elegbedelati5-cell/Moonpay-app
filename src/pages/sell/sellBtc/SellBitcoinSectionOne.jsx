import { useState } from "react";
import { IoIosArrowDown, IoMdSearch, IoMdSettings } from "react-icons/io";
import { RiArrowDropDownLine, RiArrowLeftLine } from "react-icons/ri";
import { SiTrustpilot } from "react-icons/si";
import { currencies, popularCurrencies } from "../../../utils/data";
import { TbCurrencyNaira, TbSwitchVertical } from "react-icons/tb";

const SellBitcoinSectionOne = () => {
  const [showCurrency, setShowCurrency] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "NGN",
    name: "Nigerian Naira",
  });
  const [showAnother, setShowAnother] = useState(false);

  const handleShowCurrency = () => {
    setShowCurrency(true);
  };

  const handleCloseCurrency = () => {
    setShowCurrency(false);
  };

  const allCurrencies = currencies.filter(
    (currency) =>
      currency.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPopular = popularCurrencies.filter(
    (currency) =>
      currency.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowAnother = () => {
    setShowAnother(!showAnother);
  };
  return (
    <div className=" bg-[#F9F8FB] pb-1">
      <div className="bg-white lg:py-24 py-12 flex flex-col gap-24 rounded-4xl">
        <div className="container grid lg:grid-cols-2 grid-cols-1 gap-10 ">
        <div className="col-span-1 flex flex-col gap-5 md:px-10 lg:px-0 px-3">
            <div className="flex md:items-center lg:justify-start md:justify-center">
              <img src="/icons/bitcoin.svg" alt="" className="h-10" />
            </div>
            <h3 className="lg:text-[55px] text-3xl md:tracking-tight md:text-center lg:text-left leading-tight font-semibold">
              Sell Bitcoin for Fiat. Cash Out BTC in a Few Clicks
            </h3>
            <p className="font-semibold md:text-sm text-[#727272] tracking-tight">
              MoonPay offers a simple, fast, and safe checkout to turn your BTC
              into cash. Easily sell Bitcoin for fiat into your bank account or
              card*. * Sell-to-Card available in over 80 countries. See full
              list below.
            </p>
            <div className="flex items-center gap-4 mt-5 lg:mt-6">
              <div className="lg:flex md:hidden gap-2 items-center">
                <img
                  src="/images/apple.png"
                  alt=""
                  className="lg:h-5 h-7 rounded-full"
                />
                <h4 className="font-bold">4.4 ★ on App Store</h4>
              </div>
              <div className="border-l-[1px] border-[#D4D4D4] h-[30px] flex md:hidden"></div>
              <div className="flex gap-2 items-center">
                <img
                  src="/images/playstore.png"
                  alt=""
                  className="lg:h-5 h-7 rounded-full"
                />
                <h4 className="font-bold">4.5 ★ on Google Play</h4>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row md:justify-center lg:justify-start flex-col py-4 gap-2 lg:items-center mt-3">
              <button className="lg:px-5 px-7 lg:py-4 py-4 bg-black text-white rounded-xl lg:flex md:flex hidden">
                Get Started
              </button>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#E2E8F0] cursor-pointer">
                  <SiTrustpilot size={32} color="#10B981" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">TrustScore 4.0</p>
                  <p className="text-[12px] text-[#64748b]">102k Reviews</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="lg:px-5 px-3 lg:py-4 py-3 lg:text-base text-xs bg-black text-white rounded-xl flex lg:hidden md:hidden items-center justify-center">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:pl-56 md:max-w-[620px] lg:pl-28 lg:max-w-[470px] max-w-[400px] flex flex-col gap-5 lg:px-0 px-8">
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl">
              <button
                onClick={handleShowCurrency}
                className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-2 font-semibold hover:bg-gray-200 transition"
              >
                {selectedCurrency.code}
                <IoIosArrowDown size={20} className="text-[#A3A3A3]" />
              </button>
              <h2 className="text-sm font-bold">Sell Crypto</h2>
              <button className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition">
                <IoMdSettings size={20} />
              </button>
            </div>
            {showCurrency && (
              <div className="fixed inset-0 bg-white z-50 flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <button
                    onClick={handleCloseCurrency}
                    className="p-2 hover:bg-gray-100 rounded-full transition"
                  >
                    <RiArrowLeftLine size={24} className="text-gray-700" />
                  </button>
                  <h3 className="font-semibold text-lg">Select currency</h3>
                  <div className="w-10" />
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-3 border-[1px] rounded-2xl px-4 py-3">
                    <IoMdSearch size={20} className="" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      className="bg-transparent outline-none flex-1 text-gray-700"
                      autoFocus
                    />
                  </div>
                </div>
                <div className=" overflow-y-auto flex-1">
                  <div className="flex-1 ">
                    <h2 className="px-6 font-semibold">Popular Currencies</h2>
                    {filteredPopular.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => {
                          setShowCurrency(false);
                          setSelectedCurrency(currency);
                        }}
                        className="w-full text-left px-6 py-4 hover:bg-gray-50 transition flex items-center justify-between"
                      >
                        <div className="flex gap-5 items-center">
                          <div>
                            <img
                              src={currency.coverImageIcon}
                              alt=""
                              className="h-6"
                            />
                          </div>
                          <div className="flex flex-col ">
                            <div className="">{currency.name}</div>
                            <div className="text-sm text-gray-500">
                              {currency.code}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="flex-1">
                    <h2 className="px-6 font-semibold">All Currencies</h2>
                    {allCurrencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => {
                          setShowCurrency(false);
                          setSelectedCurrency(currency);
                        }}
                        className="w-full text-left px-6 py-4 hover:bg-gray-50 transition flex items-center justify-between"
                      >
                        <div className="flex gap-5 items-center">
                          <div>
                            <img
                              src={currency.coverImageIcon}
                              alt=""
                              className="h-6"
                            />
                          </div>
                          <div className="flex flex-col">
                            <div className="">{currency.name}</div>
                            <div className="text-sm text-gray-500">
                              {currency.code}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="relative">
              <div className="h-[120px] flex flex-col items-center justify-center relative">
                {/* Fiat View (NGN) */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
                    showAnother ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex-row items-center justify-center flex">
                    <div className="mb-10">
                      <TbCurrencyNaira size={40} color="#737373" />
                    </div>
                    <span className="text-7xl leading-tight">0</span>
                  </div>
                  <div
                    onClick={handleShowAnother}
                    className="flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <TbSwitchVertical size={20} color="#A3A3A3" />
                    <span className="text-[#737373] font-semibold">0 BTC</span>
                  </div>
                </div>

                {/* Crypto View (BTC) */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
                    showAnother ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="flex flex-row items-center justify-center">
                    <span className="text-7xl leading-tight">0</span>
                    <div className="mb-10">
                      <span className="text-2xl font-semibold text-[#737373]">
                        BTC
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={handleShowAnother}
                    className="flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <TbSwitchVertical size={20} color="#A3A3A3" />
                    <span className="flex items-center text-[#737373] font-semibold">
                      <TbCurrencyNaira /> 0.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          <div className="flex flex-col gap-3">
            <div className="flex border-[1px] border-[#E5E5E5] items-center p-5 rounded-3xl gap-3 ">
              <img src="/icons/bitcoin-btc-logo-1.png" alt="" className="h-10"/>
              <div className="flex flex-col">
                <span className="text-[#737373] text-sm">Sell crypto</span>
                <span className="font-semibold">Bitcoin</span>
              </div>
            </div>
             <div className="bg-[#7D00FF] rounded-full flex items-center justify-center py-3">
                <span className="text-[#B166FF] font-semibold">Review order</span>
              </div>

              <div className="flex items-center justify-center text-[#A3A3A3]">
                <span className="text-xs">Powered by</span>
                <div className="flex items-center">
                <img src="/icons/neutral-removebg.png" alt="" className="h-7"/>
                <span className="text-sm font-semibold">Rails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellBitcoinSectionOne;
