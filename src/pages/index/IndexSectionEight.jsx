const IndexSectionEight = () => {
  return (
      <div className="relative w-full lg:h-[850px] h-[600px]">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-[#7626c2] via-[#ebd0e6] to-[#e05312]"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <div className="lg:px-0 px-4">
          <div className="bg-[#F9F8FB] container rounded-4xl lg:p-20 py-28 px-2 flex flex-col gap-4 border border-[#F0EEF3] ">
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="flex gap-2">
                <img
                  src="/images/blackapple.png"
                  alt=""
                  className="h-4 rounded-full"
                />
                <h4 className="lg:font-semibold text-sm">4.4 ★ on App Store</h4>
              </div>
              <div className="border-l-[1px] border-[#D4D4D4] h-[30px] flex"></div>
              <div className="flex gap-2 ">
                <img
                  src="/images/playstore.png"
                  alt=""
                  className="h-5 rounded-full"
                />
                <h4 className="lg:font-semibold text-sm">4.5 ★ on Google Play</h4>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 max">
              <h1 className="text-black lg:text-6xl text-4xl font-semibold leading-tight lg:max-w-2/3 tracking-tighter ">
                The future of money starts with you
              </h1>
              <button className="bg-black rounded-full text-white py-3 px-5 lg:hidden flex">Download the app</button>
              <div className="bg-[#000000] rounded-2xl p-2 gap-4 lg:flex hidden border border-[#F0EEF3] items-center justify-between">
                <p className="text-white text-sm font-semibold max-w-1/3">Download the MoonPay App</p>
                <img
                  src="/images/app-download-qr-code.svg"
                  alt=""
                  className="h-60 rounded-xl"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default IndexSectionEight;
