function Header() {
  return (
    <>
      <div className="sm:h-[5rem] h-[4rem] w-full flex items-center justify-center sm:justify-between my-0 bg-opacity-5 border-b-2 border-white border-opacity-5">
        <h1 className="text-white hover:text-[#FEC260] tracking-wider font-header text-4xl sm:text-5xl sm:py-4 sm:pl-12">
          Webino
        </h1>
        <p className="text-white text-lg py-4 sm:pr-12 hidden sm:block hover:underline ">
          Join us on July 9TH, 2023 at 4PM IST
        </p>
      </div>
    </>
  );
}

export default Header;
