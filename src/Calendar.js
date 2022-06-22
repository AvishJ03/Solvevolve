import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Week from "./Components/Week";

export default function Calendar() {
  const s = {
    "2022-06-19": [true, false, true, false],
    "2022-06-20": [true, false, true, false],
    "2022-06-21": [true, false, true, false],
    "2022-06-22": [true, false, true, false],
    "2022-06-23": [true, false, true, false],
    "2022-06-24": [true, false, true, false],
    "2022-06-25": [true, false, true, false]
  };
  const [schedule, setSchedule] = useState(s);
  return (
    <div className="calendar">
      <Header />
      <Week schedule={schedule} />
      <Form />
    </div>
  );
}
