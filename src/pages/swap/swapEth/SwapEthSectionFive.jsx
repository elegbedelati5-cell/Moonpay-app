import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { FAQsEthereum } from "../../../utils/data";

const SwapEthSectionFive = () => {
  const [showMore, setShowMore] = useState(null);

  const handleShowMore = (index) => {
    setShowMore(showMore === index ? null : index);
  };

  return (
    <div className=" bg-[#F9F8FB] pb-1">
      <div className="bg-white lg:py-24 py-12 flex flex-col gap-24 rounded-4xl">
        <div className="container flex flex-col gap-10 lg:px-0 md:px-10 px-3">
          <h2 className="lg:text-5xl text-[25px] font-semibold leading-tight pr-10">
            Frequently asked questions about swapping Ethereum
          </h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-1">
            {FAQsEthereum.map((faq, index) => (
              <div
                key={index}
                className="col-span-1 bg-[#F9F8F5] hover:bg-[#F1F0ED] rounded-[50px] px-7 lg:py-8 md:py-8 py-5 flex flex-col gap-8"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleShowMore(index)}
                >
                  <h3 className="font-semibold lg:text-base text-sm">{faq.question}</h3>
                  <div className="flex gap-3 bg-white rounded-full py-2 px-2">
                    <IoIosAdd size={20} />
                    <RiSubtractLine size={20} />
                  </div>
                </div>
                {showMore === index && (
                  <div className="overflow-hidden transition-all duration-1000 ease-in-out">
                    <p className="text-[#737373] font-semibold text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwapEthSectionFive;
