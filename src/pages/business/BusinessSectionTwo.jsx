import { FaCircleExclamation } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";

const BusinessSectionTwo = () => {
  return (
    <div className="flex flex-col lg:items-center lg:justify-center gap-12 px-5 lg:px-0">
      <div className="container flex flex-col gap-7 items-center lg:px-54">
        <h1 className=" flex flex-col text-4xl  font-semibold leading-tight tracking-tight items-center lg:text-left text-center">
          One small snippet of code to help you{" "}
          <span className="text-[#7D00FF] text-[39px]">scale your business quickly.</span>
        </h1>
        <p className="text-[#555555] lg:text-xl text-lg text-center">
          Our on-ramp can be integrated into your app or website in 10 minutes —
          see for yourself.
        </p>
        <div className="flex items-center gap-3 bg-[#F0F0F0] px-7 py-2 rounded-full mt-10">
          <span className="text-[#7D00FF] text-[11px] lg:text-base">npm install --save @moonpay/react-native-moonpay-sdk</span> 
          <button className="lg:flex hidden items-center gap-2 bg-white px-6 py-3 rounded-full cursor-pointer hover:bg-[#f0ebeb]">Copy <TbCopy /></button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-5 py-10 gap-10">
        <div className="lg:col-span-2 col-span-1 flex flex-col gap-3 bg-[#1A1C20] rounded-2xl px-7 py-5">
            <div className="flex text-white items-center justify-between">
                <span className="text-sm text-[#c2c2c2]">Javascript</span>
                <div className="flex gap-5">
                    <button className="px-3 py-3 bg-[#26282B] rounded-full">Test mode</button>
                    <button>Live mode</button>
                </div>
            </div>
            <div className="bg-[#282C34] rounded-xl p-4 flex flex-col gap-4">
              <div className="">
             <p className="text-[#ABB2BF] text-sm flex gap-2"><b className="text-[#C678DD]">import </b> (View, Button, Text)  <b className="text-[#C678DD]">from </b> <b className="text-[#98C370]">'react-native'</b>;</p>
              <p className="text-[#ABB2BF] text-sm flex gap-2"><b className="text-[#C678DD]">import </b> (useMoonPaySdk)  <b className="text-[#C678DD]">from </b> <b className="text-[#98C370]">'@moonpay/react-native-moonpay-sdk'</b>;</p>
            </div>

            <div className="flex flex-col text-sm text-[#ABB2BF] pb-14">
                <p className=""><b className="text-[#C678DD]">const</b> YourComponent = () = ()</p>
                 <p className="pl-5 tracking-wide"><b className="text-[#C678DD]">const</b> (openWithInAppBrowser, generateUrlForSigning, updateSignature) =</p>
                 <span className="pl-7 "> useMoonPaySdk()</span>
                 <span className=" pl-10"> <b className="text-[#D19A66]">flow</b> : <b className="text-[#98C370]"> 'buy'</b>,</span>
                 <span className=" pl-10"><b className="text-[#D19A66]">environment</b>: <b className="text-[#98C370]">'sandbox'</b>,</span>
                 <span className="pl-10"> <b className="text-[#D19A66]">params</b>:</span>
                 <span className="pl-14"> <b className="text-[#D19A66]">apiKey</b>:  <b className="text-[#98C370]">'pk_test_key'</b>,</span>
            </div>
            </div>
            <div className="flex lg:flex-row flex-col text-[#ABB2BF] pt-3 justify-between gap-5">
                <div className="flex items-center gap-3">
                <FaCircleExclamation size={15}/>
                <p className="text-xs">We are using your test API key as you are in sandbox mode.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-[#7D00FF] text-white px-4 py-2 rounded-full cursor-pointer hover:bg-[#6007bf]">Copy <TbCopy /></button>
            </div>
        </div>
        <img src="/images/stJ.svg" alt="" className="col-span-1 shadow-2xl rounded-2xl h-[450px]"/>
      </div>
    </div>
  );
};
export default BusinessSectionTwo;
