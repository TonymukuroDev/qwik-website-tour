import { component$ } from "@builder.io/qwik";
import './testimonialsSection.scss';
import TestimonialCard from "./testimonial-card";
import { useElementReveal } from "~/hooks/elementReveal.hook";

const TestimonialsSection = component$(() => {

    const [elementRef, isVisible] = useElementReveal();
    const testimonials = [
        {
            author: {
            name: "James Davidson",
            title: "Porsche 911 Owner",
            avatar: "JD"
            },
            rating: 5,
            text: "The team at Apex made buying my dream car effortless. From financing to delivery, every step was handled with professionalism. Best dealership experience I ve ever had."
        },
        {
            author: {
            name: "Sarah Mitchell",
            title: "Mercedes GLE Owner",
            avatar: "SM"
            },
            rating: 5,
            text: "I was skeptical about buying a luxury car online, but Apex s virtual showroom and transparent pricing won me over. The car arrived in pristine condition."
        },
        {
            author: {
            name: "Robert Chen",
            title: "BMW X5 Owner",
            avatar: "RC"
            },
            rating: 5,
            text: "Their trade-in offer was $3,000 higher than other dealers. The financing rate beat my credit union. Apex truly puts the customer first."
        }
    ];

    return (
        <section class="testimonials">
            <div class="container">
                <div class="section-header">
                    <h2>Client <span class="gold-text">Stories</span></h2>
                    <p>Real experiences from our valued customers</p>
                </div>
                <div ref={(el) => elementRef.value = el } class={[
                    "testimonials__grid",
                    isVisible.value ? "grid--visible" : "grid--hidden"
                    ]}>
                    {
                        testimonials.map(({ author, rating, text}) => (
                            <TestimonialCard
                            author={author}
                            rating={rating}
                            text={text}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
});

export default TestimonialsSection;