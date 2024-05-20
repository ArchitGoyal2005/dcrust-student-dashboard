import { useState } from "react";
import TimeTableData, { dayList } from "../data/timetable";
import TableData from "../pages/timetable/TableData";

function TimeTable({ active = true }) {
  const [day, setDay] = useState(new Date().getDay());

  const data = TimeTableData[day];

  const prevDay = () => {
    if (day >= 1) setDay((day) => day - 1);
    else setDay(6);
  };

  const nextDay = () => {
    if (day <= 5) setDay((day) => day + 1);
    else setDay(0);
  };

  return (
    <main style={{ margin: 0 }}>
      <div className={`timetable ${active ? "active" : ""}`} id="timetable">
        <div>
          <span id="prevDay" onClick={prevDay}>
            &lt;
          </span>
          <h2>
            {new Date().getDay() === day ? "Today's Timetable" : dayList[day]}
          </h2>
          <span id="nextDay" onClick={nextDay}>
            &gt;
          </span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Room No.</th>
              <th>Subject</th>
              <th></th>
            </tr>
          </thead>
          <TableData data={data} />
        </table>
      </div>
    </main>
  );
}

export default TimeTable;
