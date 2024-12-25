import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="px-[25px] py-[25px] h-screen bg-black">
      <NavBar pageNo={0} />
      <div className="py-[20px]">
        <div className="border-t-2 border-orange-400 w-24 my-4"></div>
      </div>

      <div className="py-[15px]">
        <div className="space-y-2 font-mono text-center text-white">
          <h1 className="text-3xl font-bold">Hi, I'm Sahis Neupane, a</h1>
          <h1 className="text-3xl font-bold">Software Engineer</h1>
          <div className="py-[15px]">
            <p>I'm Passionate about building user-friendly solutions</p>
            <p>and committed to continuous learning and growth while</p>
            <p>delivering high-quality results.</p>
          </div>

          <div>
            {/** Seperator here */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex border-t-2 border-grey-400 w-72 my-4 justify-center" />
            </div>
            <h2 className="text-2xl font-bold"> Programming Languages I use</h2>
          </div>

          {/* <button className="bg-orange-500 rounded-lg h-12 w-32 transition transform hover:scale-110 hover:bg-orange-500 font-bold">
            Get in touch
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
