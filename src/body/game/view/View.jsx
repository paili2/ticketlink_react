import Calendar from "./Calendar";
import Checked from "./Checked";

const View = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        paddingBottom: "20px",
      }}
    >
      <Checked></Checked>
      <Calendar></Calendar>
    </div>
  );
};

export default View;
