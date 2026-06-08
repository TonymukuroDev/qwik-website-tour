import { component$ } from "@builder.io/qwik";
import { assetsImg } from "~/assets/assets";
import DishCard from "./dishCard";
import './featuredSection.scss';

const FeaturedSection = component$(() => {
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
        <section class="featured">
            <div class="section-header">
                <h2>Imperial Selections</h2>
            </div>
            <div class="dishes-grid">
                {
                    menuDishes.map((dish) => (
                        <DishCard
                        name={dish.name}
                        description={dish.description}
                        imageUrl={dish.imageUrl}
                        imageAltText={dish.imageAltText}
                        />
                    ))
                }
            </div>
        </section>
    )
});

export default FeaturedSection;