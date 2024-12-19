const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border-t-2 border-gray-400 w-40 my-4"></div>
      <div className="flex space-x-2">
        <img
          src="src\assets\linkedin.svg"
          className="transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          width="40px"
        />
        <img
          src="src\assets\github.svg"
          className="transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          width="35px"
        />

        <img
          src="src\assets\gmail.svg"
          className="transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          width="35px"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
