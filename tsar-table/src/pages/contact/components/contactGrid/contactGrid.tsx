import { component$ } from "@builder.io/qwik";
import './contactGrid.scss';
import ContactFormSection from "../contactFormSection/contactFormSection";

const ContactGrid = component$(() => {
    
    return (
        <section class="contact__grid">
            <div class="contact__info">
                <div class="info-section">
                    <h3>Visit Us</h3>
                    <div class="info-item">
                        <div class="info-icon">📍</div>
                        <div class="info-text">
                            <h4>Address</h4>
                            <p>42 Nevsky Prospect<br/>St. Petersburg, FL 33701</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">🕐</div>
                        <div class="info-text">
                            <h4>Hours</h4>
                            <p>Tuesday – Sunday: 5:00 PM – 11:00 PM<br/>Monday: Private Events Only</p>
                        </div>
                    </div>
                </div>

                <div class="info-section">
                    <h3>Reach Out</h3>
                    <div class="info-item">
                        <div class="info-icon">📞</div>
                        <div class="info-text">
                            <h4>Reservations</h4>
                            <p><a href="tel:+17275550199">(727) 555-0199</a></p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">✉️</div>
                        <div class="info-text">
                            <h4>Email</h4>
                            <p><a href="mailto:concierge@tsarstable.com">concierge@tsarstable.com</a></p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">🎉</div>
                        <div class="info-text">
                            <h4>Private Events</h4>
                            <p><a href="mailto:events@tsarstable.com">events@tsarstable.com</a></p>
                        </div>
                    </div>
                </div>

                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.1234567890123!2d-82.6403!3d27.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQ2JzAzLjQiTiA4MsKwMzgnMjUuMSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" loading="lazy"></iframe>
                </div>
            </div>
            <ContactFormSection/>
        </section>
    )
});

export default ContactGrid;