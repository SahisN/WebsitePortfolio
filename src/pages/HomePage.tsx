import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="px-[20px] py-[20px] h-screen bg-black">
      <NavBar />
      <div className="py-[50px] text-white">
        <section className="h-screen item-center justify-center">
          {/** left side */}
          <div>
            <h1 className="text-3xl font-bold">Hi, I'm Sahis</h1>
            <p>I design web apps to turn your ideas into reality</p>
          </div>
          {/** right side */}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
