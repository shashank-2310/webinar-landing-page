const About = () => {
  return (
    <div className=" text-white text-center flex flex-col justify-center items-center mb-0 sm:py-10">
      <div className="xs:w-11/12 pt-6 pb-3 px-3 ">
        <h1 className="text-2xl font-medium text-[#FEC260]">What you will learn</h1>
        <p className="text-[0.96rem] max-xs:px-5 xs:text-xl py-3 lg:w-3/4 mx-auto">
          In this free 1-hour webinar, A Great Person is going to teach you some
          incredible ways to hack your workflow, including:
        </p>
      </div>
      <div className="md:w-11/12 flex flex-col lg:flex-row sm:justify-evenly justify-start items-start lg:items-center xs:text-xl text-sm mb-8 mt-1 ">
        <p>
          <i className="fa-solid fa-square-check text-emerald-400 hover:text-[#FEC260] mx-1 xs:mx-2 text-2xl xs:text-3xl" />
          Something that is pretty interesting
        </p>
        <p>
          <i className="fa-solid fa-square-check text-emerald-400 hover:text-[#FEC260] mx-1 xs:mx-2 text-2xl xs:text-3xl" />
          Something that is super-cool
        </p>
        <p>
          <i className="fa-solid fa-square-check text-emerald-400 hover:text-[#FEC260] mx-1 xs:mx-2 text-2xl xs:text-3xl" />
          The sickest thing you have ever heard
        </p>
      </div>
    </div>
  );
};

export default About;
