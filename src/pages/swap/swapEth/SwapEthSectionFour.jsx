import { useState } from "react";
import { IoIosCloseCircle, IoMdCloseCircle } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SiTrustpilot } from "react-icons/si";
import { ethReviews } from "../../../utils/data";

const SwapEthSectionFour = () => {
  const [showMoonpayScan, setShowMoonpayScan] = useState(false);

  const handleOpenScan = () => {
    setShowMoonpayScan(true);
  };
  const handleCloseScan = () => {
    setShowMoonpayScan(false);
  };

  return (
    <div className=" bg-[#F9F8FB] pb-1">
      <div className="bg-white lg:py-20 py-12 flex flex-col gap-24 rounded-4xl">
        <div className="container px-3 md:px-10 lg:px-0 flex flex-col gap-10">
          <div className="flex flex-col w-full gap-3">
            <h4 className="lg:text-5xl text-2xl font-semibold tracking-tighter leading-tight">
              Fast, low-cost crypto exchange at your fingertips
            </h4>
            <p className="lg:w-1/2 lg:text-xl font-semibold text-[#737373]">
              We're here to help 24 hours a day, 7 days a week. We also have a
              vast library of educational articles that demystify crypto
              exchanges, Bitcoin, blockchain, and more.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1">
            <div className="lg:col-span-2 md:col-span-2 col-span-1 bg-[#F9F8F5] flex lg:flex-row md:flex-row flex-col items-center rounded-xl md:gap-0 lg:gap-0 gap-10">
              <img
                src="/images/help 24-7.png"
                alt=""
                className="flex flex-1 md:p-10 lg:p-10 py-10"
              />
              <div className="flex flex-col flex-1 md:pr-10 lg:pr-10 gap-4 px-3 lg:px-0">
                <h3 className="lg:text-2xl font-semibold">
                  Help that's there when you need it
                </h3>
                <p className="text-[#A3A3A3] font-semibold text-[15px] md:tracking-tighter">
                  We're here to help 24 hours a day, 7 days a week. We also have
                  a vast library of educational articles that demystify crypto
                  exchanges, Bitcoin, blockchain, and more.
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-xl bg-[#F9F8F5] ">
              <img src="/images/balance.png" alt="" className="lg:p-10 md:p-10" />
              <div className="flex flex-col gap-4 lg:px-10 md:px-10 px-3 lg:pt-0 md:pt-0 pt-20 py-5 lg:py-0">
                <h3 className="text-2xl font-semibold">Multi-wallet support</h3>
                <p className="text-[#A3A3A3] font-semibold text-[15px]">
                  Exchange Ethereum cross-chain and across different wallets.
                  It’s all there, in one platform.
                </p>
              </div>
            </div>
            <div className="col-span-1 rounded-xl bg-[#F9F8F5] pb-10">
              <img
                src="/images/3. Config.png"
                alt=""
                className="lg:p-10 md:p-10 p-5 py-12"
              />
              <div className="flex flex-col gap-4 lg:px-10 md:px-10 px-3">
                <h3 className="text-2xl font-semibold">No processing fees</h3>
                <p className="text-[#A3A3A3] md:text-xs font-semibold text-[15px]">
                  We work closely with liquidity partners and trading platforms
                  to swap crypto like ETH at competitive market rates with no
                  processing fees (network fees apply).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:h-[700px] md:h-[650px] h-[500px] rounded-3xl bg-cover bg-center shadow-inner">
          <div
            className="relative h-full bg-cover bg-center shadow-inner"
            style={{ backgroundImage: "url('/images/Get the App-3.png')" }}
          >
            <div
              className="absolute inset-0 flex flex-col lg:items-center md:items-center justify-center lg:gap-8 gap-5 lg:top-1/2 top-40
               lg:left-3/12 md:left-3/12 left-[70px] transform -translate-x-1/6 md:-translate-y-1/8 lg:-translate-y-1/2 
               -translate-y-1/4 text-white text-center drop-shadow-lg z-10"
            >
              <h3 className="font-semibold text-left lg:text-center md:text-center lg:text-[45px] text-[25px] leading-tight">
                Get the MoonPay app and swap crypto wherever, whenever
              </h3>
              <p className="lg:text-xl text-[14px] text-left md:text-center lg:text-center font-semibold lg:px-48 text-[#DCD7D4]">
                Whether you're an experienced trader or swapping crypto for the
                first time, the MoonPay app gives you the tools to get it done.
              </p>
              <button
                onClick={handleOpenScan}
                className="mt-5 px-5 py-4 lg:w-[20%] md:w-[30%] w-[55%] bg-white text-black font-bold rounded-xl hover:bg-[#D5D5D5] cursor-pointer"
              >
                Get MoonPay app
              </button>
            </div>
          </div>
        </div>

        {showMoonpayScan && (
          <>
            <div className="fixed inset-0 bg-black/15 backdrop-blur-md z-40 w-screen max-h-[800px] md:max-h-[1300px]" />
            <div className="fixed inset-0 flex items-center justify-center z-50 max-h-[500px] md:max-h-[1000px] top-6">
              <div className="bg-black text-white rounded-3xl p-5 w-[90%] max-w-[620px] text-center">
                <h2 className="text-5xl font-semibold mb-6 leading-tight">
                  Get the MoonPay App
                </h2>
                <img
                  src="/images/app-download-qr-code.svg"
                  alt="QR Code"
                  className="mx-auto mb-4 w-64 h-64"
                />
                <p className="text-[#BFBFBF] font-semibold text-xl">
                  Scan the QR code to download the app
                </p>
                <button
                  onClick={handleCloseScan}
                  className="mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}

        <div className="container flex flex-col lg:px-0 md:px-10 px-3">
          <div className="flex flex-col gap-3">
            <h3 className="lg:text-5xl text-2xl leading-tight font-semibold">
              See what our customers say
            </h3>
            <p className="lg:w-1/2 lg:text-[19px] text-[15px] text-[#7D7D7D] font-semibold">
              Users worldwide choose MoonPay to exchange cryptocurrencies. With
              over 93,000 reviews on TrustPilot, our average score is 4.3 out of
              5.
            </p>
            <div className="flex items-center gap-3 py-10">
              <div className="p-3 rounded-xl bg-[#E2E8F0] cursor-pointer">
                <SiTrustpilot size={32} color="#10B981" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">TrustScore 4.0</p>
                <p className="text-[12px] text-[#64748b]">102k Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex gap-3 w-max reviews">
            {[...ethReviews, ...ethReviews].map((reviews, i) => (
              <div className="flex gap-1" key={i}>
                <div className="flex flex-col justify-end bg-[#F9F8F5] lg:max-w-[420px] max-w-[350px] p-9 gap-10 rounded-3xl lg:h-full h-10/12">
                  <p className="lg:text-xl text-lg text-[#2A2A2A] font-semibold">
                    {reviews.content}
                  </p>
                  <div className="flex flex-col gap-1 text-[#737373] font-semibold">
                    <span>{reviews.name}</span>
                    <span className="flex gap-1.5 items-center">
                      <RiVerifiedBadgeFill size={20} color="#059669" />{" "}
                      {reviews.title}
                    </span>
                  </div>
                </div>
                <img
                  src={reviews.coverImage}
                  alt=""
                  className="rounded-3xl lg:h-full h-10/12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwapEthSectionFour;
