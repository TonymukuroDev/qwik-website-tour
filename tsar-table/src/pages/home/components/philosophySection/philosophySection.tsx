import { component$ } from "@builder.io/qwik";
import './philosophySection.scss';
import { assetsImg } from "~/assets/assets";

const PhilosophySection = component$(() => {
    const menuDishes = [
        {
            name: "Beef Stroganoff",
            description: "Heritage beef tenderloin, wild mushroom cream, buckwheat kasha",
            imageUrl: assetsImg.beefStroganoff.img,
            imageAltText: assetsImg.beefStroganoff.title
        },
        {
            name: "Siberian Pelmeni",
            description: "Hand-folded dumplings, veal & pork, sour cream, dill butter",
            imageUrl: assetsImg.siberianDumpling.img,
            imageAltText: assetsImg.siberianDumpling.title
        },
        {
            name: "Ukrainian Borscht",
            description: "Heritage beets, beef bone broth, pampushka garlic bread",
            imageUrl: assetsImg.ukranianBorshch.img,
            imageAltText: assetsImg.ukranianBorshch.title
        }
    ];

    return (
        <section class="philosophy">
            <div class="philosophy__text">
                <h2>A Legacy of Flavor</h2>
                <p>From the imperial kitchens of St. Petersburg to the modern palate, Tsar's Table bridges centuries of Russian culinary tradition. Our executive chef sources Black Sea caviar, wild Siberian sturgeon, and heritage grains from the Volga region.</p>
                <p style="margin-top:1rem;">Each dish tells a story—of frost-covered dachas, of samovars steaming in drawing rooms, of the endless Russian steppe. We don't merely serve food; we curate memories of an empire's grandeur.</p>
            </div>
            <div class="philosophy__image">
                <img src={assetsImg.elegantDining.img} alt={assetsImg.elegantDining.title} />
                <div class="image-frame"></div>
            </div>
        </section>
    )
});

export default PhilosophySection;