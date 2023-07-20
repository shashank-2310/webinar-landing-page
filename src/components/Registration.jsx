import Form from "./Form"

const Registration = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="text-left text-white mx-auto sm:ml-auto lg:mx-0 lg:pl-24 w-3/4 mt-5 sm:mt-10 mb-0">
        <h1 className="capitalize text-[#FEC260] text-xl sm:text-2xl font-bold tracking-wide ">
          10 job hacks that will make you feel like play
        </h1>
        <p className="sm:text-lg text-base font-medium my-1 sm:my-3 ">
          Join us on July 9TH, 2023
          <br />
          4PM IST
        </p>
        <p className="text-gray-300 text-sm sm:text-base">
          Leading job-hackers teach you how to save time and help your business
          prosper.
        </p>
      </div>
      <div className="mx-auto sm:ml-auto lg:mx-0 lg:pl-24 w-3/4">
        <Form/>
      </div>
    </div>
  );
};

export default Registration;
