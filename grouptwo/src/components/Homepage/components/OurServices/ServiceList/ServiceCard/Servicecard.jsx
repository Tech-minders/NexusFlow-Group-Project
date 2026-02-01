import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Servicecard({ image, name }) {
  return (
    <div className="flex flex-col items-center pt-5 w-50 gap-2 border border-gray-100 rounded-md border-grey-800 hover:bg-gray-50 shadow-md hover:border-green-500">
      {/* <div className="p-5">{image}</div> */}
      <img src={image} alt={name} className="w-20" />
      <p className="p-5 font-bold text-gray-800 text-xl">{name}</p>
      <p className=" flex justify-center items-center gap-2 text-gray-800 hover:text-green-500 mb-4 font-semibold">
        <a href="#">Learn More</a>
        <FaArrowUpRightFromSquare className="cursor-pointer" />
      </p>
    </div>
  );
}
export default Servicecard;
