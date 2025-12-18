const IndexSectionThree = () => {
  return (
    <div className="container flex lg:flex-row flex-col items-center justify-center gap-9 mb-40 lg:px-0 px-4">
      {/* right */}
      <div className="flex flex-col gap-5 max-w-[500px]">
        <h3 className=" lg:text-5xl text-2xl font-bold leading-tight tracking-tight">
          Countless tokens at your fingertips
        </h3>
        <p className="tracking-tight text-[17px]">
          <b>From the headlines to hidden opportunities.</b> Explore DeFi with
          MoonPay - simple, direct, decentralized trading that keeps you in
          control.
        </p>
        <div>
          <button className="bg-black text-white px-12 py-3 text-[14px] rounded-full">
            Discover
          </button>
        </div>
      </div>
      {/* left */}
      <div className="flex flex-col gap-4 items-center">
        <img
          src="/images/eng-100m-main.jpg"
          alt=""
          className="lg:h-[470px] rounded-[50px] container"
        />
        <p className="text-[12px] text-[#596169]">
          DeFi trading services are not available in the EEA or New York.
        </p>
      </div>
    </div>
  );
};

export default IndexSectionThree;
