import { useState } from "react";

export default function Form() {
  const [date, setDate] = useState(null);
  function handle(e) {
    e.preventDefault();
    setDate(e.target.value);
  }
  return (
    <div>
      <input value={date} onChange={handle} type="date" />
      <button onClick={() => alert(date === "2022-06-23")}>Get Date</button>
    </div>
  );
}
