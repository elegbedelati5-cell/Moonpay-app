import { newsStories } from "../../utils/data";

const IndexSectionFive = () => {
  return (
    <div className=" container flex py-28 lg:px-0 px-4">
      <div className="flex lg:flex-row flex-col w-full justify-between lg:gap-0 gap-2 ">
        {newsStories.map((element) => (
          <div
            className="lg:w-[33%] flex flex-col border-[1px] border-[#F9F8FB] rounded-[30px] bg-[#F9F8FB] h-full"
            key={element.id}
          >
            <img
              src={element.coverImage}
              alt=""
              className="h-52 w-full object-cover rounded-t-[30px]"
            />

            <div className="px-5 pt-7 gap-5 flex flex-col flex-1 lg:pb-5 pb-7">
              <h1
                className="lg:text-[32px] text-[25px] font-semibold tracking-tighter"
                style={{ wordSpacing: "-1px" }}
              >
                {element.title}
              </h1>

              <p className="text-[#4b4c4b] text-[14px] lg:tracking-normal tracking-tighter lg:py-0 py-5">
                {element.content}
              </p>

              <div className="pt-5 mt-auto">
                <button className="bg-black text-white px-5 py-2 text-[14px] rounded-full cursor-pointer">
                  {element.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default IndexSectionFive;
