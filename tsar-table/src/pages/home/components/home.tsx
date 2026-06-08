import { component$ } from "@builder.io/qwik";
import HeroSection from "./heroSection/heroSection";
import PhilosophySection from "./philosophySection/philosophySection";
import FeaturedSection from "./featuredSection/featuredSection";


const Home = component$(() => {
    return (
        <div class="home">
            <HeroSection/>
            <PhilosophySection/>
            <FeaturedSection/>
        </div>
    )
});

export default Home;