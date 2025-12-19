import { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const GeneralFooter = () => {
  const [email, setemail] = useState();
  const [emailerrors, setemailErrors] = useState();
  const [checkbox, setbox] = useState(false)
  const [checkerrors, setboxErrors] = useState()

  const handleSubmitForm = () => {
    if (!email) {
      setemailErrors(
        <div className="flex items-center gap-1 text-pink-500 text-sm">
          <BiError size={25} />
          <span>Email is missing</span>
        </div>
      );
    } else {
      setemailErrors();
    }
  };

   const handleCheckBox = (event) => {
    const ischecked = (event.target.checked)
    setbox(ischecked)
    if (!ischecked) {
      setboxErrors(
        <div className="flex items-center gap-1 text-pink-500 text-sm">
          <BiError size={25} />
          <span>Consent Required</span>
        </div>
      );
    } else {
      setboxErrors();(event) => setbox(event.target.checked)
    }
  };
  return (
    <div className="bg-black lg:py-20 py-14">
      <div className="container flex flex-col lg:px-0 px-5">
        <div>
          <img src="/images/logo-white.png" alt="" className="h-5" />
        </div>

         <div className="flex lg:hidden lg:pt-10 pt-5">
          <p className="text-[#464646] text-[12.5px]">All rights reserved. MoonPay USA LLC is a registered money service business (NMLS ID: 2071245). For Law Enforcement requests please direct your official document to our compliance team here.</p>
        </div>

        <Link className="flex lg:hidden py-10">
          <div className="text-white flex gap-2 items-center">
             <TbWorld size={20} />
            <p>English</p>
          </div>
          </Link>

          
              <div className="flex lg:hidden flex-col w-screen max-w-[350px] gap-1">
            <div className="flex gap-2 items-center">
                <input
                  onChange={(event) => setemail(event.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#2a2a2a] text-sm text-white py-2 px-4 w-[75%] rounded-lg"
                />
                 <button
                onClick={handleSubmitForm}
                className="bg-[#2a2a2a] text-white text-sm border-2 border-[#2a2a2a] rounded-lg px-3 py-1.5 w-[25%]"
                type="submit"
              >
                Subscribe
              </button>
              </div>
              {emailerrors && <div className="">{emailerrors}</div>}
            </div>

            <div className="flex lg:hidden flex-col gap-1 pt-5">
              <div className="flex gap-4">
                <input
                  // onClick={handleCheckBox}
                  onChange={handleCheckBox}
                  type="checkbox"
                  className="bg-[#2a2a2a] text-sm text-white w-7 h-7 rounded-lg"
                />
              <p className="text-[#464646] text-[12px] lg:max-w-[50%]">Check this box to receive communications from MoonPay. You can unsubscribe at any time. We look after your data - see our <Link to="" className="underline ">privacy policy</Link>.</p>
              </div>
                {checkerrors && <div className="flex items-center gap-1">{checkerrors}</div>}
            </div>
          

        <div className="grid lg:grid-cols-4 grid-cols-1 py-10 lg:gap-5 gap-7 text-[#626262]">
          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Personal</h1>
            <div className="py-5 flex flex-col gap-5 text-[13px] font-semibold">
              <Link to="" className="hover:text-white">
                Buy Crypto
              </Link>
              <Link to="" className="hover:text-white">
                Sell Crypto
              </Link>
              <Link to="" className="hover:text-white">
                Swap Crypto
              </Link>
              <Link to="" className="hover:text-white">
                Learn about Crypto
              </Link>
              <Link to="" className="hover:text-white">
                Crypto Price
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Business</h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                On Ramps
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Off Ramps
              </Link>
              <Link
                to=""
                className="hover:text-white text-[13px] flex gap-4 items-center"
              >
                Virtual Accounts{" "}
                <span className="bg-[#7d00ff] text-[12px] text-white px-2 py-[1.5px] rounded-[5px]">
                  {" "}
                  New!
                </span>
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Moonpay Discover
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Moonpay Customers
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Company</h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                About Us
              </Link>
              <Link
                to=""
                className="hover:text-white text-[13px] flex gap-4 items-center"
              >
                Career{" "}
                <p className="bg-[#7d00ff] text-[12px] text-white px-2 py-[1.5px] rounded-[5px]">
                  We're Hiring
                </p>
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                News Room
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Media
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Changelog
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Support</h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                API Docs
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Help Center
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Contact Us
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Status
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Security
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Learn</h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                What is Blockchain?
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                What are NFTs?
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                What is Bitcoin Mining?
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                What is DeFi?
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                What is Crypto Mining
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Buy</h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                Buy Bitcoin
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Buy Ethereum
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Buy Solana
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Buy Cardano
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Sell</h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                Sell Bitcoin
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Sell Ethereum
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Sell XRP
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Sell Solana
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Swap</h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                Swap Ethereum
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Swap SOL
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Swap Aave
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Swap Chainlink
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">
              Crypto Prices
            </h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                Bitcoin Price
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Ethereum Price
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Dogecoin Price
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                XRP Price
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Cardano Price
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <h1 className="text-white font-semibold text-[16px]">Legal</h1>
            <div className="py-5 flex flex-col gap-5 font-semibold">
              <Link to="" className="hover:text-white text-[13px]">
                Licenses
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Privacy Policy
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Cookie Policy
              </Link>
              <Link to="" className="hover:text-white text-[13px]">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-0 items-center justify-between">
          <div className="flex flex-col gap-5 w-screen">
            <div className="flex lg:gap-16 gap-8 lg:text-white text-[#696767]">
              <AiFillFacebook size={25} />
              <FaXTwitter size={25}  />
              <FaLinkedin size={25} />
              <FaInstagram size={25}  />
              <FaYoutube size={25}  />
            </div>

              <div className="lg:flex hidden flex-col w-screen max-w-[450px] gap-1">
            <div className="flex gap-4 items-center pt-5">
                <input
                  onChange={(event) => setemail(event.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#2a2a2a] text-sm text-white py-2 px-4 w-[75%] rounded-lg"
                />
                 <button
                onClick={handleSubmitForm}
                className="bg-[#2a2a2a] text-white text-sm border-2 border-[#2a2a2a] rounded-lg px-3 py-1 w-[25%]"
                type="submit"
              >
                Subscribe
              </button>
              </div>
              {emailerrors && <div className="">{emailerrors}</div>}
            </div>

            <div className="lg:flex hidden flex-col gap-1">
              <div className="flex gap-4">
                <input
                  // onClick={handleCheckBox}
                  onChange={handleCheckBox}
                  type="checkbox"
                  className="bg-[#2a2a2a] text-sm text-white w-7 h-7 rounded-lg"
                />
              <p className="text-[#464646] text-[12px] max-w-[50%]">Check this box to receive communications from MoonPay. You can unsubscribe at any time. We look after your data - see our <Link to="" className="underline ">privacy policy</Link>.</p>
              </div>
                {checkerrors && <div className="flex items-center gap-1">{checkerrors}</div>}
            </div>
          </div>
        <div className="flex flex-col gap-20 items-end">
          <Link className="lg:flex hidden">
          <div className="text-white flex gap-2 items-center">
             <TbWorld size={20} />
            <p>English</p>
          </div>
          </Link>
          <div className="flex gap-2">
          <Link><img src="/images/app-store-en.png" alt="" className="lg:h-9 h-10 lg:w-[200px]" /></Link>
          <Link><img src="/public/images/google-play-en.png" alt="" className="lg:h-9 h-10 lg:w-[200px]"/></Link>
          </div>
        </div>
        </div>
        <div className="lg:flex hidden pt-10">
          <p className="text-[#464646] text-[12.5px]">All rights reserved. MoonPay USA LLC is a registered money service business (NMLS ID: 2071245). For Law Enforcement requests please direct your official document to our compliance team here.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralFooter;
