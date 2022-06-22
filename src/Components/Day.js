import "./day.css";

export default function Day({ selected }) {
  return (
    <div>
      <div
        style={
          selected ? { backgroundColor: "blue" } : { backgroundColor: "white" }
        }
        className="hour"
      >
        abc
      </div>
      <div className="hour">abc</div>
      <div className="hour">abc</div>
      <div className="hour">abc</div>
      <div className="hour">abc</div>
    </div>
  );
}
