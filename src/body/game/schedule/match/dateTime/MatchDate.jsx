import Date from "./Date";
import DayTime from "./DayTime";

const MatchDate = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Date date={props.date}></Date>
      <DayTime day={props.day} time={props.time}></DayTime>
    </div>
  );
};

export default MatchDate;
