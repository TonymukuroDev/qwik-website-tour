import { component$ } from "@builder.io/qwik";
import './experienceHero.scss';

const ExperienceHero = component$(() => {
    return (
        <section class="experience-hero">
            <div class="experience-hero__content">
                <h1>The Imperial Experience</h1>
                <p>Dining as Art, Hospitality as Heritage</p>
            </div>
        </section>
    )
});

export default ExperienceHero;