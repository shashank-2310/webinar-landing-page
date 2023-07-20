import Registration from "./Registration";
import mark from "../assets/mz.png";
import jeff from "../assets/jb.png";

const Testimonials = () => {
  return (
    <div id="registrationForm" className="w-full border-t-2 border-white border-opacity-5 text-gray-100 flex flex-col sm:flex-row sm:justify-between justify-center items-center">
      <div className="w-full sm:hidden">
        <Registration />
      </div>

      <hr className="sm:hidden border-t-0 h-px my-4 sm:my-8 w-full bg-gray-50 opacity-10" />

      <div className="text-center flex flex-col justify-center items-center sm:w-[50%] ">
        <div className="sm:m-2 m-1 p-2 sm:p-5">
          <blockquote className="italic font-medium text-xl px-2">
            “When I need help eliminating actual labor from my work day, I
            always follow A Great Person’s advice.”
          </blockquote>
          <div className="my-1 sm:my-2 p-1 sm:p-3 flex flex-row justify-start items-center">
            <img
              src={jeff}
              alt="jeff"
              className="w-1/5 border-4 border-black shadow-sm shadow-black rounded-full mr-5 sm:mr-10"
            />
            <p className="text-lg hover:text-[#FEC260]">Jeff Bezos</p>
          </div>
        </div>

        <hr className="border-t-0 h-px my-4 sm:my-8 w-full bg-gray-50 opacity-10" />

        <div className="sm:m-2 m-1 p-2 sm:p-5">
          <blockquote className="italic font-medium text-xl px-2">
            “Killer advice on working less. The hot dog ladder thing was a bit
            baffling, though.”
          </blockquote>
          <div className="my-1 sm:my-2 p-1 sm:p-3 flex flex-row justify-start items-center">
            <img
              src={mark}
              alt="mark"
              className="w-1/5 border-4 border-black shadow-sm shadow-black rounded-full mr-5 sm:mr-10 "
            />
            <p className="text-lg hover:text-[#FEC260]">Mark Zuckerberg</p>
          </div>
        </div>
      </div>

      <div className="hidden my-1 md:inline-block min-h-[1em] w-px self-stretch bg-gray-50 opacity-10"></div>

      <div className="sm:w-[50%] hidden sm:block">
        <Registration />
      </div>
    </div>
  );
};

export default Testimonials;
