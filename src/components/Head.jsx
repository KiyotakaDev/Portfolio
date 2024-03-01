import React from "react";

const Head = () => {
  const containerDisplacement =
    "px-[2.1rem] sm:px-[2.4rem] xl:px-[2.5rem] 2k:px-[6rem] 4k:px-[7.8rem] top-36 xl:top-40 2k:top-60 4k:top-72";
  const pinHead =
    "h-5 md:h-6 xl:h-7 2k:h-11 4k:h-14 w-5 md:w-6 xl:w-7 2k:w-11 4k:w-14";
  const needleSize =
    "h-44 md:h-48 lg:h-48 xl:h-[14rem] 2k:h-[24rem] 4k:h-[32rem] w-1 md:w-[0.3rem] lg:w-[0.35rem] 2k:w-[0.55rem] 4k:w-[0.7rem]";

  return (
    <section
      style={{ pointerEvents: "none" }}
      className="z-30 top-0 left-0 absolute text-white"
    >
      {/* Container */}
      <div
        className={`${containerDisplacement} relative flex flex-row gap-x-5 max-w-[120rem]`}
      >
        {/* -> Coder for */}
        <div className="flex flex-col justify-center items-center">
          {/* Pin head */}
          <div className={`${pinHead} rounded-full bg-leveled-400`} />
          {/* Pin needle */}
          <div
            className={`${needleSize} bg-gradient-to-b from-leveled-400 from-20% via-iced-400`}
          />
        </div>
        {/*  pin <- */}

        {/* -> Head */}
        <div className="main-text text-white tracking-wide">
          Hi I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-leveled-400 to-iced-400 animate-pulse">
            Camilo
          </span>
          <div className="pt-1 lg:pt-3 2k:pt-5 4k:pt-6">
            <p className="sub-text">
              I develop <span className="text-leveled-300">Full Stack</span> web
              applications,{" "}
            </p>
            <p className="sub-text">
              user interfaces and{" "}
              <span className="text-iced-300">3D visuals.</span>
            </p>
          </div>
        </div>
        {/* info <- */}
      </div>
    </section>
  );
};

export default Head;
