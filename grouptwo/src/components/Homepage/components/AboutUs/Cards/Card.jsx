import { SiLightning } from "react-icons/si";
import { BiSolidDollarCircle } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";

function Card() {
  return (
    <div className="flex gap-10 mt-10">
      <div className="flex flex-col justify-center w-100 border rounded-md border-grey-100 p-5 gap-y-2 bg-white hover:bg-gray-50 hover:border-green-500">
        <div>
          <SiLightning size="4em" color="green" />
        </div>
        <h4 className="font-bold">Instant Access</h4>
        <p className="font-light">
          Get immediate access to all services under a single platform.
        </p>
      </div>
      <div className="flex flex-col justify-center w-100 border rounded-md border-grey-100 p-5 gap-y-2 bg-white hover:bg-gray-50 hover:border-green-500">
        <div>
          <BiSolidDollarCircle size="4em" color="green" />
        </div>
        <h4 className="font-bold">Flexible Pricing</h4>
        <p className="font-light">
          Choose from hourly, daily, weekly, or monthly plans that fit your
          needs
        </p>
      </div>
      <div className="flex flex-col justify-center w-100 border rounded-md border-grey-100 p-5 gap-y-2 bg-white hover:bg-gray-50 hover:border-green-500">
        <div>
          <IoShieldCheckmark size="4em" color="green" />
        </div>
        <h4 className="font-bold">Secure & Reliable</h4>
        <p className="font-light">
          Enterprise grade security with 99.9% up-time guarantee
        </p>
      </div>
    </div>
  );
}
export default Card;
