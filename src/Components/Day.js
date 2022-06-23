import { useEffect, useState } from "react";
import "./day.css";

export default function Day({ date, schedule }) {
  var x;
  const hours = {
    "09:30": null,
    "10:30": null,
    "11:30": null,
    "12:30": null,
    "01:30": null
  };
  const [events, setEvents] = useState([]);
  const [h, setH] = useState(hours);
  useEffect(() => {}, [h]);
  useEffect(() => {
    schedule[1] &&
      schedule.forEach((each) => {
        if (each.date === date) {
          setEvents((prev) => [...prev, each]);
        }
      });
  }, [schedule, date]);
  useEffect(() => {
    events[0] &&
      events.forEach((ele) => {
        var time = ele.start;
        if (time === "09:30") {
          x = { "09:30": ele };
        } else if (time === "10:30") {
          x = { "10:30": ele };
        } else if (time === "11:30") {
          x = { "11:30": ele };
        } else if (time === "12:30") {
          x = { "12:30": ele };
        } else if (time === "13:30") {
          x = { "01:30": ele };
        }
        x[time] = ele;
        if (!h[time]) {
          console.log("yes");
          setH((prev) => ({ ...prev, ...x }));
        } else {
          console.log("no");
        }
      });
  }, [events, h]);
  return (
    <div>
      <div style={{ backgroundColor: "white" }} className="hour"></div>
      <div
        style={
          h["09:30"] != null
            ? { backgroundColor: "#a6f7f1" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        <p>{h["09:30"] && h["09:30"].title}</p>
        <p>{h["09:30"] && h["09:30"].start + " - " + h["09:30"].end}</p>
      </div>
      <div
        style={
          h["10:30"] != null
            ? { backgroundColor: "#dea4f5" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        <p>{h["10:30"] && h["10:30"].title}</p>
        <p>{h["10:30"] && h["10:30"].start + " - " + h["10:30"].end}</p>
      </div>
      <div
        style={
          h["11:30"] != null
            ? { backgroundColor: "#f2ceaa" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        <p>{h["11:30"] && h["11:30"].title}</p>
        <p>{h["11:30"] && h["11:30"].start + " - " + h["12:30"].end}</p>
      </div>
      <div
        style={
          h["12:30"] != null
            ? { backgroundColor: "#b4faa7" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        <p>{h["12:30"] && h["12:30"].title}</p>
        <p>{h["12:30"] && h["12:30"].start + " - " + h["12:30"].end}</p>
      </div>
      <div
        style={
          h["01:30"] != null
            ? { backgroundColor: "#a4bef5" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        <p>{h["01:30"] && h["01:30"].title}</p>
        <p>{h["01:30"] && h["01:30"].start + " - " + h["01:30"].end}</p>
      </div>
    </div>
  );
}
