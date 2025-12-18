import { FaCheckCircle, FaStar } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { reviews } from "../../utils/data";

const IndexSectionSeven = () => {
  return (
    <div className="">
      <div className="container py-20 flex flex-col gap-7 lg:px-0 px-4">
        <h2 className="lg:text-5xl font-semibold leading-tight tracking-tighter">
          See what our customers say
        </h2>
        <div className="flex items-center gap-3 flex-1">
          <div className=" flex items-center p-2 gap-1 rounded-xl bg-[#ffffff] border-[1px] border-[#c3c3c3] cursor-pointer">
            <div className="rounded-full bg-[#e2e8f0] p-1">
              <SiTrustpilot size={15} color="#10B981" />
            </div>
            {/* flex flex-col gap-1 */}
            <p className="font-bold">TrustScore 4.0</p>
            <p className="text-[12px] text-[#64748b]">(102k Reviews)</p>
          </div>
        </div>
        <p className="lg:text-lg text-[16px] text-[#404040] font-semibold lg:max-w-1/2">
          With over 100,000 reviews, MoonPay is one of the most reviewed and
          highest scoring platforms for crypto.
        </p>
        <div>
          <button className="bg-black text-white p-4 text-[16px] rounded-full hover:bg-[#d9dad3] cursor-pointer">
            Reviews
          </button>
        </div>
      </div>
  <div className="w-full overflow-hidden"> 
  <div className="flex gap-2 pb-2 review w-max">
    {[...reviews, ...reviews].map((review, i) => (
      <div
        key={i}
        className="bg-[#F9F8FB] max-w-[450px] lg:min-h-[300px] min-h-[200px] rounded-4xl p-10 flex flex-col gap-4 border border-[#F0EEF3]"
      >
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <div className="flex items-center gap-2 px-2 py-1 bg-white border border-gray-300 rounded-lg">
            <FaCheckCircle />
            <p className="text-[10px] font-semibold">Verified Review</p>
          </div>
        </div>
        <p className="lg:text-base text-sm">
          {review.text}
        </p>
        <h6 className="font-semibold text-gray-900">
          {review.name}
        </h6>
      </div>
    ))}
  </div>
  </div>

  <div className="w-full overflow-hidden pb-28"> 
  <div className="flex gap-2 review-scroll w-max">
    {[...reviews, ...reviews].map((review, i) => (
      <div
        key={i}
        className="bg-[#F9F8FB] max-w-[450px] lg:min-h-[300px] min-h-[200px] rounded-4xl p-10 flex flex-col gap-4 border border-[#F0EEF3]"
      >
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <div className="flex items-center gap-2 px-2 py-1 bg-white border border-gray-300 rounded-lg">
            <FaCheckCircle />
            <p className="text-[10px] font-semibold">Verified Review</p>
          </div>
        </div>
        <p className="lg:text-base text-sm"> {review.text}
        </p>
        <h6 className="font-semibold text-gray-900">
          {review.name}
        </h6>
      </div>
    ))}
  </div>
  </div> 
    </div>
  );
};
export default IndexSectionSeven;
