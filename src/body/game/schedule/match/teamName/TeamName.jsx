const TeamName = (props) => {
  return (
    <div style={{ display: "flex", gap: "5px", fontWeight: "bold" }}>
      <span>{props.homeTeamName}</span>
      <span>vs</span>
      <span>{props.awayTeamName}</span>
    </div>
  );
};

export default TeamName;
