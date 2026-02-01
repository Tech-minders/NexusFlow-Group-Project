function Menubtn() {
  return (
    <div className="flex justify-end mr-20 gap-5">
      <button className="border-2 border-gray-200 pl-4 pr-4 p-2 rounded-md text-gray-800 font-bold text-md cursor-pointer hover:border-green-500 active:opacity-70">
        Log In
      </button>
      <button className="bg-green-400 pl-4 pr-4 rounded-md text-white font-bold cursor-pointer text-md hover:opacity-80 active:opacity-70">
        Sign Up
      </button>
    </div>
  );
}
export default Menubtn;
