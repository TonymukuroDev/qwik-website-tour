import { component$ } from "@builder.io/qwik";
import './heroSection.scss';
import { Link } from "@builder.io/qwik-city";

interface StatItemPropsInterface {
    value: string;
    label: string;
}
const StatItem = ({value, label}: StatItemPropsInterface ) => {
    return (
        <div class="stat-item">
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    )
};

const HeroSection = component$(() => {
    const dealershipStats = [
        {
            value: "500+",
            label: "Vehicles Available"
        },
        {
            value: "15K+",
            label: "Happy Customers"
        },
        {
            value: "4.9★",
            label: "Average Rating"
        }
    ];
    return (
        <section class="hero">
            <div class="hero__bg"></div>
            <div class="hero__grid"></div>
            <div class="hero__glow"></div>
            <div class="hero__content">
                <div class="hero__text">
                    <h1>Drive Your <span class="gold-text">Dream</span></h1>
                    <p>Experience luxury automotive retail at its finest. Premium vehicles, transparent pricing, and white-glove service since 2008.</p>
                    <div class="hero__buttons">
                        <Link href="/inventory" class="btn btn-primary btn-large">Explore Inventory</Link>
                        <Link href="/financing" class="btn btn-secondary btn-large">Get Pre-Approved</Link>
                    </div>
                    <div class="hero__stats">
                        {
                            dealershipStats.map(({value, label}) => (
                                <StatItem value={value} label={label} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
});


export default HeroSection;