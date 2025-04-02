const TeamLogo = (props) => {
  return (
    <div style={{ width: props.width, height: props.heigt }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        src={props.src}
        alt=""
      />
    </div>
  );
};

export default TeamLogo;
