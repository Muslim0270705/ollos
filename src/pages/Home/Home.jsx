import React, {useState} from 'react';
import First from "./First/First";
import Comp from "./Comp/Comp";
import Izd from "./Izd/Izd";
import News from './news/News';
import Services from './Services/Services';
import Books from './Books/Books';
import Magazines from './Magazines/Magazines';
import Contacts from './Contacts/Contacts';
import Map from "./map/Map";
import Popup from "./popup";

const Home = () => {
    const [active,setActive] = useState(false)
    return (
        <>
            <First setActive={setActive}/>
            <Comp setActive={setActive}/>
            <Izd setActive={setActive}/>
            <News setActive={setActive}/>
            <Services setActive={setActive}/>
            <Books/>
            <Magazines setActive={setActive}/>
            <Contacts/>
            <Map/>
            <Popup setActive={setActive} active={active}/>
        </>
    );
};

export default Home;