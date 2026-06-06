import { component$ } from "@builder.io/qwik";
import HeroSection from "./heroSection/heroSection";


const Home = component$(() => {
    return (
        <div class="home">
            <HeroSection/>
        </div>
    )
});

export default Home;