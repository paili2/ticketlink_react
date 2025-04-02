const DayTime = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "15px" }}>
      <span>{props.day}</span>
      <span>{props.time}</span>
    </div>
  );
};

export default DayTime;
