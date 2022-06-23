import Day from "./Day";
import Timing from "./Timings";
import "./week.css";

export default function Week({ schedule }) {
  const arr = [...Array(7).keys()];
  const d = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
  };
  // const [day1, setDay1] = useState();
  // useEffect(() => {
  //   schedule[0] && schedule.forEach((each) => {});
  // }, [schedule]);
  return (
    <div className="week">
      <div>
        <div style={{ height: "35px" }}></div>
        <Timing />
      </div>
      {arr.map((ele) => {
        return (
          <div>
            <h3 className="font-bold">{d[ele]}</h3>
            <h3 className="font-bold">{19 + ele}</h3>
            <Day date={`2022-06-${19 + ele}`} schedule={schedule} />
          </div>
        );
      })}
    </div>
  );
}
