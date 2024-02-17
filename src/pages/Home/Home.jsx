import { useState } from "react";
import Books from "./Books/Books";
import Comp from "./Comp/Comp";
import Contacts from "./Contacts/Contacts";
import First from "./First/First";
import Izd from "./Izd/Izd";
import Magazines from "./Magazines/Magazines";
import Services from "./Services/Services";
import Map from "./map/Map";
import News from "./news/News";
import Popup from "./popup";

const Home = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <First setActive={setActive} />
      <Comp setActive={setActive} />
      <Izd setActive={setActive} />
      <News setActive={setActive} />
      <Services setActive={setActive} />
      <Books />
      <Magazines setActive={setActive} />
      <Contacts />
      <Map />
      <Popup setActive={setActive} active={active} />
    </>
  );
};

export default Home;
