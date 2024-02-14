import React from 'react';
import First from "./First/First";
import Comp from "./Comp/Comp";
import Izd from "./Izd/Izd";
import News from './news/News';
import Services from './Services/Services';
import Books from './Books/Books';
import Magazines from './Magazines/Magazines';
import Contacts from './Contacts/Contacts';

const Home = () => {
    return (
        <>
            <First />
            <Comp />
            <Izd />
            <News />
            <Services />
            <Books />
            <Magazines />
            <Contacts />
        </>
    );
};

export default Home;