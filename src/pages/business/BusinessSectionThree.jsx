import { CiMenuKebab } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const BusinessSectionThree = () => {
  return (
    <div className="bg-white py-20 flex flex-col px-5 gap-10">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-10">
        <div className="lg:col-span-3 col-span-1 flex flex-col bg-[#EFF3F9] rounded-2xl px-6 lg:px-44 border-[1px] border-[#c9c7c7]">
          <div className="py-44"></div>
          <div className="flex flex-col items-center justify-center text-center gap-5">
            <span className="text-3xl font-medium tracking-tighter">
              No wallet? <b className="text-[#7715F5]">No problem </b>
            </span>
            <p className="">
              We'll help them open a BTC or ETH wallet that supports hundreds of
              assets.
            </p>
            <button className="bg-black text-white px-5 py-3 rounded-lg mb-10 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 col-span-1 rounded-2xl bg-gradient-to-b from-0% to-100% from-[#fef6fc] to-[#7d3abc] flex flex-col gap-3">
          <div className="bg-white mx-10 my-20 rounded-2xl p-5 flex flex-col gap-5 shadow-2xl">
            <h1 className="flex items-center justify-between">
              Revenue <CiMenuKebab />
            </h1>
            <div className="bg-[#F7F7F8] flex justify-between items-center rounded-full mx-1 lg:px-5 px-3">
              <span className="lg:px-10 py-2 lg:bg-[#EEE4F9] rounded-full">
                Today
              </span>
              <span>30 Days</span>
              <span>All</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-white flex flex-col text-3xl items-center font-semibold">
              Revenue sharing <span className="text-black">from the start</span>
            </h1>
            <p className="text-white text-[15.5px] px-5.5 text-center">
              You can enter your revenue sharing percentage when setting up your
              developer account.
            </p>
            <button className="bg-black text-white px-5 py-3 rounded-lg mb-10 cursor-pointer">
              Build with Us
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-10">
        <div className="bg-black lg:col-span-2 col-span-1 rounded-3xl h-[700px]">
          <div
            className="relative h-[60%] bg-cover bg-center shadow-inner"
            style={{ backgroundImage: "url('/images/cosmic.jpg')" }}
          >
            <div className="absolute inset-0 shadow-[inset_40px_0_60px_rgba(0,0,0,0.6)]"></div>
            <img
              src="/images/android.svg"
              alt=""
              className="absolute top-[60px] left-[-40px] opacity-85  "
            />
            <img
              src="/images/node.svg"
              alt=""
              className="absolute left-[350px] top-[175px]"
            />
            <img
              src="/images/ios.png"
              alt=""
              className="absolute top-[120px] left-[165px] h-28 "
            />
            <img
              src="/images/react.svg"
              alt=""
              className="absolute top-[275px] left-[200px]"
            />
          </div>
          <div className="flex flex-col p-10 justify-center items-center gap-10">
            <span className="text-white text-3xl text-center">
              We're <b className="text-[#AF6FF7]">plug and play </b>with your
              codebase
            </span>
            <button className="text-[#41197F] bg-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#cec4d6]">
              Get set up with us
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 col-span-1 rounded-2xl bg-gradient-to-b lg:h-[700px] h-[500px] from-[#000000] to-[#280355] lg:pb-0 pb-10">
          <div className="relative lg:h-[70%] h-[60%] overflow-hidden rounded-2xl">
            <video
              src="/videos/energy.mp4"
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-[60%] object-cover rotate-180"
            ></video>
            <img
              src="/images/Dashboard.png"
              alt=""
              className="absolute lg:px-10 px-5 lg:py-10 pt-10 lg:h-full h-[80%] w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center lg:gap-10 gap-8 lg:px-10">
            <p className="text-white lg:text-3xl text-2xl lg:px-28 px-20 text-center">
              You're <b className="text-[#B8FF9A]">always</b> in control with
              our dashboard
            </p>
            <button className="lg:w-[30%] w-[55%] bg-white lg:px-6 px-2 py-3 rounded-lg text-[#41197F] cursor-pointer hover:bg-[#cec4d6]">
              See our Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden bg-[#EFF3F9] rounded-3xl border-[1px] border-[#c9c7c7]">
        <div className="px-24 flex flex-col flex-2 gap-5 justify-center">
          <span className="text-3xl">
            No Chargebacks.<b className="text-[#7715F5]">Guaranteed.</b>
          </span>
          <p className="">
            We handle all the card processing, so you’ll never need to worry
            about fraud or disputes.
          </p>
        </div>

        <img
          src="/images/anti-fraud.png"
          alt=""
          className="h-[530px] flex-1/4"
        />
      </div>

      <div className="lg:grid hidden grid-cols-5 gap-7">
        <div className="col-span-2 bg-gradient-to-b from-0% to-100% from-[#7715F5] to-[#ffffff] border-[1px] border-[#ecebeb] rounded-3xl">
          <div className="my-44"></div>
          <div className="py-10 px-8 flex flex-col gap-4 items-center justify-center">
            <span className="text-3xl tracking-tight">
              Get setup in <b className="text-[#7715F5]">10 minutes</b>
            </span>
            <p className="text-center">
              Our test environment and docs make integrating with MoonPay easy.
            </p>
            <button className="bg-black p-3 rounded-lg text-white w-[30%] cursor-pointer">
              Build with Us
            </button>
          </div>
        </div>
        <div className="col-span-3 bg-[#EFF3F9] rounded-3xl flex flex-col border-[1px] border-[#c9c7c7]">
          <img src="/public/images/Better_Approval_Rates__1_.png" alt="" />
          <div className="py-10 px-28 flex flex-col gap-4 items-center justify-center">
            <span className="text-3xl tracking-tight">
              Built for <b className="text-[#7715F5]">better approval rates</b>
            </span>
            <p className="text-[#555555] text-center">
              We help more buyers successfully pay by card and complete a
              purchase.
            </p>
            <button className="bg-black p-3 rounded-lg text-white w-[30%] cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>

       <div className="lg:flex flex-col hidden items-center justify-center gap-10 bg-[#EFF3F9] rounded-3xl border-[1px] border-[#c9c7c7] py-10">
        <div className="flex gap-3 items-center justify-center">
          <h4 className="text-3xl font-semibold tracking-tighter">Check out in under</h4>
          <span className="flex gap-2 items-center justify-center rounded-full text-white bg-[#7715F5] px-2 py-1 text-2xl"><IoMdTime size={45}/> 30s</span>
        </div>
        <div className="w-full ">
             <div className="flex items-center justify-center">
               <div className="bg-[#bbbbbb] border-[1px] rounded-full py-4 w-[40%] relative">
                 <div className="bg-[#dedddd] shadow-2xl shadow-black py-2 w-full absolute top-0 left-0"></div>
                 <div className="absolute top-[-10px] bg-[#F0F3F9] rounded-b-2xl">
                         
                 </div>
               </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectionThree;
