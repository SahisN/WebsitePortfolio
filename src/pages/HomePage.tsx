import NavBar from "../components/NavBar";
import SocialMedia from "../components/SocialMedia";

const HomePage = () => {
  return (
    <div className="px-[25px] py-[25px] h-screen bg-black">
      <NavBar pageNo={0} />
      <div className="py-[20px]">
        <h1 className="text-4xl font-bold text-orange-400">______</h1>
      </div>

      {/** Half text and half image section */}
      <div className="py-[15px]">
        {/** Left side */}
        <div className="space-y-2 font-mono">
          <h1 className="text-3xl font-bold text-white">
            Hi, I'm Sahis Neupane, a
          </h1>
          <h1 className="text-3xl font-bold text-white">Front-end Developer</h1>
          <p className="text-white py-[10px]">
            I design web apps to turn your ideas into reality
          </p>
          <button className="bg-orange-500 text-white rounded-lg h-12 w-32 transition transform hover:scale-110 hover:bg-orange-500 font-bold">
            Get in touch
          </button>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default HomePage;
