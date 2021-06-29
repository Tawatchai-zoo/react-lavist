import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../components/Pricing";

const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <Pricing />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </>
    );
};

export default Home;
