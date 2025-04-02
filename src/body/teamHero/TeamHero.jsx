import TeamLogo from "../../common/teamLogo/TeamLogo";
import TeamName from "../../common/teamName/TeamName";
import ReservationGuide from "./ReservationGuide";

const TeamHero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundColor: "rgb(0, 54, 129)",
        display: "flex",
        padding: "0 100px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1240px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <TeamLogo src={"Ulsan.png"} width={"170px"} height={"170px"}></TeamLogo>
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <TeamName teamName={"울산 HD FC"}></TeamName>
          <ReservationGuide></ReservationGuide>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
