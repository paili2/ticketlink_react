const Menu = (props) => {
  return (
    <button
      style={{
        padding: "12px 80px",
        borderRadius: "0px",
        borderRight: "none",
      }}
    >
      {props.menu}
    </button>
  );
};

export default Menu;
