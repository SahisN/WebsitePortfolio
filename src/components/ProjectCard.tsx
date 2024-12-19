
function ProjectCard() {
  return (
    <div className="max-w-lg bg-black border border-black rounded-lg shadow-md flex text-white w-full">
   

    {/* Image Section */}
    <div className="w-1/2 mr-[50px]">
      <img
        src="src/assets/react.svg"
        alt="Example"
        className="h-full w-full object-cover rounded-r-lg"
      />
    </div>
     {/* Text Section */}
     <div className="p-4 flex-1 flex flex-col justify-center ">
      <h2 className="text-lg font-semibold text-white mb-2">Card Title</h2>
      <p className="text-white mb-4">
        This is an example of a card with an image on the right and text with a button on the left.
      </p>
      <button className="btn btn-primary w-fit px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
        Learn More
      </button>
    </div>
  </div>
  )
}

export default ProjectCard;