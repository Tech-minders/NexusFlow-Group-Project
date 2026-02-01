import { Link } from "react-scroll";
function Menu() {
  return (
    <nav>
      <ul className="flex justify-center gap-5 font-medium text-gray-700">
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          <Link
            to="herosection"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            Features
          </Link>
        </li>
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          {/* <a href="#">Pricing</a> */}
        </li>
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="hover:text-green-500 hover:text-xl active:opacity-90">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
