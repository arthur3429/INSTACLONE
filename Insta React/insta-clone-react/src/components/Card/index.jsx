import "./style.css";

//  Card({name, time}) permitiria eu chamar eles lá em baixo sem usar o props.
export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
