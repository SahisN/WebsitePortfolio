interface props {
  image_path: string;
  title: string;
}

function ProgrammingLanguageCard({ image_path, title }: props) {
  return (
    <div className="card">
      <figure>
        <img src={image_path} width={70} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default ProgrammingLanguageCard;
