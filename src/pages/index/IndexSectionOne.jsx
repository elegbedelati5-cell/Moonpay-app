import { SiTrustpilot } from "react-icons/si";
import { logos } from "../../utils/data";

const IndexSectionOne = () => {
  return (
    <div className="min-h-screen lg:mt-28 mt-14 pb-32 bg-white flex flex-col justify-center items-center lg:px-0 px-4">
      <div className=" flex lg:flex-row flex-col gap-20 container justify-center ">
        {/* left side */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex lg:flex-row flex-col items-center gap-3">
            <div className="flex gap-2">
              <img
                src="/images/apple.png"
                alt=""
                className="h-5 rounded-full"
              />
              <h4 className="font-bold">4.4 ★ on App Store</h4>
            </div>
            <div className="border-l-[1px] border-[#D4D4D4] h-[30px] lg:flex hidden"></div>
            <div className="lg:flex gap-2 hidden ">
              <img
                src="/images/playstore.png"
                alt=""
                className="h-5 rounded-full"
              />
              <h4 className="font-bold">4.5 ★ on Google Play</h4>
            </div>
          </div>
          <div className="flex flex-col py-5 gap-1 lg:text-left text-center">
            <h1 className="lg:text-[43px] text-[30px] font-bold">
              Your passport to crypto
            </h1>
            <p className="text-[#404040] font-bold lg:text-[18px] text-[14px] lg:px-0 px-14">
              Your universal account to buy, sell, trade and pay with crypto.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col py-4 gap-4 items-center lg:mb-20 mb-10">
            <button className="lg:px-16 px-7 lg:py-5.5 py-4 bg-black text-white rounded-4xl text-sm">
              Buy Crypto
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
          </div>
          <div className="flex-1 flex justify-end lg:hidden">
            <img
              src="/images/eng-us-hero-main.jpg"
              alt=""
              className="rounded-[30px] container"
            />
          </div>
          <div className="flex flex-col gap-6 mt-7 lg:mt-0 text-center lg:text-left">
            <p className="text-[#666666] font-bold">Trusted By</p>
            <div className="ticker-container">
              <div className="logo-track">
                {[...logos, ...logos].map((element, i) => (
                  <img
                    key={i}
                    src={element.logo}
                    alt={`logo-${i}`}
                    className="logo-item"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1 lg:flex justify-end hidden">
          <img
            src="/images/eng-us-hero-main.jpg"
            alt=""
            className="h-[470px] rounded-[50px] container"
          />
        </div>
      </div>
    </div>
  );
};

export default IndexSectionOne;
