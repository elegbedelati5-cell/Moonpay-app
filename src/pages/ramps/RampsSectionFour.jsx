const RampsSectionFour = () => {
    return(
       <div>
        <div className="relative w-full lg:h-[600px] h-[600px]">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-[#7626c2] via-[#ebd0e6] to-[#e05312]"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
           <div className="lg:px-0 px-4">
            <div className="bg-[#F9F8FB]  rounded-4xl lg:px-40 py-28 px-2 flex flex-col gap-8 border border-[#F0EEF3] ">
                <div className="flex flex-col">
                  <span className="text-5xl tracking-tight font-semibold leading-tight">The ramp users expect.</span>
                  <span className="text-5xl tracking-tight font-semibold leading-tight">The infrastructure your team needs.</span>
                </div>
                <div>
                    <button className="bg-black text-white px-16 py-5 rounded-full">Get Started</button>
                </div>
            </div>
           </div>
        </div>
        </div>
       </div>
    )
}
export default RampsSectionFour