import TeamLogo from "./../../../../../common/teamLogo/TeamLogo";

const TeamImg = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <TeamLogo
        src={props.homeTeamLogo}
        width={"70px"}
        height={"70px"}
      ></TeamLogo>
      <span>VS</span>
      <TeamLogo
        src={props.awayTeamLogo}
        width={"70px"}
        height={"70px"}
      ></TeamLogo>
    </div>
  );
};

export default TeamImg;
