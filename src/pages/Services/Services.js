import React from "react";
import HeroSection from "../../components/HeroSection";
// eslint-disable-next-line
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../components/Pricing";

const Services = () => {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjTwo} />
        </>
    );
};

export default Services;
