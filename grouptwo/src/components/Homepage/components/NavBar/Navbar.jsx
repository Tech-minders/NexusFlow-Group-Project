import Menu from "./Menu/Menu";
import Menubtn from "./Menu/Menubtn";

function Navbar() {
  return (
    <div className=" flex items-center justify-between p-5 m-2 bg-white shadow-md">
      <h1 className="font-bold text-gray-800 ml-20 text-3xl">NexusFLow</h1>
      <Menu />
      <Menubtn />
    </div>
  );
}
export default Navbar;
