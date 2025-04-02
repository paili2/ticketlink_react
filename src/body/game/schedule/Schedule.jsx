import Match from "./match/Match";

const Schedule = () => {
  const matchData = [
    {
      date: "04.01",
      day: "(화)",
      time: "18:00",
      homeTeamLogo: "Ulsan.png",
      awayTeamLogo: "Daejeon.png",
      homeTeamName: "울산",
      awayTeamName: "대전",
      stadium: "울산 문수 월드컵경기장",
      reservationDate: "2025.04.02 (수)",
      reservationTime: "12:00",
    },
    {
      date: "04.05",
      day: "(토)",
      time: "14:00",
      homeTeamLogo: "Ulsan.png",
      awayTeamLogo: "Seoul.png",
      homeTeamName: "울산",
      awayTeamName: "서울",
      stadium: "울산 문수 월드컵경기장",
      reservationDate: "2025.04.02 (수)",
      reservationTime: "12:00",
    },
    {
      date: "04.19",
      day: "(토)",
      time: "14:00",
      homeTeamLogo: "Ulsan.png",
      awayTeamLogo: "Gangwon.png",
      homeTeamName: "울산",
      awayTeamName: "강원",
      stadium: "울산 문수 월드컵경기장",
      reservationDate: "2025.04.16 (수)",
      reservationTime: "12:00",
    },
    {
      date: "05.02",
      day: "(금)",
      time: "19:30",
      homeTeamLogo: "Ulsan.png",
      awayTeamLogo: "Gwangju.png",
      homeTeamName: "울산",
      awayTeamName: "광주FC",
      stadium: "울산 문수 월드컵경기장",
      reservationDate: "2025.04.29 (화)",
      reservationTime: "12:00",
    },
    {
      date: "05.05",
      day: "(월)",
      time: "19:00",
      homeTeamLogo: "Ulsan.png",
      awayTeamLogo: "Pohang.png",
      homeTeamName: "울산",
      awayTeamName: "포항",
      stadium: "울산 문수 월드컵경기장",
      reservationDate: "2025.05.02 (금)",
      reservationTime: "12:00",
    },
    {
      date: "05.24",
      day: "(토)",
      time: "19:00",
      homeTeamLogo: "Ulsan.png",
      awayTeamLogo: "Gimcheon.png",
      homeTeamName: "울산",
      awayTeamName: "김천",
      stadium: "울산 문수 월드컵경기장",
      reservationDate: "2025.05.21 (수)",
      reservationTime: "12:00",
    },
    {
      date: "06.22",
      day: "(일)",
      time: "19:00",
      homeTeamLogo: "Ulsan.png",
      awayTeamLogo: "Suwon.png",
      homeTeamName: "울산",
      awayTeamName: "수원FC",
      stadium: "울산 문수 월드컵경기장",
      reservationDate: "2025.06.19 (목))",
      reservationTime: "12:00",
    },
    {
      date: "06.29",
      day: "(일)",
      time: "19:00",
      homeTeamLogo: "Ulsan.png",
      awayTeamLogo: "Daegu.png",
      homeTeamName: "울산",
      awayTeamName: "대구",
      stadium: "울산 문수 월드컵경기장",
      reservationDate: "2025.06.26 (목)",
      reservationTime: "12:00",
    },
  ];
  return (
    <div>
      {matchData.map((v) => (
        <Match {...v} />
      ))}
    </div>
  );
};

export default Schedule;
