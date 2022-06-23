export default function Header() {
  return (
    <div className="flex justify-between align-center mx-10 my-6">
      <h1 className="font-bold text-3xl ">Timeline</h1>
      <div className="flex justify-evenly align-center w-2/5">
        <select id="drop" className="border-2 px-6">
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="day">Day</option>
          <option value="year">Year</option>
        </select>
        <p className="text-lg mt-2 mx-4">19 - 25 June, 2022</p>
        <button className="border-2 px-3 py-2"> Prev </button>
        <button className="border-2 px-3 py-2 -ml-4"> Next </button>
      </div>
    </div>
  );
}
