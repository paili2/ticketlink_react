import Title from "./Title";

const Thema = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <div style={{ width: "110px", height: "80px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src="logo.svg"
          alt=""
        />
      </div>
      <div style={{ display: "flex", gap: "23px" }}>
        <Title title={"공연/전시"}></Title>
        <Title title={"스포츠"}></Title>
        <Title title={"여행"}></Title>
      </div>
    </div>
  );
};

export default Thema;
