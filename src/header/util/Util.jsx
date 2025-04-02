import CustomerService from "./customer/CustomerService";
import Language from "./language/Language";

const util = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f8f9fa",
        fontSize: "12px",
        fontWeight: "bold",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Language></Language>
        <CustomerService></CustomerService>
      </div>
    </div>
  );
};

export default util;
