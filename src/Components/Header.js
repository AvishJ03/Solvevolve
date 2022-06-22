import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>Timeline</h1>
      <div className="hdates">
        <select id="drop">
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="day">Day</option>
          <option value="year">Year</option>
        </select>
        <p>19 - 25 June, 2022</p>
        <button> Prev </button>
        <button> Next </button>
      </div>
    </div>
  );
}
