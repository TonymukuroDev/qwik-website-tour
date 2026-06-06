import { component$ } from "@builder.io/qwik";
import './ctaSection.scss';
import { Link } from "@builder.io/qwik-city";

const CtaSection = component$(() => {
    return (
        <section class="cta-section">
            <div class="container">
                <h2>Ready to Find Your <span class="gold-text">Perfect Car</span>?</h2>
                <p>Schedule a private showroom appointment or browse our complete inventory online. Your dream vehicle awaits.</p>
                <div class="btn-container">
                    <Link href="/inventory" class="btn btn-primary btn-large">Browse Inventory</Link>
                    <Link href="/inventory" class="btn btn-secondary btn-large">Schedule Visit</Link>
                </div>
            </div>
        </section>
    )
});

export default CtaSection;