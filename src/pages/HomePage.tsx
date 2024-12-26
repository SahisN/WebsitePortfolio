import NavBar from "../components/NavBar";
import ProgrammingLanguageCard from "../components/ProgrammingLanguageCard";
import SocialMedia from "../components/SocialMedia";

const HomePage = () => {
  return (
    <div>
      <div className="px-[25px] py-[25px] bg-black">
        <NavBar pageNo={0} />
        <div className="py-[20px]">
          <div className="border-t-2 border-orange-400 w-24 my-4"></div>
        </div>

        <div className="py-[15px]">
          <div className="space-y-2 font-mono text-center text-white">
            <h1 className="text-3xl font-bold">Hi, I'm Sahis Neupane, a</h1>
            <h1 className="text-3xl font-bold">Software Engineer</h1>
            <div className="py-[30px]">
              <p>I'm Passionate about building user-friendly solutions</p>
              <p>and committed to continuous learning and growth while</p>
              <p>delivering high-quality results.</p>
            </div>

            <button className="bg-orange-500 rounded-lg h-12 w-32 transition transform hover:scale-110 hover:bg-orange-500 font-bold">
              Get in touch
            </button>
          </div>
          <div className="py-[30px]">
            <SocialMedia />
          </div>
        </div>
      </div>
      {/** Techologny Stack */}
      <div className="text-white py-[15px] px-[15px]">
        <h1 className="text-4xl font-bold"> My Technology Stack</h1>
        <div className="border-t-2 border-orange-400 w-24 my-4" />
        <div className="flex py-[30px]">
          <ProgrammingLanguageCard
            image_path="src\assets\programing_language\dart.svg"
            title="Dart"
          />
          <ProgrammingLanguageCard
            image_path="src\assets\programing_language\java.svg"
            title="Java"
          />
          <ProgrammingLanguageCard
            image_path="src\assets\programing_language\javascript.svg"
            title="Javascript"
          />
          <ProgrammingLanguageCard
            image_path="src\assets\programing_language\python.svg"
            title="Python"
          />

          <ProgrammingLanguageCard
            image_path="src\assets\programing_language\typescript.svg"
            title="Typescript"
          />

          <ProgrammingLanguageCard
            image_path="src\assets\programing_language\react.svg"
            title="React / React Native"
          />

          <ProgrammingLanguageCard
            image_path="src\assets\programing_language\flutter.svg"
            title="Flutter"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
