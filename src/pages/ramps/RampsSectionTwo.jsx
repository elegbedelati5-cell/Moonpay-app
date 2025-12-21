import { IoIosCheckmarkCircle } from "react-icons/io";

const RampsSectionTwo = () => {
  return (
    <div className="bg-black flex flex-col lg:gap-28 gap-16">
      <img src="/images/stats-gradient.png" alt="" />
      <div className="flex lg:flex-row flex-col gap-14 lg:py-20 px-3 lg:px-0">
        <div className="flex flex-1 justify-center flex-col lg:gap-10 gap-5">
          <h1 className="text-white lg:text-5xl text-4xl leading-tight font-semibold">
            Buy crypto instantly
          </h1>
          <p className="text-[#BFBFBF] font-semibold">
            Make buying crypto feel as simple as paying online
          </p>
          <div className="flex flex-col text-[17px] gap-3 text-[#BFBFBF]">
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={35} color="#404040" /> Supports major
              payment methods: cards, bank transfers, Apple Pay, Google Pay, and
              localized options worldwide
            </p>
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={23} color="#404040" /> Buy
              cryptocurrencies like BTC, ETH, USDC, and more
            </p>
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={23} color="#404040" /> Lightning-fast
              delivery straight to the user’s wallet
            </p>
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={23} color="#404040" /> Built-in KYC,
              fraud protection, and regulatory compliance
            </p>
          </div>
          <div>
            <button className="lg:px-12 px-6 lg:py-5 py-4 bg-white text-black rounded-full hover:bg-[#fae6e6]">
              Build with Us
            </button>
          </div>
        </div>
        <div className="flex flex-1">
          <img src="/images/ramps-buy-2.png" alt="" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col-reverse gap-14 lg:px-0 px-3 lg:pt-0 pt-10">
        <div className="flex flex-1">
          <img src="/images/ramps-sell-3.png" alt="" />
        </div>
        <div className="flex flex-1 justify-center flex-col lg:gap-8 gap-5">
          <h1 className="text-white lg:text-5xl text-3xl leading-tight font-semibold pr-20 tracking-tight">
            Sell crypto & receive fiat in minutes
          </h1>
          <p className="text-[#BFBFBF] lg:text-2xl tracking-tighter font-semibold">
            Give users a clear path back to cash.
          </p>
          <div className="flex flex-col text-[17px] gap-3 text-[#BFBFBF]">
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={23} color="#404040" /> Sell
              cryptocurrencies like BTC, ETH, USDC and more
            </p>
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={23} color="#404040" /> Global coverage
              across 40+ payout regions
            </p>
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={23} color="#404040" /> Receive fiat
              through fast bank transfers or card payouts, depending on region
            </p>
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={23} color="#404040" /> New revenue
              stream through transparent fee sharing
            </p>
            <p className="flex gap-2 lg:text-base text-sm">
              <IoIosCheckmarkCircle size={23} color="#404040" /> High
              transaction limits and smooth verification flows
            </p>
          </div>
          <div>
            <button className="lg:px-12 px-6 lg:py-5 py-4 bg-white text-black rounded-full hover:bg-[#fae6e6]">
              Build with Us
            </button>
          </div>
        </div>
      </div>
      <img src="/images/business-bottom-gradient.png" alt="" />
    </div>
  );
};
export default RampsSectionTwo;
