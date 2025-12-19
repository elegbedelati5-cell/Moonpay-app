import { IoStarSharp } from "react-icons/io5"
import { TiStarHalf } from "react-icons/ti"
import { Link } from "react-router-dom"
import { businessReviews } from "../../utils/data"
import { FaCheckCircle, FaStar } from "react-icons/fa"

const BusinessSectionFive = () => {
    return(
         <div className="flex flex-col py-28 gap-20">
           <div className="container flex flex-col items-center justify-center gap-8">
            <span className="uppercase font-semibold text-lg">user reviews</span>
            <h3 className="text-4xl font-semibold tracking-tighter">See what our customers say</h3>
            <p className="text-[#555555] text-lg mb-20">We're the highest-rated, most-reviewed on-ramp on the market.</p>
            <span className="flex items-center gap-1 text-lg"><IoStarSharp size={20} color="#04DA8D"/>Trustpilot</span>
                <Link className="flex gap-5">
                    <div className="flex gap-0.5">
                   <IoStarSharp size={20} color="#fff" className="bg-[#00B67A] "/> 
                   <IoStarSharp size={20} color="#fff" className="bg-[#00B67A]"/> 
                   <IoStarSharp size={20} color="#fff" className="bg-[#00B67A]"/> 
                   <IoStarSharp size={20} color="#fff" className="bg-[#00B67A]"/> 
                   <TiStarHalf size={20} color="#fff" className="bg-[#00B67A]"/>
                   </div>
                   <span className="tracking-tight font-medium">4.1 Rated By 100K+ people</span>
                </Link>
           </div>
<div>
              <div className="w-full overflow-hidden"> 
              <div className="flex gap-10 pb-2 review-scroll w-max">
                {[...businessReviews, ...businessReviews].map((reviews, i) => (
                  <div
                    key={i}
                    className="bg-[#EFF3F9] max-w-[400px] lg:min-h-[180px] min-h-[200px] rounded-2xl p-5 flex flex-col gap-10 border border-[#F0EEF3] border-[1px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1 ">
                        <FaStar color="#51CAB4"/><FaStar color="#51CAB4"/><FaStar color="#51CAB4"/><FaStar color="#51CAB4"/><FaStar color="#51CAB4"/>
                      </div>
            
                      <div className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-full">
                        <FaCheckCircle />
                        <p className="text-[10px] font-semibold">Verified Review</p>
                      </div>
                    </div>
                    <p className="lg:text-sm text-sm text-[#555B76]">
                      {reviews.text}
                    </p>
                    <h6 className="font-semibold text-gray-900">
                      {reviews.name}
                    </h6>
                  </div>
                ))}
              </div>
              </div>

               <div className="w-full overflow-hidden"> 
              <div className="flex gap-10 pb-2 review w-max">
                {[...businessReviews, ...businessReviews].map((reviews, i) => (
                  <div
                    key={i}
                    className="bg-[#EFF3F9] max-w-[400px] lg:min-h-[180px] min-h-[200px] rounded-2xl p-5 flex flex-col gap-10 border border-[#F0EEF3] border-[1px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1 ">
                        <FaStar color="#51CAB4"/><FaStar color="#51CAB4"/><FaStar color="#51CAB4"/><FaStar color="#51CAB4"/><FaStar color="#51CAB4"/>
                      </div>
            
                      <div className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-full">
                        <FaCheckCircle />
                        <p className="text-[10px] font-semibold">Verified Review</p>
                      </div>
                    </div>
                    <p className="lg:text-sm text-sm text-[#555B76]">
                      {reviews.text}
                    </p>
                    <h6 className="font-semibold text-gray-900">
                      {reviews.name}
                    </h6>
                  </div>
                ))}
              </div>
              </div>
              </div>

              <div>
              </div>
         </div>
    )
}
export default BusinessSectionFive