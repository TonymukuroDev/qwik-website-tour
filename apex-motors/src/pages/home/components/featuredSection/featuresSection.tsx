import { component$ } from "@builder.io/qwik";
import './featuredSection.scss';
import { useElementReveal } from "~/hooks/elementReveal.hook";
import FeaturedCard from "./featured-card";
import { assetsImg } from "~/assets/assets";
import { Link } from "@builder.io/qwik-city";

const FeaturedSection = component$(() => {
    const [elementRef, isVisible] = useElementReveal();
    const featuredVehicles = [
        {
            img: assetsImg.porsche,
            title: "2024 Porsche 911 Carrera",
            link: "vehicle-detail.html",
            badge: {
            type: "new",
            text: "New"
            },
            specs: {
            power: "379 HP",
            year: 2024,
            fuel: "Gas"
            },
            pricing: {
            currentPrice: 124900,
            monthlyPayment: 1890,
            originalPrice: null
            }
        },
        {
            img: assetsImg.mercedes,
            title: "2023 Mercedes-Benz GLE 450",
            link: "vehicle-detail.html",
            badge: {
            type: "certified",
            text: "Certified"
            },
            specs: {
            power: "362 HP",
            year: 2023,
            fuel: "Hybrid"
            },
            pricing: {
            currentPrice: 68500,
            monthlyPayment: 1050,
            originalPrice: null
            }
        },
        {
            img: assetsImg.bmw,
            title: "2022 BMW X5 M50i",
            link: "vehicle-detail.html",
            badge: {
            type: "sale",
            text: "Sale"
            },
            specs: {
            power: "523 HP",
            year: 2022,
            fuel: "Gas"
            },
            pricing: {
            currentPrice: 72900,
            monthlyPayment: null,
            originalPrice: 82500
            }
        }
    ];

    return (
        <section class="featured">
            <div class="container">
                <div class="section-header">
                    <h2>Featured <span class="gold-text">Collection</span></h2>
                    <p>Handpicked premium vehicles ready for immediate delivery</p>
                </div>
                <div ref={(el) => elementRef.value = el } class={[
                    "featured__grid",
                    isVisible.value ? "grid--visible" : "grid--hidden" 
                    ]}>
                    {
                        featuredVehicles.map((vehicle) => (
                            <FeaturedCard
                            img={vehicle.img}
                            title={vehicle.title}
                            link={vehicle.link}
                            badge={vehicle.badge}
                            specs={vehicle.specs}
                            pricing={vehicle.pricing}
                            />
                        ))
                    }
                </div>
                <div class="featured__bottom">
                    <Link href="/inventory" class="btn btn-secondary">View All Inventory</Link>
                </div>
            </div>
        </section>
    )
});

export default FeaturedSection;