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
        } else if (time === "01:30") {
          x = { "01:30": ele };
        }
        x[time] = ele;
        if (!h[time]) {
          console.log("yes");
          setH((prev) => ({ ...prev, ...x }));
        } else {
          console.log("no");
        }
        // console.log(ele.date.slice(8));

        // alert(ele.date.sl)
      });
  }, [events, h]);
  return (
    <div>
      <div
        style={
          events[0] ? { backgroundColor: "blue" } : { backgroundColor: "white" }
        }
        className="hour"
      >
        abc
      </div>
      <div
        style={
          h["09:30"] != null
            ? { backgroundColor: "blue" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        abc
      </div>
      <div
        style={
          h["10:30"] != null
            ? { backgroundColor: "blue" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        {h["10:30"] && h["10:30"].title}
      </div>
      <div
        style={
          h["11:30"] != null
            ? { backgroundColor: "blue" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        abc
      </div>
      <div
        style={
          h["12:30"] != null
            ? { backgroundColor: "blue" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        abc
      </div>
      <div
        style={
          h["01:30"] != null
            ? { backgroundColor: "blue" }
            : { backgroundColor: "white" }
        }
        className="hour"
      >
        abc
      </div>
    </div>
  );
}
