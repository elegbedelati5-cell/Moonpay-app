import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const BusinessSectionFour = () => {
  const [hovered, setHovered] = useState(false);
  const [showBitcoinPage, setShowBitcoinPage] = useState(true);
  const [showPhantomPage, setShowPhantomPage] = useState(false);
  const [showLedgerPage, setShowLedgerPage] = useState(false);

  const handleOpenHover = () => {
    setHovered(true);
  };
  const handleCloseHover = () => {
    setHovered(false);
  };

  const handleShowBitcoinPage = () => {
     setShowBitcoinPage(true);
  setShowPhantomPage(false);
  setShowLedgerPage(false);
  };

  const handleShowPhantomPage = () => {
     setShowBitcoinPage(false);
  setShowPhantomPage(true);
  setShowLedgerPage(false);
  };

  const handleShowLedgerPage = () => {
    setShowBitcoinPage(false);
  setShowPhantomPage(false);
  setShowLedgerPage(true);
  };
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col container items-center justify-center gap-20">
        <div className="flex flex-col items-center  gap-7 text-center">
          <h2 className="text-4xl tracking-tighter px-64">
            <b>Crypto was designed to go beyond borders</b>
          </h2>
          <p className="text-lg text-[#555555] px-56">
            And our on-ramp is no exception. We can help your wallet operate in
            more places around the world.
          </p>
        </div>
        <div className="flex items-center justify-evenly gap-10">
          <div className="bg-[#EFF3F9] flex flex-col rounded-2xl px-7 py-14 border-[1px] border-[#c9c7c7] items-center justify-center hover:bg-white hover:shadow-2xl">
            <h2 className="text-[64px] text-[#7715F5] font-semibold">30+</h2>
            <p className="">Supported Fiat Currencies</p>
          </div>

          <div className="bg-[#EFF3F9] flex flex-col rounded-2xl px-6 py-14 border-[1px] border-[#c9c7c7] items-center justify-center">
            <h2 className="text-[64px] text-[#7715F5] font-semibold">110+</h2>
            <p className="">Supported Cryptocurrencies</p>
          </div>

          <div className="bg-[#EFF3F9] flex flex-col rounded-2xl px-12 py-14 border-[1px] border-[#c9c7c7] items-center justify-center">
            <h2 className="text-[64px] text-[#7715F5] font-semibold">160+</h2>
            <p className="">Supported Countries</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className=" w-full rounded-3xl h-[500px]">
          <div
            className="relative h-full bg-cover bg-center shadow-inner"
            style={{ backgroundImage: "url('/images/360_F.jpg')" }}
          >
            <div className="absolute inset-0 flex flex-col gap-5 lg:top-72 top-1/3 lg:left-1/2 left-1/3 transform lg:-translate-x-1/2 -translate-x-1/4 lg:-translate-y-1/2 -translate-y-1/4 text-white text-center drop-shadow-lg z-10">
              <h3 className="font-semibold text-3xl">
                Learn more about our products
              </h3>
              <p className="text-lg">
                Tell us more about your project, and we'll help you with your
                crypto onramp and offramp needs
              </p>
            </div>
            <button className="absolute flex top-80 items-center justify-center py-3 mt-5 mx-[555px] bg-white rounded-lg text-black px-5 cursor-pointer">
              Talk to us
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center font-semibold gap-7">
          <span className="text-2xl">Testimonials</span>
          <h2 className="text-4xl">Hear from our partners</h2>
        </div>
        {showBitcoinPage && (
          <div className="grid grid-cols-2 justify-center items-center pt-32 pr-32 gap-10 px-5">
            <div className=" col-span-1 w-[510px] px-10 pt-20 h-[400px] rounded-2xl bg-gradient-to-b from-0% to-100% from-[#f7f4f6] to-[#7d3abc] flex flex-col">
              {hovered && (
                <div className="bg-white rounded-t-2xl flex flex-col mx-10 gap-3 px-6 py-3 h-[40%] w-[80%]">
                  <span>Revenue</span>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0">
                      <FaDollarSign size={30} />
                      <FaDollarSign size={30} />
                      <FaDollarSign size={30} />
                    </div>
                    <div className="flex bg-[#F5EBFF] text-[#7715F5] font-bold rounded-full px-2 items-center">
                      <FiArrowUp />
                      <span className="">500%</span>
                    </div>
                  </div>
                </div>
              )}
              <img
                src="/images/Bitcoin.com.png"
                alt=""
                onMouseEnter={handleOpenHover}
                onMouseLeave={handleCloseHover}
                className={`transition-all duration-300 h-full flex items-center justify-center relative${
                  hovered ? "scale-125 blur-xs" : "scale-100"
                }`}
              />
            </div>

            <div className="flex flex-col flex-1 gap-6">
              <h3 className="text-2xl font-semibold tracking-tight">
                Increased revenue by over 500% after integrating MoonPay’s
                global payments solution.
              </h3>
              <p className="text-[16.5px]">
                “MoonPay’s payments solution has been instrumental in growing
                revenues at Bitcoin.com. Their product is not only built with
                the user experience in mind — for merchants, it is safe, fast,
                and highly scalable.”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/dennispng.png"
                  alt=""
                  className="h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <span>Dennis Jarvis, CEP</span>
                  <span className="text-[#94A3B8]">Bitcoin.com</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {showPhantomPage && (
          <div className="grid grid-cols-2 justify-center items-center pt-32 pr-32 gap-10 px-5">
            <div className=" col-span-1 w-[510px] px-10 pt-20 h-[400px] rounded-2xl bg-gradient-to-b from-0% to-100% from-[#f7f4f6] to-[#7d3abc] flex flex-col">
              {hovered && (
                <div className="bg-white rounded-t-2xl flex flex-col mx-10 gap-3 px-6 py-3 h-[40%] w-[80%]">
                  <span>Revenue</span>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0">
                      <FaDollarSign size={30} />
                      <FaDollarSign size={30} />
                      <FaDollarSign size={30} />
                    </div>
                    <div className="flex bg-[#F5EBFF] text-[#7715F5] font-bold rounded-full px-2 items-center">
                      <FiArrowUp />
                      <span className="">500%</span>
                    </div>
                  </div>
                </div>
              )}
              <img
                src="/images/phantom.png"
                alt=""
                onMouseEnter={handleOpenHover}
                onMouseLeave={handleCloseHover}
                className={`transition-all duration-300 h-full flex items-center justify-center relative${
                  hovered ? "scale-125 blur-xs" : "scale-100"
                }`}
              />
            </div>

            <div className="flex flex-col flex-1 gap-6">
              <h3 className="text-2xl font-semibold tracking-tight">
                Choosing MoonPay has been a great decision for us.
              </h3>
              <p className="text-[16.5px]">
                The product’s excellence has led to an amazing shift in how we
                onboard new users and help them fund their wallets. Seamlessly
                integrating it into our workflow was a breeze, and the support
                team’s prompt and effective solutions have been a constant
                reassurance.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/hmjpeg.jpeg"
                  alt=""
                  className="h-14 rounded-full"
                />
                  <span>The Phantom Team</span>
              </div>
            </div>
          </div>
        )}

        {showLedgerPage && (
          <div className="grid grid-cols-2 justify-center items-center pt-32 pr-32 gap-10 px-5">
            <div className=" col-span-1 w-[510px] px-10 pt-20 h-[400px] rounded-2xl bg-gradient-to-b from-0% to-100% from-[#f7f4f6] to-[#7d3abc] flex flex-col">
              {hovered && (
                <div className="bg-white rounded-t-2xl flex flex-col mx-10 gap-3 px-6 py-3 h-[40%] w-[80%]">
                  <span>Revenue</span>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0">
                      <FaDollarSign size={30} />
                      <FaDollarSign size={30} />
                      <FaDollarSign size={30} />
                    </div>
                    <div className="flex bg-[#F5EBFF] text-[#7715F5] font-bold rounded-full px-2 items-center">
                      <FiArrowUp />
                      <span className="">500%</span>
                    </div>
                  </div>
                </div>
              )}
              <img
                src="/images/wledger.png"
                alt=""
                onMouseEnter={handleOpenHover}
                onMouseLeave={handleCloseHover}
                className={`transition-all duration-300 h-full flex items-center justify-center relative${
                  hovered ? "scale-125 blur-xs" : "scale-100"
                }`}
              />
            </div>

            <div className="flex flex-col flex-1 gap-4">
              <h3 className="text-2xl font-semibold tracking-tight">
                Right from day one, MoonPay's exceptional product surpassed our
                expectations, thanks to its seamless integration process that
                allowed us to hit the ground running effortlessly.
              </h3>
              <p className="text-[16.5px]">
              What truly sets MoonPay apart is the consistent and reliable support that accompanies this journey – quick, effective, and always there when we needed it. Their comprehensive developer website is invaluable; it provides solutions to integration challenges, making it a go-to resource. Moreover, MoonPay's responsive support team truly listens to our needs, enhancing the overall experience and making them a great partner to work with.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/public/images/t1u.webp"
                  alt=""
                  className="h-14 rounded-full"
                />
                <span>The Ledger Team</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-5 mt-6 px-5">
          <button
            onClick={() => {
              console.log("Bitcoin clicked");
              handleShowBitcoinPage();
            }}
            className={`col-span-1 bg-[#EFF3F9] px-32 py-10 rounded-2xl ${
              showBitcoinPage ? "border-2 border-[#7D00FF]" : "border-0 "
            }`}
          >
            <img src="/images/image-6.png" alt="" className="" />
          </button>

          <button
            onClick={() => {
              console.log("phantom clicked");
              handleShowPhantomPage();
            }}
            className={`col-span-1 bg-[#EFF3F9] px-32 py-10 rounded-2xl ${
              showPhantomPage ? "border-2 border-[#7D00FF]": "border-0" 
            }`}
          >
            <img src="/images/phantom.svg" alt="" className="" />
          </button>

          <button
            onClick={() => {
              console.log("ledger clicked");
              handleShowLedgerPage();
            }}
            className={`col-span-1 bg-[#EFF3F9] px-32 py-10 rounded-2xl ${
              showLedgerPage ? "border-2 border-[#7D00FF]" : "border-0"
            }`}
          >
            <img src="/images/ledger.svg" alt="" className="" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default BusinessSectionFour;
