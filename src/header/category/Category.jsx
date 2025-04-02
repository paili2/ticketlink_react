import Search from "./Search";
import Sports from "./Sports";

const Category = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid #ecedf2",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "15px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            fontSize: "15px",
          }}
        >
          <Sports sports={"홈"}></Sports>
          <Sports sports={"축구"}></Sports>
          <Sports sports={"야구"}></Sports>
          <Sports sports={"핸드볼"}></Sports>
          <Sports sports={"아이스하키"}></Sports>
          <Sports sports={"농구"}></Sports>
          <Sports sports={"배구"}></Sports>
          <Sports sports={"e스포츠&게임"}></Sports>
          <Sports sports={"이벤트"}></Sports>
          <Sports sports={"PAYCO VIP ZONE"}></Sports>
        </div>
        <Search></Search>
      </div>
    </div>
  );
};

export default Category;
