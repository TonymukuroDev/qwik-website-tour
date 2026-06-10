import { component$ } from "@builder.io/qwik";
import ExperienceHero from "./experienceHero/experienceHero";
import StorySection from "./storySection/storySection";
import GalleryContainer from "./galleryContainer/galleryContainer";
import ChefProfile from "./chefProfile/chefProfile";
import Atmosphere from "./atmosphere/atmosphere";
import Testimonials from "./testimonials/testimonials";

const Experience = component$(() => {
    return (
        <main class="experience">
            <ExperienceHero/>
            <StorySection/>
            <GalleryContainer/>
            <ChefProfile/>
            <Atmosphere/>
            <Testimonials/>
        </main>
    )
});

export default Experience;