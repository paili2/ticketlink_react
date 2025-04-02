import ServiceMenu from "./ServiceMenu";

const CustomerService = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ServiceMenu service={"로그인"}></ServiceMenu>
      <ServiceMenu service={"예매확인/취소"}></ServiceMenu>
      <ServiceMenu service={"회원가입"}></ServiceMenu>
      <ServiceMenu service={"고객센터"}></ServiceMenu>
      <ServiceMenu service={"PAYCO"}></ServiceMenu>
      <ServiceMenu service={"관계사"}></ServiceMenu>
    </div>
  );
};

export default CustomerService;
