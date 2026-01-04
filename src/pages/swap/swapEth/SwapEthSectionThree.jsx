import { useState } from "react";
import { swapPair, swapPairs } from "../../../utils/data";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";

const SwapEthSectionThree = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=" bg-[#F9F8FB] pb-1">
      <div className="bg-white px-3 md:px-10 lg:px-0 md:py-20 lg:py-20 py-12 rounded-4xl">
        <div className="container flex flex-col gap-12">
          <div className="flex flex-col gap-20 md:mt-10 lg:mt-10">
            <p className="lg:text-3xl text-xl leading-tight font-semibold tracking-tight">
              Choose from dozens of swap pairs on multiple major blockchains.
            </p>
            <div className="border-t-[1px] border-[#D4D4D4] w-full flex"></div>
          </div>
          <div>
            <Link>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1">
              {swapPairs.map((element) => (
                <div
                  className="col-span-1 flex items-center gap-3 p-5 rounded-2xl"
                  key={element.id}
                >
                  <img src={element.coverImage} alt="" className="w-10" />
                  <h4 className="font-semibold text-[14px]">{element.title}</h4>
                  <p className="font-semibold text-[#737373]">
                    {element.content}
                  </p>
                </div>
              ))}
            </div>
           </Link>
            {showMore && (
            <Link> 
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1">
                {swapPair.map((element) => (
                  <div
                    className="col-span-1 flex items-center gap-3 p-5 rounded-2xl"
                    key={element.id}
                  >
                    <img src={element.coverImage} alt="" className="w-10" />
                    <h4 className="font-semibold text-[14px]">
                      {element.title}
                    </h4>
                    <p className="font-semibold text-[#737373]">
                      {element.content}
                    </p>
                  </div>
                ))}
              </div>
              </Link>
            )}

            <div className="flex items-center justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="flex items-center font-bold  hover:bg-[#E4E4E4] px-3 py-1 hover:rounded-lg"
              >
                {" "}
                {showMore ? "Show Less Assets" : "Show All Assets"}
                {showMore ? (
                  <MdArrowDropUp size={25} />
                ) : (
                  <MdArrowDropDown size={25} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwapEthSectionThree;
