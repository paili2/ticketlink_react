const ReservationButton = (props) => {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 20px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "10px",
        width: "fit-content",
      }}
    >
      <span>{props.reservationDate}</span>
      <span>{props.reservationTime}오픈예정</span>
    </button>
  );
};

export default ReservationButton;
