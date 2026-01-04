import { useState } from "react";
import { FAQsBitcoin, swapPair, swapPairs } from "../../../utils/data";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";

const SellBitcoinSectionFive = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [showMoreFAQs, setShowMoreFAQs] = useState(null);

  const handleShowMoreFAQs = (index) => {
    setShowMoreFAQs(showMoreFAQs === index ? null : index);
  };
  const [showMoonpayScan, setShowMoonpayScan] = useState(false);

  const handleOpenScan = () => {
    setShowMoonpayScan(true);
  };
  const handleCloseScan = () => {
    setShowMoonpayScan(false);
  };

  return (
    <div className=" bg-[#F9F8FB] pb-1">
      <div className="bg-white lg:py-20 py-12 rounded-4xl">
        <div className="flex flex-col gap-20 ">
          <div className="container px-3 md:px-10 lg:px-0">
            <div className="flex flex-col gap-20 lg:mt-10">
              <p className="lg:text-[33px] text-xl leading-tight font-semibold tracking-tighter">
                Sell 120+ cryptocurrencies, including Bitcoin, Ethereum, and
                more.
              </p>
              <div className="border-t-[1px] border-[#D4D4D4] w-full flex"></div>
            </div>
            <div>
              <Link>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1">
                  {swapPairs.map((element) => (
                    <div
                      className="col-span-1 flex items-center gap-3 p-5 rounded-2xl"
                      key={element.id}
                    >
                      <img src={element.coverImage} alt="" className="w-10" />
                      <h4 className="font-semibold text-[14px]">
                        {element.title}
                      </h4>
                      <p className="font-semibold text-[#737373]">
                        {element.content}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
              {showMore && (
                <Link>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1">
                    {swapPair.map((element) => (
                      <div
                        className="col-span-1 flex items-center gap-3 p-5 rounded-2xl"
                        key={element.id}
                      >
                        <img src={element.coverImage} alt="" className="w-10" />
                        <h4 className="font-semibold text-[14px]">
                          {element.title}
                        </h4>
                        <p className="font-semibold text-[#737373]">
                          {element.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </Link>
              )}

              <div className="flex items-center justify-center mt-6">
                <button
                  onClick={handleShowMore}
                  className="flex items-center font-bold  hover:bg-[#E4E4E4] px-3 py-1 hover:rounded-lg"
                >
                  {" "}
                  {showMore ? "Show Less Assets" : "Show All Assets"}
                  {showMore ? (
                    <MdArrowDropUp size={25} />
                  ) : (
                    <MdArrowDropDown size={25} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:h-[700px] md:h-[680px] h-[500px] rounded-3xl bg-cover bg-center shadow-inner">
            <div
              className="relative h-full bg-cover bg-center shadow-inner"
              style={{ backgroundImage: "url('/images/Get the App-3.png')" }}
            >
              <div
                className="absolute inset-0 flex flex-col md:items-center lg:items-center justify-center lg:gap-8 gap-5 lg:top-1/2 top-40
               lg:left-3/12 md:left-3/12 left-[70px] transform -translate-x-1/6 lg:-translate-y-1/2 
               -translate-y-1/4 text-white text-center drop-shadow-lg z-10"
              >
                <h3 className="font-semibold text-left md:text-center lg:text-center lg:text-[45px] text-[25px] leading-tight">
                  Get the MoonPay app and swap crypto wherever, whenever
                </h3>
                <p className="lg:text-xl text-[14px] text-left md:text-center lg:text-center font-semibold md:px-16 lg:px-48 text-[#DCD7D4]">
                  Whether you're an experienced trader or swapping crypto for
                  the first time, the MoonPay app gives you the tools to get it
                  done.
                </p>
                <button
                  onClick={handleOpenScan}
                  className="mt-5 px-5 py-4 lg:w-[20%] md:w-[30%]  w-[60%] bg-white text-black font-bold rounded-xl hover:bg-[#D5D5D5] cursor-pointer"
                >
                  Get MoonPay app
                </button>
              </div>
            </div>
          </div>

          {showMoonpayScan && (
            <>
              <div className="fixed inset-0 bg-black/15 backdrop-blur-md z-40 w-screen md:max-h-[1300px] max-h-[800px]" />
              <div className="fixed inset-0 flex items-center justify-center z-50 lg:max-h-[500px] md:max-h-[1000px] max-h-[650px] lg:top-6 top-16">
                <div className="bg-black text-white rounded-3xl lg:p-5 py-10 w-[90%] max-w-[620px] text-center">
                  <h2 className="lg:text-5xl md:text-5xl text-3xl font-semibold mb-6 leading-tight">
                    Get the MoonPay App
                  </h2>
                  <img
                    src="/images/app-download-qr-code.svg"
                    alt="QR Code"
                    className="mx-auto mb-4 w-64 h-64"
                  />
                  <p className="text-[#BFBFBF] font-semibold md:text-xl lg:text-xl">
                    Scan the QR code to download the app
                  </p>
                  <button
                    onClick={handleCloseScan}
                    className="mt-6 px-5 py-2 bg-white hover:bg-white/30 text-black rounded-xl font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="container flex flex-col gap-10 md:px-10 lg:px-0 px-3">
            <h2 className="lg:text-5xl text-[25px] font-semibold leading-tight lg:pr-52 pr-12">
              Frequently asked questions about selling Bitcoin
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-1">
              {FAQsBitcoin.map((faq, index) => (
                <div
                  key={index}
                  className="col-span-1 bg-[#F9F8F5] hover:bg-[#F1F0ED] rounded-[50px] px-7 md:py-8 lg:py-8 py-5 flex flex-col gap-8"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleShowMoreFAQs(index)}
                  >
                    <h3 className="font-semibold lg:text-base text-sm">
                      {faq.question}
                    </h3>
                    <div className="flex gap-3 bg-white rounded-full py-2 px-2">
                      <IoIosAdd size={20} />
                      <RiSubtractLine size={20} />
                    </div>
                  </div>
                  {showMoreFAQs === index && (
                    <div className="overflow-hidden transition-all duration-1000 ease-in-out">
                      <p className="text-[#737373] font-semibold text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellBitcoinSectionFive;
