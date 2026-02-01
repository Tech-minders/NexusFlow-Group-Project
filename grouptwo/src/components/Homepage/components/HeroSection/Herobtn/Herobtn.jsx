function Herobtn() {
  return (
    <div className="flex gap-5 mt-5">
      <button className="bg-green-500 p-4 font-bold text-white rounded-md cursor-pointer hover:opacity-80">
        GET STARTED NOW!
      </button>
      <button className="border-2 border-green-500 bg-white pl-10 pr-10 font-bold text-gray-800 rounded-md cursor-pointer hover:border-white hover:text-white hover:bg-green-500">
        SIGN UP FREE
      </button>
      <button className="border-2 border-white pl-10 pr-10 font-bold text-gray-800 rounded-md hover:border-green-500 cursor-pointer">
        LOG IN
      </button>
    </div>
  );
}
export default Herobtn;
