import MatchDate from "./dateTime/MatchDate.jsx";
import ReservationButton from "./reservation/ReservationButton.jsx";
import Stadium from "./Stadium.jsx";
import TeamImg from "./teamImg/Teamimg.jsx";
import TeamName from "./teamName/TeamName.jsx";

const Match = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        alignItems: "center",
        justifyItems: "center",
        padding: "20px 0",
        borderBottom: "1px solid #ecedf2 ",
      }}
    >
      <MatchDate
        date={props.date}
        day={props.day}
        time={props.time}
      ></MatchDate>
      <TeamImg
        homeTeamLogo={props.homeTeamLogo}
        awayTeamLogo={props.awayTeamLogo}
      ></TeamImg>
      <TeamName
        homeTeamName={props.homeTeamName}
        awayTeamName={props.awayTeamName}
      ></TeamName>
      <Stadium stadium={props.stadium}></Stadium>
      <ReservationButton
        reservationDate={props.reservationDate}
        reservationTime={props.reservationTime}
      ></ReservationButton>
    </div>
  );
};

export default Match;
