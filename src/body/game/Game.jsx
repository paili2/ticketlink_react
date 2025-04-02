import Schedule from "./schedule/Schedule";
import TicketingMenu from "./ticketing/ticketingMenu";
import View from "./view/View";

const Game = () => {
  return (
    <div style={{ width: "100%", padding: "70px 0" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <TicketingMenu />
        <View></View>
        <Schedule></Schedule>
      </div>
    </div>
  );
};

export default Game;
