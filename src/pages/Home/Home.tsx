import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Hero2 from "../../components/Hero2/Hero2";
import BestSelling from "../../components/BestSelling/BestSelling";

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Hero2 />
            <BestSelling />
        </>
    );
};

export default Home;
