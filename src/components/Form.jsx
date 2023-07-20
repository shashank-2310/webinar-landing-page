import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "thankyou";
    navigate(path);
  };

  return (
    <div className="text-left text-white">
      <form onSubmit={routeChange} className="sm:my-10 my-4 ">
        <div className="">
          <div className="my-2 flex flex-col justify-center">
            <label
              htmlFor="Name"
              className="font-semibold sm:text-base text-sm  my-1 "
            >
              {" "}
              Name
            </label>
            <input
              className="rounded sm:h-9 h-7 text-black focus:outline-none pl-1 focus-within:border-2 focus-within:border-blue-600"
              required
              minLength={3}
              type="text"
              name="Name"
              id="Name"
            />
          </div>

          <div className="my-2 flex flex-col justify-center">
            <label
              htmlFor="emailAddress"
              className="font-semibold sm:text-base text-sm  my-1 "
            >
              Email
            </label>
            <input
              className="rounded sm:h-9 h-7 text-black focus:outline-none pl-1 focus-within:border-2 focus-within:border-blue-600"
              required
              type="email"
              name="email"
              id="emailAddress"
            />
          </div>

          <div className="my-2 flex flex-col justify-center">
            <label
              htmlFor="dropdown"
              className="font-semibold sm:text-base text-sm  my-1 "
            >
              What type of marketer are you?
            </label>
            <select
              required
              name="dropdown"
              id="dropdown"
              className="text-black text-sm sm:h-9 h-7 rounded focus:outline-none focus-within:border-2 focus-within:border-blue-600"
              placeholder="Please choose"
            >
              <option value="">I am an entrepreneur or small business</option>
              <option value="">I work in a marketing team for a company</option>
              <option value="">
                I am a marketing consultant or agency with multiple clients
              </option>
            </select>
          </div>

          <div className="my-2 flex flex-col justify-center">
            <button
              type="submit"
              className="uppercase rounded-lg text-lg text-black hover:text-white font-bold tracking-widest my-4 border-b-2 border-e-2 border-black hover:border-[#FEC260] bg-[#FEC260] hover:bg-black shadow-md shadow-zinc-800 py-2 px-3 sm:py-4 sm:px-6 sm:text-xl "
            >
              Save my spot
            </button>
          </div>

          <div className="my-2 flex flex-col justify-center">
            <p className="text-gray-300 font-semibold text-xs sm:text-sm">
              Cannot make it?
            </p>
            <p className="text-gray-300 text-xs sm:text-sm">
              Register anyway and we’ll send you the recording.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
