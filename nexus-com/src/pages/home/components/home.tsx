import { component$ } from "@builder.io/qwik";
import HeroSection from "./heroSection/heroSection";
import StatsBarSection from "./statsBarSection/statsBarSection";
import FeaturesSection from "./featuresSection/featuresSection";
import NetworkSection from "./networkSection/networkSection";
import TestimonialsSection from "./testimonialsSection/testimonialsSection";
import CtaSection from "./ctaSection/ctaSection";


const Home = component$(() => {
    return (
        <div class="home">
            <HeroSection/>
            <StatsBarSection/>
            <FeaturesSection/>
            <NetworkSection/>
            <TestimonialsSection/>
            <CtaSection/>
        </div>
    )
});

export default Home; 