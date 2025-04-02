import PolicySection from "./PolicySection";

const CompanyPolicies = () => {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "13px",
        gap: "10px",
        padding: "15px 0",
        borderBottom: "1px solid #ecedf2",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          gap: "20px",
        }}
      >
        <PolicySection
          link={"https://www.ticketlink.co.kr/introduction/company"}
          section={"회사소개"}
        ></PolicySection>
        <PolicySection
          link={"https://www.ticketlink.co.kr/policy/privacy"}
          section={"개인정보 처리방침"}
        ></PolicySection>
        <PolicySection
          link={"https://www.ticketlink.co.kr/policy/youth"}
          section={"청소년 보호정책"}
        ></PolicySection>
        <PolicySection
          link={"https://www.ticketlink.co.kr/policy/usage"}
          section={"이용약관"}
        ></PolicySection>
        <PolicySection
          link={"https://www.ticketlink.co.kr/help/main"}
          section={"고객센터"}
        ></PolicySection>
        <PolicySection
          link={"https://www.ticketlink.co.kr/help/partner"}
          section={"티켓판매안내"}
        ></PolicySection>
        <PolicySection
          link={"https://www.ticketlink.co.kr/advertisement"}
          section={"광고안내"}
        ></PolicySection>
      </div>
    </div>
  );
};

export default CompanyPolicies;
