import { component$ } from "@builder.io/qwik";
import './servicesSection.scss';
import ServiceCard from "./service-card";
import { useElementReveal } from "~/hooks/elementReveal.hook";

const ServicesSection = component$(() => {
    const [elementRef, isVisible] = useElementReveal();
    const serviceCards = [
        {
            icon: "🔍",
            title: "150-Point Inspection",
            description: "Every vehicle undergoes rigorous multi-point inspection by certified technicians before reaching our showroom."
        },
        {
            icon: "🛡️",
            title: "Extended Warranty",
            description: "Comprehensive coverage options up to 10 years/100,000 miles for complete peace of mind."
        },
        {
            icon: "💰",
            title: "Flexible Financing",
            description: "Competitive rates starting at 2.9% APR with multiple lender partnerships and custom payment plans."
        },
        {
            icon: "🔄",
            title: "Trade-In Program",
            description: "Get instant market-value offers for your current vehicle. Apply equity directly to your new purchase."
        }
    ];

    return (
        <section class="services">
            <div class="container">
                <div class="section-header">
                    <h2>Why choose <span class="gold-text">Apex</span></h2>
                    <p>Comprehensive automotive services tailored to your needs</p>
                </div>
                <div ref={(el) => elementRef.value = el } class={[
                    "services__grid",
                    isVisible.value ? "grid--visible" : "grid--hidden"
                    ]}>
                    {
                        serviceCards.map(({icon, title, description}) => (
                            <ServiceCard
                            icon={icon}
                            title={title}
                            description={description}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
});


export default ServicesSection;