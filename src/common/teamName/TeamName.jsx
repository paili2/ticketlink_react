const TeamName = (props) => {
  return (
    <div
      style={{
        color: "white",
        fontSize: "25px",
        fontWeight: "bold",
        width: "fit-content",
      }}
    >
      {props.teamName}
    </div>
  );
};

export default TeamName;
