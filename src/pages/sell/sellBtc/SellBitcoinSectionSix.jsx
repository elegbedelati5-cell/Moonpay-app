import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const SellBitcoinSectionSix = () => {
  return (
    <div className="bg-black lg:rounded-t-4xl rounded-t-3xl">
      <div className="container lg:py-24 py-14 md:px-10 lg:px-0 px-4 flex flex-col text-white gap-20">
        <h3 className="lg:text-5xl text-[22px] font-semibold tracking-tight leading-tight ">
          Need some help before swapping ETH?
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-1">
          <div className="col-span-1 bg-[#1A1A1A] rounded-4xl flex flex-col">
            <img src="/images/learn-section-asset.png" alt="" />
            <div className="flex flex-col lg:py-10 py-5 lg:px-10 px-4 gap-3">
              <h3 className="lg:text-2xl text-lg font-semibold">
                Starting in Crypto: NFTs and Web3 Trends
              </h3>
              <p className="flex items-center justify-center gap-5 text-[#A3A3A3] font-semibold lg:text-[14.5px] text-[13px]">
                Learn all about crypto swaps and NFTs, and discover what’s
                trending in the budding world of Web3.
                <Link className="bg-[#313131] px-3 flex items-center rounded-xl">
                  <MdArrowOutward size={50} color="white" />
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-1 bg-[#1A1A1A] rounded-4xl">
            <img src="/images/help-asset.png" alt="" />
            <div className="flex flex-col lg:py-10 py-5 lg:px-10 px-4 lg:gap-10 gap-3">
              <h3 className="lg:text-2xl text-lg font-semibold">Help Center</h3>
              <p className="flex items-center justify-center gap-5 text-[#A3A3A3] font-semibold lg:text-[14.5px] text-[13px]">
                Find all the answers to your MoonPay questions and start
                swapping cryptocurrency with confidence.
                <Link className="bg-[#313131] px-3 flex items-center rounded-xl">
                  <MdArrowOutward size={50} color="white" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellBitcoinSectionSix;
