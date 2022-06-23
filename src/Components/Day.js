import { useEffect, useState } from "react";
import "./day.css";

export default function Day({ date, schedule }) {
  var x;
  const arr = [...Array(23).keys()];
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
        arr.forEach((num) => {
          if (num < 10) {
            if (time.slice(0, 2) === `0${num}`) {
              x = { [`0${num}:30`]: ele };
            }
          } else {
            if (time.slice(0, 2) === `${num}`) {
              x = { [`${num}:30`]: ele };
            }
          }
        });
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
      <div style={{ backgroundColor: "white" }} className="hour border-2"></div>
      {arr.map((ele) => {
        if (ele < 10) {
          return (
            <div
              style={
                h[`0${ele}:30`] != null
                  ? { backgroundColor: "#a6f7f1" }
                  : { backgroundColor: "white" }
              }
              className="hour border-2"
            >
              <p>{h[`0${ele}:30`] && h[`0${ele}:30`].title}</p>
              <p>
                {h[`0${ele}:30`] &&
                  h[`0${ele}:30`].start + " - " + h[`0${ele}:30`].end}
              </p>
            </div>
          );
        } else {
          return (
            <div
              style={
                h[`${ele}:30`] != null
                  ? { backgroundColor: "#a6f7f1" }
                  : { backgroundColor: "white" }
              }
              className="hour border-2"
            >
              <p>{h[`${ele}:30`] && h[`${ele}:30`].title}</p>
              <p>
                {h[`${ele}:30`] &&
                  h[`${ele}:30`].start + " - " + h[`${ele}:30`].end}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
