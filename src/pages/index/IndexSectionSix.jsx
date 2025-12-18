const IndexSectionSix = () => {
  return (
    <div className="flex flex-col bg-black ">
      <img src="/images/stats-gradient.png" alt="" />
      <div className="container flex flex-col items-center gap-4 lg:px-0 px-4 lg:pt-0 pt-24">
        <p className="text-[#bbbbbb] font-semibold lg:text-base text-[13px]">
          Trusted by millions of users across 180 countries.
        </p>
        <h1 className="lg:text-[180px] text-[62px] font-bold text-white leading-tight ">
          35,000,000+
        </h1>
        <span className="text-[#bbbbbb] lg:text-lg text-sm font-bold">
          Verified accounts
        </span>
      </div>
      <div className="lg:px-0 px-4">
        <div className="w-full lg:min-h-[700px] min-h-[360px] bg-black text-white overflow-hidden lg:rounded-[50px] rounded-[20px] ">
          {/* Video / Background */}
          <video
            src="/public/videos/Moon_Web_GlobeVideo-COMPRESSED.webm"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" relative container w-full lg:min-h-[750px] min-h-[400px] bg-black text-white overflow-hidden lg:-mt-0 -mt-32 mb-10 lg:rounded-[50px] rounded-[20px]">
          <video
            src="/public/videos/Moon_Web_LeadVideo-Overlay-1920x1080-v1-RC.webm"
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover "
          />
          <div className="absolute lg:top-1/2 top-1/3 lg:left-1/2 left-1/3 transform lg:-translate-x-1/2 -translate-x-1/4 lg:-translate-y-1/2 -translate-y-1/4 text-white text-3xl font-bold lg:text-center drop-shadow-lg lg:z-10">
            <div className="flex flex-col text-center justify-center items-center lg:gap-5 gap-7">
              <h1 className="text-[24px] lg:text-[40px] font-bold leading-[-0.72px]">
                The future of money starts with you.
              </h1>
              <p className=" text-[14px] lg:text-lg leading-tight text-[#cdcdcd]">
                Always connected. Always in control. MoonPay.
              </p>
              <button className="bg-white text-black p-5 text-[16px] rounded-[10px] border-[1px] border-[white] hover:bg-[#d9dad3] cursor-pointer">
                Download the App
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src="/images/stats-gradient.png" alt="" className="rotate-180 " />
    </div>
  );
};
export default IndexSectionSix;
