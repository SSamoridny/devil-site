export default function Card(props) {
  return (
    <div className="card">
      <img src={props.cardimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.description2}</p>
        <a
          href={props.openseaLink}
          target="_blank"
          rel="noreferrer"
          className="btn border-dark"
          style={{width: '100%'}}
        >
          VIEW
        </a>
        
      </div>
    </div>
  );
}
