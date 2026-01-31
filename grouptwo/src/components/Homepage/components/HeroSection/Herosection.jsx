import Header from "./Header/Header";
import Herobtn from "./Herobtn/Herobtn";
import Herolist from "./HeroList/Herolist";

function Herosection() {
  return (
    <div className="flex flex-wrap flex-col justify-center mt-20 items-center">
      <Header />
      <Herobtn />
      <Herolist />
    </div>
  );
}
export default Herosection;
