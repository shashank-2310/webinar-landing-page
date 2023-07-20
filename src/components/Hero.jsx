import heroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className=" z-0 py-9 max-xs:h-[70dvh] sm:h-[100dvh] px-5 lg:py-20 mb-0 flex flex-col text-white justify-center items-center">
        <div className="sm:w-3/4 lg:w-2/4">
          <h1 className="capitalize max-xs:px-3 text-[#FEC260] text-3xl sm:text-5xl sm:tracking-wide font-hero font-extrabold leading-10 tracking-normal text-center">
            10 job hacks that will make you feel like play
          </h1>
          <p className="hidden sm:block text-xl font-medium text-center">
            Simple tips you can implement today to make your job easier
          </p>
          <p className="text-center max-xs:px-4 my-3 py-6 px-2 text-[0.96rem] xs:text-lg tracking-wide">
            Your job is pretty hard, isn’t it? Wouldn’t it be great if your job
            was not as hard as it currently is? In this free webinar, you’ll
            learn the quickest method to completing your work and making your
            business prosper, leaving you more time to spend on Twitter or
            whatever.
          </p>
        </div>
        <button className="bg-[#FEC260] text-black hover:text-[#FEC260] hover:bg-black rounded-lg uppercase font-bold text-lg tracking-wide border-b-2 border-e-2 hover:border-[#FEC260] border-black shadow-md shadow-zinc-700 py-2 px-4 sm:py-4 sm:px-6 sm:text-xl">
          <Link to="registrationForm" spy={true} smooth={true} offset={15} duration={500} >Save my spot</Link>
        </button>
      </div>

      <div className=" w-full flex flex-col text-white items-center justify-center mt-0 sm:pb-10">
        <div className="mt-4 mb-0 py-2">
          <img
            src={heroImage}
            alt="elon-musk"
            className="w-2/3 md:w-max mx-auto"
          />
        </div>
        <div className=" w-full pt-2 flex flex-col justify-center items-center">
          <h1 className="capitalize text-[#FEC260] text-center text-xl sm:text-4xl font-bold font-hero">
            Our Guest - Elon Musk
          </h1>
          <p className="text-center max-xs:px-5 mt-2 mb-1 py-5 px-2 text-[0.96rem] xs:text-lg sm:w-2/4">
            Elon Musk has some serious expertise that qualifies him to host this
            webinar, like that time he built a hot dog ladder to the mars. Learn
            more in his best-selling book, “On the Way to the Mars.”
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
