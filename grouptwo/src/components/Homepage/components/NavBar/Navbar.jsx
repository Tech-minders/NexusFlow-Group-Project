import Logo from "./Menu/Logo";
import Menu from "./Menu/Menu";
import Menubtn from "./Menu/Menubtn";

function Navbar() {
  return (
    <div className=" flex items-center w-screen justify-between p-4 mr-3 ml-3 bg-white shadow-md">
      <Logo />
      <Menu />
      <Menubtn />
    </div>
  );
}
export default Navbar;
