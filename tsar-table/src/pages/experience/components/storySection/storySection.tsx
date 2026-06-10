import { component$ } from "@builder.io/qwik";
import './storySection.scss';

const StorySection = component$(() => {
    return (
        <section class="story-section">
            <h2>A Legacy Reborn</h2>
            <p>Tsar's Table was conceived not merely as a restaurant, but as a living museum of Russian gastronomic culture. Every detail—from the hand-painted Gzhel ceramics to the imperial eagle motifs in the wrought iron—has been curated to transport guests to the Winter Palace's private dining rooms.</p>
            <p>Our sommelier sources rare Georgian and Moldovan wines unavailable elsewhere in North America. Our caviar is flown weekly from Astrakhan. Our pelmeni are folded by hand each morning according to a Siberian recipe passed down through four generations.</p>
        </section>
    )
});

export default StorySection;