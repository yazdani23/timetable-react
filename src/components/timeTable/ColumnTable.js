function ColumnTable({time}) {
  return (
    <td>
      <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">
        Book
      </span>
      <div className="margin-10px-top font-size14">{time.startTime}-{time.endTime}</div>
      <div className="font-size13 text-light-gray">Ivana Wong</div>
    </td>
  );
}
export default ColumnTable;
