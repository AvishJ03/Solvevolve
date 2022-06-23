import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Week from "./Components/Week";

export default function Calendar() {
  const def = [{ title: null, date: null, start: null, end: null }];
  const [schedule, setSchedule] = useState(def);
  return (
    <div className="flex">
      <div>
        <Form schedule={schedule} setSchedule={setSchedule} />
      </div>
      <div className="w-10/12">
        <Header />
        <Week schedule={schedule} />
      </div>
    </div>
  );
}
