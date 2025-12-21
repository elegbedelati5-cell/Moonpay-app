const RampsSectionOne = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 lg:px-10 px-5 pt-14 lg:py-24">
      <div className="flex flex-1 flex-col justify-center lg:gap-5 gap-3">
        <h1 className="lg:text-6xl text-4xl text-center lg:text-left font-semibold leading-tight tracking-tighter">
          Buy & sell crypto inside your product
        </h1>
        <p className="lg:text-[23.5px] text-[15px] text-center lg:text-left text-[#4D4D4D] font-semibold tracking-tight">
          MoonPay Ramps combines onramp and offramp together in one integration,
          so customers can buy crypto in seconds and cash out to fiat, without
          leaving your experience.
        </p>
        <div className="flex my-5 gap-2 items-center lg:justify-normal justify-center">
            <button className="text-sm rounded-full lg:px-12 px-7 lg:py-5 py-4 bg-black text-white hover:bg-[#272727]">Explore Docs</button>
            <button className="text-sm rounded-full lg:px-12 px-7 lg:py-5 py-4 text-black border-[1px] border-black hover:bg-[#272727] hover:text-white">Get in Touch</button>
        </div>
      </div>
      <div className="flex flex-1 w-full min-h-[350px] overflow-hidden rounded-4xl">
        <video
          src="/videos/MP.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default RampsSectionOne;
