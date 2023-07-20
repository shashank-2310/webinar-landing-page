import checkList from "../assets/checklist.png";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="text-center text-white font-hero h-[100dvh] bg-gray-950 flex flex-col justify-center items-center">
      <div className="h-[50%] items-center justify-center flex flex-col mx-2 px-1">
        <img src={checkList} alt="checkList" className="h-1/3 my-5" />
        <h1 className="sm:text-5xl text-2xl font-bold tracking-wider">
          Thanks for registering!
        </h1>
        <p className=" my-2 font-normal sm:text-base text-sm ">
          Details for joining the webinar on{" "}
          <span className="text-cyan-400">July 9TH, 4PM IST</span> will be
          delivered to your inbox soon!
        </p>
        <p className="sm:text-base text-sm font-normal my-1">
          Meanwhile, you can have a look at our{" "}
          <span className="text-emerald-300 hover:text-cyan-400 inline-block">
            {" "}
            <Link to="/">future webinars!</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
