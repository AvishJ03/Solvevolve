export default function Timing() {
  const arr = [...Array(24).keys()];
  return (
    <div>
      <div className="timing"></div>
      {arr.map((ele) => {
        if (ele < 10) {
          return <div className="timing">{`0${ele}:30 AM`}</div>;
        } else {
          return <div className="timing">{`${ele}:30 AM`}</div>;
        }
      })}
    </div>
  );
}
