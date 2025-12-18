import { logo } from "../../utils/data"

const IndexSectionFour = () => {


return(
<div className=" container flex flex-col items-center justify-center lg:px-0 px-4">
        <h1 className="lg:text-5xl text-[23px] leading-tight font-semibold mb-12">
          Experience crypto, effortlessly.
        </h1>
        <div className="ticker-container">
          <div className="logo-track">
            {[...logo, ...logo].map((element, i) => (
              <img
                key={i}
                src={element.logos}
                alt={`logo-${i}`}
                className="logos-item"
              />
            ))}
          </div>
        </div>
        <p className="text-[12px] text-[#8c8c8c] font-bold py-2">
          + 9 more payment options
        </p>
      </div>
)
}
export default IndexSectionFour