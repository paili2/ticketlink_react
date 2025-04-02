const CompanyInfo = () => {
  return (
    <div style={{ fontSize: "13px" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 0 100px 0",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          fontSize: "10px",
          color: "#62676c",
          fontWeight: "bold",
        }}
      >
        <div>엔에이치엔링크 주식회사</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>주소: 06043 서울특별시 강남구 강남대로 586, 제이빌딩</span>
            <span>대표이사: 왕문주</span>
            <span>사업자등록번호: 144-81-25090</span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>1588-7890</span>
            <span>membership@nhnlink.co.kr</span>
            <span>통신판매업 신고번호: 제 2023-서울강남-04352호</span>
            <a
              style={{ color: "black" }}
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1448125090"
            >
              사업자정보확인
            </a>
            <span>개인정보보호 책임자: 서상훈</span>
          </div>
        </div>
        <div style={{ color: "#a7acb6" }}>
          Copyright © NHN LINK Corporation. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
