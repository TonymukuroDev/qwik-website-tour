import { component$ } from "@builder.io/qwik";
import './chefProfile.scss';
import { assetsImg } from "~/assets/assets";

const ChefProfile = component$(() => {
    return (
        <section class="chef-profile">
            <div class="chef__container">
                <div class="chef__image">
                    <img src={assetsImg.chefVolkov.img} alt={assetsImg.chefVolkov.title} />
                    <div class="chef__frame"></div>
                </div>
                <div class="chef__info">
                    <h2>Dmitri Volkov</h2>
                    <p class="title">Executive Chef & Founder</p>
                    <p>Trained at the Culinary Institute of St. Petersburg and Le Cordon Bleu Paris, Chef Volkov spent a decade as private chef to diplomatic residences across Eastern Europe before founding Tsar's Table.</p>
                    <p>His philosophy is simple: "Russian cuisine is not heavy—it is honest. We use butter because it tastes better, not to hide inferior ingredients. We pickle because we respect the harvest. Every technique has a reason rooted in survival and celebration."</p>
                    <p>Under his leadership, Tsar's Table has earned a Michelin star and recognition as one of America's top 50 restaurants by James Beard Foundation.</p>
                    <div class="chef__signature">D. Volkov</div>
                </div>
            </div>
        </section>
    )
});

export default ChefProfile;