const BusinessSectionFour = () => {
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
      {/* <div className="relative w-full h-[300px] overflow-hidden"
          >
            <img src="/images/cta-panel-bg-light-mobile.png" alt="" className=" absolute w-full h-full object-center "/>
            <div className="absolute inset-0 flex flex-col">
          <h3>Learn more about our products</h3>
          <p>Tell us more about your project, and we'll help you with your crypto onramp and offramp needs</p>
          <button>Talk to us</button>
            </div>
            </div> */}
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

          <div className="flex justify-center items-center pt-32 pr-32 gap-14">
            <div className="col-span-1 ">
            <img src="/images/Bitcoin.com.png" alt="" className="h-[400px] flex flex-1" />
            </div>
            <div className="flex flex-col flex-1">
               <h3>Increased revenue by over 500% after integrating MoonPay’s global payments solution.</h3>
               <p>“MoonPay’s payments solution has been instrumental in growing revenues at Bitcoin.com. Their product is not only built with the user experience in mind — for merchants, it is safe, fast, and highly scalable.”</p>
               <div>
                <img src="/public/images/dennispng.png" alt=""  className="h-10 rounded-full"/>
               </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default BusinessSectionFour;
