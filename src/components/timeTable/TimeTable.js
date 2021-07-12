import "./TimeTable.css";

import RowTable from "./RowTable";

function TimeTable() {
  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];

  return (
    <div className="container">
      <div className="timetable-img text-center">
        <img src="img/content/timetable.png" alt="" />
      </div>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr className="bg-light-gray">
              <th className="text-uppercase">Time</th>
              <th className="text-uppercase">Monday</th>
              <th className="text-uppercase">Tuesday</th>
              <th className="text-uppercase">Wednesday</th>
              <th className="text-uppercase">Thursday</th>
              <th className="text-uppercase">Friday</th>
              <th className="text-uppercase">Saturday</th>
              <th className="text-uppercase">Sunday</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(13)].map((x, index) => (
              <RowTable key={index} time={{startTime:times[index], endTime:times[index + 1]}} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimeTable;
