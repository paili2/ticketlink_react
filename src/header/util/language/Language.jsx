const Language = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ width: "10px", height: "10px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="lang.png"
          alt=""
        />
      </div>
      <span style={{ color: "gray" }}>한국어</span>
    </div>
  );
};

export default Language;
