import { component$ } from "@builder.io/qwik";
import './heroSection.scss';
import { Link } from "@builder.io/qwik-city";

const HeroSection = component$(() => {
    return (
        <section class="hero">
            <div class="hero__overlay"></div>
            <div class="hero__content">
                <div class="crest">T</div>
                <h1>Tsar's Table</h1>
                <p class="subtitle">Imperial Russian Dining Reimagined</p>
                <div class="cta-group">
                    <Link href="/reservations" class="btn btn-primary">Reserve a Table</Link>
                    <Link href="/menu" class="btn">Explore Menu</Link>
                </div>
            </div>
            <div class="scroll-hint">
                <span class="scroll-hint__command">Discover</span>
                <div class="scroll-line"></div>
            </div>
        </section>
    )
});

export default HeroSection;