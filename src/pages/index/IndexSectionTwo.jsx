import { useRef, useState } from "react";
import { IoIosPause } from "react-icons/io";

const IndexSectionTwo = () => {

     const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="lg:px-0 px-4">
      <div className="relative container w-full lg:min-h-[750px] min-h-[360px] bg-black text-white overflow-hidden mb-32 lg:rounded-[50px] rounded-[20px]">
        {/* Video / Background */}
        <video
          ref={videoRef}
          src="/videos/Moon_Web_LeadVideo-Overlay-1920x1080-v1-RC.webm"
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover "
        />
        <div className="absolute inset-0 lg:bg-black/30"></div>
        <div className="absolute lg:top-1/2 top-1/3 lg:left-1/2 left-1/3 transform lg:-translate-x-1/2 -translate-x-1/4 lg:-translate-y-1/2 -translate-y-1/4 text-white text-3xl font-bold text-center drop-shadow-lg z-10">
          <div className="flex flex-col text-center justify-center items-center">
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
              Buy.Sell.Go.
            </h1>
            <p className=" text-2xl lg:text-5xl leading-tight text-gray-200">
              Instantly.
            </p>
            <p className=" text-2xl lg:text-5xl lg:leading-tight text-gray-200">
              Only with MoonPay.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-center lg:gap-12 gap-28 ">
            <button
              onClick={togglePlay}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#D8D7D8]"
            >
              {isPlaying ? (
                <IoIosPause size={20} color="#000" />
              ) : (
                <IoIosPlay size={20} color="#000" />
              )}
            </button>
            <div className="max-w-[500px] lg:flex hidden">
              <p className="text-white text-[18px] font-semibold text-center">
                MoonPay keeps it simple. You hold the keys - we are
                non-custodial, so your crypto always stays in your control.
              </p>
            </div>
            <button className="lg:px-24 px-12 lg:py-6 py-3 text-[14px] bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 whitespace-nowrap">
              Buy Crypto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexSectionTwo;
