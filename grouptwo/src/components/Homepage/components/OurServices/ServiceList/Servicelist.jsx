import { useState } from "react";
import { DiEnvato } from "react-icons/di";
import { SiGrammarly } from "react-icons/si";
import { ahref, chatgpt, envato, grammarly } from "./../../../assets";

import Servicecard from "./ServiceCard/Servicecard";

const services = [
  {
    name: "ChatGPT",
    image: chatgpt,
  },
  {
    name: "Grammarly",
    image: grammarly,
  },
  {
    name: "Ahref",
    image: ahref,
  },
  {
    name: "Envato Elements",
    image: envato,
  },
];
function Servicelist() {
  const [card, setCard] = useState(services);
  const addService = (service) => {
    setCard([...services, card]);
  };
  return (
    <div className="flex gap-15 mt-5 mb-10 transition-opacity-0.5 ease-in-out">
      {services.map((service, index) => (
        <Servicecard key={index} name={service.name} image={service.image} />
      ))}
    </div>
  );
}
export default Servicelist;
