import { sellbtcStories } from "../../../utils/data";

const SellBitcoinSectionFour = () => {
  return (
    <div className=" bg-[#F9F8FB] pb-1">
      <div className="bg-white lg:py-20 py-12 flex flex-col gap-24 rounded-4xl">
        <div className="container px-3 lg:px-0 flex flex-col gap-10">
          <div className="flex flex-col w-full gap-3">
            <h4 className="lg:text-5xl text-2xl font-semibold tracking-tighter leading-tight">
              Why is MoonPay the best way to sell Bitcoin?
            </h4>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-1 md:gap-1 gap-5">
            {sellbtcStories.map((element, index) => (
            <div key={index} className="col-span-1 bg-[#F9F8F5] flex flex-col lg:p-10 md:p-10 p-3 items-center rounded-xl md:gap-10 gap-20">
              <img
                src={element.coverImage}
                alt=""
                className=""
              />
              <div className="flex flex-col gap-4 px-3 lg:px-0">
                <h3 className="lg:text-2xl font-semibold">
                 {element.title}
                </h3>
                <p className="text-[#A3A3A3] font-semibold tracking-tight">
               {element.content}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellBitcoinSectionFour;
