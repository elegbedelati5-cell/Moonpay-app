const SellBitcoinSectionThree = () => {
  return (
    <div className=" bg-[#F9F8FB] pb-1">
      <div className="bg-white lg:py-24 py-12 flex flex-col gap-24 rounded-4xl">
        <div className="container grid lg:grid-cols-5 grid-cols-1 gap-10 lg:px-0 md:px-10 px-3">
          <div className="lg:col-span-2 col-span-1 flex flex-col gap-10">
            <h3 className="lg:text-3xl text-[17.5px] font-semibold">
              Sell Bitcoin with a Card. Now Available for Customers in 80+
              Countries!
            </h3>
            <p className="text-[#727272] font-semibold lg:text-lg text-[15px]">
              Introducing our latest feature, Sell-to-Card, which enables users
              in 80+ countries to effortlessly and instantly trade BTC for your
              preferred fiat currency and have the funds transferred directly to
              a card. With this handy addition, selling Bitcoin for fiat
              currencies and transferring funds to a card has never been easier.
            </p>
          </div>
          <div className="lg:col-span-3 col-span-1">
            <img src="/images/visa.png" alt="" className="lg:h-[500px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellBitcoinSectionThree;
