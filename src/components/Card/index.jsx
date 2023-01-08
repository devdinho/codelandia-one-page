import "./style.css";

const Card = ({ bgColor }) => {
  return (
    <div className="card">
      <div className="card-bg" style={ { backgroundColor: bgColor } }></div>
      <div className="card-info">
        <h3>Título do card</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum in neque et nisl.
        </p>
      </div>
    </div>
  )
};

export default Card;