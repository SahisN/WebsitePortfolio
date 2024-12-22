
interface props {
  title: string,
  tools: string[],
  description: string,
}

function ProjectCard({title, tools, description} : props) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-[650px] w-auto">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
        alt="Album" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div className="flex space-x-2">
        {tools.map((toolName) => (
          <div className="badge badge-primary">{toolName}</div>
        ))}
      </div>
      <div className="card-description space-y-6 py-[15px]">
      <p className="max-w-[300px]">{description}</p>
      <div>
        <button className="btn bg-blue-700 text-white hover:bg-blue-600">Learn More</button>
      </div>
      </div>  
    </div>
  </div>
  )
}

export default ProjectCard;