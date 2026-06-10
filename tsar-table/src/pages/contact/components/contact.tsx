import { component$ } from "@builder.io/qwik";
import ContactGrid from "./contactGrid/contactGrid";
import './contact.scss';
import FaqSection from "./faqSection/faqSection";

const Contact = component$(() => {
    
    return (
        <main class="contact">
            <div class="contact__hero">
                <h1>Contact</h1>
            </div>
            <ContactGrid/>
            <FaqSection/>
            <div class="social">
                <h3>Follow the Imperial Court</h3>
                <div class="social__links">
                    <a href="#" class="social__link" aria-label="Instagram">IG</a>
                    <a href="#" class="social__link" aria-label="Facebook">FB</a>
                    <a href="#" class="social__link" aria-label="Twitter">X</a>
                </div>
            </div>
        </main>
    )
});

export default Contact;