import { component$ } from "@builder.io/qwik";
import HeroSection from "./heroSection/heroSection";
import PhilosophySection from "./philosophySection/philosophySection";


const Home = component$(() => {
    return (
        <div class="home">
            <HeroSection/>
            <PhilosophySection/>
        </div>
    )
});

export default Home;