import { SiTrustpilot } from "react-icons/si";

const SwapEthSectionOne = () => {
  return (
    <div className="bg-[#F9F8FB] pb-1">
      <div className="bg-white px-3 lg:px-0 lg:pt-44 py-12 lg:pb-20 rounded-4xl">
        <div className="container flex flex-col md:gap-6 gap-3">
          <div className="md:flex md:justify-center md:items-center">
            <img src="/images/ethereum-2.svg" alt="" className="h-12" />
          </div>
          <h1 className="font-semibold md:text-center lg:text-[56px] text-3xl leading-tight tracking-tight">
            Swap Ethereum seamlessly.
          </h1>
          <p className="text-[#737373] md:text-center lg:text-base text-[13px] font-semibold">
            Swap Ethereum quickly and securely, across multiple chains and
            wallets. It's all there in your MoonPay account.
          </p>
          <div className="flex items-center gap-4 mt-5 lg:mt-9 md:px-10">
            <div className="flex gap-2 items-center">
              <img
                src="/images/apple.png"
                alt=""
                className="lg:h-5 h-7 rounded-full"
              />
              <h4 className="font-bold">4.4 ★ on App Store</h4>
            </div>
            <div className="border-l-[1px] border-[#D4D4D4] h-[30px] flex"></div>
            <div className="flex gap-2 items-center">
              <img
                src="/images/playstore.png"
                alt=""
                className="lg:h-5 h-7 rounded-full"
              />
              <h4 className="font-bold">4.5 ★ on Google Play</h4>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col py-4 gap-2 md:items-center md:justify-center lg:items-center mt-5">
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
      </div>
    </div>
  );
};
export default SwapEthSectionOne;
