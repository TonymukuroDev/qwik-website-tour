import { component$ } from "@builder.io/qwik";
import "./home-page.scss";
import HeroSection from "../heroSection/heroSection";
import FeaturedSection from "../featuredSection/featuresSection";
import BrandsSection from "../brandsSection/brandsSection";
import ServicesSection from "../servicesSection/servicesSection";
import TestimonialsSection from "../testimonialsSection/testimonialsSection";
import CtaSection from "../ctaSection/ctaSection";

const HomePage = component$(() => {
    return (
        <div class="home">
            <HeroSection/>
            <FeaturedSection/>
            <BrandsSection/>
            <ServicesSection/>
            <TestimonialsSection/>
            <CtaSection/>
        </div>
    )
});

export default HomePage;