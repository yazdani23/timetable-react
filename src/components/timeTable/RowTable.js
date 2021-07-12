import ColumnTable from "./ColumnTable.js"



function RowTable({time}) {
  return (
    <tr>
      <td className="align-middle">{time.startTime}</td>

      {[...Array(7)].map((x, index) => (
        <ColumnTable key={index} time={time}/>
      ))}
    </tr>
  );
}

export default RowTable;
