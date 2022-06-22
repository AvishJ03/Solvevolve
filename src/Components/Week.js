import { useState } from "react";
import Day from "./Day";
import "./week.css";

export default function Week({ schedule }) {
  const [select, setSelect] = useState(false);

  return (
    <div className="week">
      <div>
        <h3>Sun</h3>
        <h3>19</h3>
        <Day selected={select} />
      </div>
      <div>
        <h3>Mon</h3>
        <h3>20</h3>
        <Day selected={select} />
      </div>
      <div>
        <h3>Tue</h3>
        <h3>21</h3>
        <Day selected={select} />
      </div>
      <div>
        <h3>Wed</h3>
        <h3>22</h3>
        <Day selected={select} />
      </div>
      <div>
        <h3>Thu</h3>
        <h3>23</h3>
        <Day selected={select} />
      </div>
      <div>
        <h3>Fri</h3>
        <h3>24</h3>
        <Day selected={select} />
      </div>
      <div>
        <h3>Sat</h3>
        <h3>25</h3>
        <Day selected={select} />
      </div>
    </div>
  );
}