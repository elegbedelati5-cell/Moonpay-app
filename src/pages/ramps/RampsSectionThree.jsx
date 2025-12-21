import { AiOutlineSecurityScan } from "react-icons/ai";
import { MdOutlineSpeed } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { VscSourceControl } from "react-icons/vsc";

const RampsSectionThree = () => {
  return (
    <div className="bg-[#F9F8FB] flex flex-col ">
      <div className="containerr flex flex-col gap-16 py-20">
        <div className="flex flex-col items-center justify-center text-6xl tracking-tight leading-tight font-semibold">
          <h2>Global coverage.</h2>
          <h2>Easy integration.</h2>
          <h2>Trusted infrastructure.</h2>
        </div>
        <div className="flex gap-2.5">
          <div className="bg-white flex flex-1 flex-col rounded-2xl p-5 gap-10">
            <TbWorld size={50} className="bg-[#F5F5F5] rounded-2xl p-2" />
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-2xl">Global reach</h5>
              <p className="text-[#4D4D4D]">
                Operate in 160+ countries with local payment methods and major
                fiat currencies, so users can pay the way they already do. Reach
                new markets without stitching together local banking partners.
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-1 flex-col rounded-2xl p-5 gap-10">
            <MdOutlineSpeed
              size={50}
              className="bg-[#F5F5F5] rounded-2xl p-2"
            />
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-2xl">Rapid integration</h5>
              <p className="text-[#4D4D4D]">
                Add on and offramps with a widget, SDK or API in minutes, not
                months. Integrate once and keep the same setup as volumes and
                regions grow.
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-1 flex-col rounded-2xl p-5 gap-10">
            <AiOutlineSecurityScan size={50} className="bg-[#F5F5F5] rounded-2xl p-2" />
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-2xl">Compliance covered</h5>
              <p className="text-[#4D4D4D]">
                MoonPay handles compliance, fraud checks, chargebacks and
                licensing in the background. You reduce risk and avoid building
                heavy fraud and compliance infrastructure in-house.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-1 flex-col rounded-2xl p-5 gap-10">
            <VscSourceControl size={50} className="bg-[#F5F5F5] rounded-2xl p-2" />
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-2xl">End-to-end ramps</h5>
              <p className="text-[#4D4D4D]">
                Support the full journey, from first crypto purchase to cash
                out. Users move from fiat to crypto and back again through one
                consistent flow inside your product.
              </p>
            </div>
          </div>
        </div>
         <div className="flex justify-center items-center">
          <button className="bg-black text-white px-10 py-5 rounded-full text-sm">Get Started</button>
        </div>
      </div>

      <div className="containerr flex flex-col py-24 gap-16">
        <div className="flex flex-col justify-center items-center gap-6">
          <h3 className="text-6xl tracking-tight leading-tight font-semibold">How it works</h3>
          <p className="text-[#4C4B4C] text-xl font-semibold tracking-tight">Fast to launch. Easy to scale.</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex w-[1150px] gap-2">
            <div className="flex flex-1 flex-col rounded-4xl bg-white">
                <img src="/images/ramps-how-1-2x-m.png" alt="" className=" h-72"/>
                <div className="flex flex-col px-7 py-10 gap-2">
                  <h4 className="font-bold text-2xl">Account Setup</h4>
                  <p className="text-[#4C4B4C]">Create a MoonPay account and access your API keys.</p>
                </div>
            </div>
            <div className="flex flex-1 flex-col rounded-4xl bg-white">
                  <img src="/images/ramps-how-2-2x-m.png" alt="" className="h-72"/>
                 <div className="flex flex-col px-7 py-10 gap-2">
                  <h4 className="font-bold text-2xl">Embed & integrate</h4>
                  <p className="text-[#4C4B4C]">Embed the MoonPay widget, use the SDK or integrate via API</p>
                </div>
            </div>
          </div>
           <div className="flex w-[1150px] gap-2">
            <div className="flex flex-1 flex-col rounded-4xl bg-white">
                <img src="/images/ramps-how-3-2x-m.png" alt="" className=" h-72"/>
                <div className="flex flex-col px-7 py-10 gap-2">
                  <h4 className="font-bold text-2xl">Brand customization</h4>
                  <p className="text-[#4C4B4C]">Customize the experience to fit your brand and user flow.</p>
                </div>
            </div>
            <div className="flex flex-1 flex-col rounded-4xl bg-white">
                  <img src="/images/ramps-how-4-2x-m.png" alt="" className="h-72"/>
                 <div className="flex flex-col px-7 py-10 gap-2">
                  <h4 className="font-bold text-2xl">Go live</h4>
                  <p className="text-[#4C4B4C]">Go live and offer instant on and offramping to users worldwide.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RampsSectionThree;
