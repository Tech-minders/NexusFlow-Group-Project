import { format } from "date-fns";
function Footer() {
  return (
    <div className="flex justify-center gap-40 items-center bg-white p-5">
      <h1 className="text-3xl font-bold text-gray-800 ">NexusFlow</h1>
      <p className="font-medium text-xl text-gray-800">
        &copy; {new Date().getFullYear()}  All Rights Reserved
      </p>
    </div>
  );
}
export default Footer;
