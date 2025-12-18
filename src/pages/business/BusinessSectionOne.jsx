import { IoReaderOutline } from "react-icons/io5"
import { image } from "../../utils/data"

const BusinessSectionOne = () => {
    return(

     <div className="bg-white flex flex-col gap-10 lg:py-36 py-20 px-5 lg:px-0">
        <div className=" flex lg:flex-row flex-col lg:pl-5 gap-16">
         <div className="flex flex-col gap-8 flex-2/4">
            <span className="text-[#7D00FF] text-[20px] uppercase font-semibold lg:text-left text-center">Crypto On-Ramp</span>
            <h1 className="lg:text-[45.5px] text-[31.5px] font-bold leading-tight tracking-tight lg:text-left text-center ">Boost your revenue with the world's #1 crypto on-ramp</h1>
            <p className="text-[#555555] text-[18px] lg:text-left text-center">Our on-ramp gives you global coverage, seamless revenue sharing, and zero risk of fraud or chargebacks. All in a few lines of code.</p>
            <div className="flex lg:flex-row flex-col gap-8 mb-5">
                <button className="px-8 py-3 bg-[#7D00FF] text-white rounded-lg hover:bg-[#5902b5]">Build with Us</button>
                <button className="flex items-center justify-center gap-3 bg-[#DFDFDF] px-8 py-3 rounded-lg hover:bg-[#adacac]"> <IoReaderOutline />Read our Docs</button>
            </div>
         </div>
         <div className="flex flex-2/3">
            <img src="/public/images/Group.png" alt="" className="lg:h-[600px] w-[1800px]"/>
         </div>
        </div>
          <div className="ticker-container">
                  <div className="logo-track">
                    {[...image, ...image].map((element, i) => (
                      <img
                        key={i}
                        src={element.img}
                        alt={`logo-${i}`}
                        className="image-item"
                      />
                    ))}
                  </div>
                </div>
        </div>
    )
}
export default BusinessSectionOne