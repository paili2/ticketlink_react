import CompanyInfo from "./CompanyInfo";
import CompanyPolicies from "./CompanyPolicies";

const Footer = () => {
  return (
    <div style={{ width: "100%", borderTop: "1px solid black" }}>
      <CompanyPolicies></CompanyPolicies>
      <CompanyInfo></CompanyInfo>
    </div>
  );
};

export default Footer;
