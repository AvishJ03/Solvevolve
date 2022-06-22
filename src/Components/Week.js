import { useState } from "react";
import Day from "./Day";
import "./week.css";

export default function Week({ schedule }) {
  const [select, setSelect] = useState(schedule["2022-06-23"][0]);

  return (
    <div className="week">
      <Day selected={select} />
      <Day selected={true} />
      <Day />
      <Day />
      <Day />
    </div>
  );
}
