import Util from "./util/Util";
import Thema from "./thema/Thema";
import Category from "./category/Category";

const Header = () => {
  return (
    <div style={{ width: "100%" }}>
      <Util></Util>
      <Thema></Thema>
      <Category></Category>
    </div>
  );
};

export default Header;
