import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Week from "./Components/Week";

export default function Calendar() {
  const def = [
    { title: "ABCd", date: "2022-06-23", start: "09:30", end: "10:30" }
  ];
  const [schedule, setSchedule] = useState(def);
  return (
    <div className="calendar">
      <Header />
      {schedule[0] &&
        schedule.map((each, index) => {
          return <p key={index}>{each.date}</p>;
        })}
      <Week schedule={schedule} />
      <Form setSchedule={setSchedule} />
    </div>
  );
}
