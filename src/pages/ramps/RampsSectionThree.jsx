import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdOutlineSpeed } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { VscSourceControl } from "react-icons/vsc";

const RampsSectionThree = () => {
  return (
    <div className="bg-[#F9F8FB] flex flex-col ">
      <div className="containerr lg:px-0 px-5 flex flex-col lg:gap-16 gap-10 lg:py-20 py-10">
        <div className="flex flex-col items-center justify-center lg:text-6xl text-3xl tracking-tight leading-tight font-semibold">
          <h2>Global coverage.</h2>
          <h2>Easy integration.</h2>
          <h2>Trusted infrastructure.</h2>
        </div>
        <div className="flex lg:flex-row flex-col gap-2.5">
          <div className="bg-white flex flex-1 lg:flex-col flex-row rounded-2xl p-4 lg:gap-10 gap-3">
            <TbWorld
              size={50}
              className="bg-[#F5F5F5] rounded-2xl lg:p-2 md:p-1 md:flex-1 p-2.5 flex flex-1/5"
            />
            <div className="flex flex-4/5 flex-col gap-3">
              <h5 className="font-semibold text-2xl">Global reach</h5>
              <p className="text-[#4D4D4D] lg:text-base text-[15px]">
                Operate in 160+ countries with local payment methods and major
                fiat currencies, so users can pay the way they already do. Reach
                new markets without stitching together local banking partners.
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-1 lg:flex-col flex-row rounded-2xl p-4 lg:gap-10 gap-3">
            <MdOutlineSpeed
              size={50}
              className="bg-[#F5F5F5] rounded-2xl lg:p-2 md:p-1 md:flex-1 p-2.5 flex flex-1/5"
            />
            <div className="flex flex-4/5 flex-col gap-3">
              <h5 className="font-semibold text-2xl">Rapid integration</h5>
              <p className="text-[#4D4D4D] lg:text-base text-[15px]">
                Add on and offramps with a widget, SDK or API in minutes, not
                months. Integrate once and keep the same setup as volumes and
                regions grow.
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-1 lg:flex-col flex-row rounded-2xl p-4 lg:gap-10 gap-3">
            <AiOutlineSecurityScan
              size={50}
              className="bg-[#F5F5F5] rounded-2xl lg:p-2 md:p-1 md:flex-1 p-2.5 flex flex-1/5"
            />
            <div className="flex flex-4/5 flex-col gap-3">
              <h5 className="font-semibold text-2xl">Compliance covered</h5>
              <p className="text-[#4D4D4D] lg:text-base text-[15px]">
                MoonPay handles compliance, fraud checks, chargebacks and
                licensing in the background. You reduce risk and avoid building
                heavy fraud and compliance infrastructure in-house.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-1 lg:flex-col flex-row rounded-2xl p-4 lg:gap-10 gap-3">
            <VscSourceControl
              size={50}
              className="bg-[#F5F5F5] rounded-2xl lg:p-2 md:p-1 md:flex-1 p-2.5 flex flex-1/5"
            />
            <div className="flex flex-4/5 flex-col gap-3">
              <h5 className="font-semibold text-2xl">End-to-end ramps</h5>
              <p className="text-[#4D4D4D] lg:text-base text-[15px]">
                Support the full journey, from first crypto purchase to cash
                out. Users move from fiat to crypto and back again through one
                consistent flow inside your product.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-black text-white lg:px-10 px-7 py-5 rounded-full text-sm">
            Get Started
          </button>
        </div>
      </div>

      <div className="containerr flex flex-col lg:px-0 px-5 lg:py-24 py-10 gap-16">
        <div className="flex flex-col justify-center items-center gap-6">
          <h3 className="lg:text-6xl text-4xl tracking-tight leading-tight font-semibold">
            How it works
          </h3>
          <p className="text-[#4C4B4C] lg:text-xl font-semibold tracking-tight">
            Fast to launch. Easy to scale.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex lg:flex-row flex-col lg:w-[1150px] gap-2">
            <div className="flex flex-1 flex-col rounded-4xl bg-white">
              <img
                src="/images/ramps-how-1-2x-m.png"
                alt=""
                className=" lg:h-72"
              />
              <div className="flex flex-col lg:px-7 px-5 lg:py-10 py-7 gap-2">
                <h4 className="font-bold lg:text-2xl">Account Setup</h4>
                <p className="text-[#4C4B4C] lg:text-base text-[15px]">
                  Create a MoonPay account and access your API keys.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-4xl bg-white">
              <img
                src="/images/ramps-how-2-2x-m.png"
                alt=""
                className="lg:h-72"
              />
              <div className="flex flex-col lg:px-7 px-5 lg:py-10 py-7 gap-2">
                <h4 className="font-bold lg:text-2xl">Embed & integrate</h4>
                <p className="text-[#4C4B4C] lg:text-base text-[15px]">
                  Embed the MoonPay widget, use the SDK or integrate via API
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:w-[1150px] gap-2">
            <div className="flex flex-1 flex-col rounded-4xl bg-white">
              <img
                src="/images/ramps-how-3-2x-m.png"
                alt=""
                className=" h-72 md:h-[450px]"
              />
              <div className="flex flex-col lg:px-7 px-5 lg:py-10 py-7 gap-2">
                <h4 className="font-bold lg:text-2xl">Brand customization</h4>
                <p className="text-[#4C4B4C] lg:text-base text-[15px]">
                  Customize the experience to fit your brand and user flow.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-4xl bg-white">
              <img src="/images/ramps-how-4-2x-m.png" alt="" className="h-72 md:h-[450px]" />
              <div className="flex flex-col lg:px-7 px-5 lg:py-10 py-7 gap-2">
                <h4 className="font-bold text-2xl">Go live</h4>
                <p className="text-[#4C4B4C] lg:text-base text-[15px]">
                  Go live and offer instant on and offramping to users
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RampsSectionThree;
