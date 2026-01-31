import Servicelist from "./ServiceList/Servicelist.jsx";
import Header from "./Header/Header";
function Services() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 bg-white p-10">
      <hr/>
      <Header />
      <Servicelist />
    </div>
  );
}
export default Services;
