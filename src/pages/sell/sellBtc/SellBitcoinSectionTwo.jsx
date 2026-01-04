import { sellStories } from "../../../utils/data"

const SellBitcoinSectionTwo = () => {
    return(
         <div className=" bg-[#F9F8FB] pb-1">
              <div className="bg-white px-3 md:px-10 lg:px-0 py-20 rounded-4xl">
                <div className="container flex flex-col gap-10">
                  <div className="flex flex-col gap-5">
                    <h2 className="lg:text-[45px] text-[23px] font-semibold leading-tight">
                      How to sell Bitcoin for fiat on MoonPay
                    </h2>
                    <p className="font-semibold text-[#737373] lg:text-lg">
                      Sell Bitcoin (BTC) in 80+ countries using the local currency of your bank account. We offer different payment options that cater to your region.
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-1">
                    {sellStories.map((element) => (
                      <div
                        className="col-span-1 bg-[#F9F8F5] flex flex-col gap-5 p-5 rounded-2xl"
                        key={element.id}
                      >
                        <img src={element.coverImage} alt="" className="w-10" />
                        <div className="py-5 flex-col flex gap-5">
                          <h4 className="font-semibold text-[22px]">{element.title}</h4>
                          <p className="font-semibold text-[#737373]">
                            {element.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
    )
}
export default SellBitcoinSectionTwo