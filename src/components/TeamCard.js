export default function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid white" }}>
      <img src={props.cardimg} className="card-img-top" alt="..." />
      <div
        className="card-body"
        style={{
          backgroundColor: "rgb(223, 88, 10)",
          textAlign: "center",
          height: "15rem",
          borderTop: "3px solid white",
        }}
      >
        <h5
          className="card-title"
          style={{ fontSize: "2rem", fontFamily: "scary", color: "white" }}
        >
          {props.name}{" "}
        </h5>
        <p className="card-text">{props.description}</p>
        <p
          className="card-text"
          style={{ fontSize: "1rem", color: "", fontWeight: "bold" }}
        >
          {props.description2}
        </p>
      </div>
    </div>
  );
}
