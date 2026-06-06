import { component$ } from "@builder.io/qwik";
import './footer.scss';

const Footer = component$(() => {
    return (
        <footer class="footer">
            <div class="footer__crest">T</div>
            <div class="footer__info">
                <div class="footer__col">
                    <h4>Location</h4>
                    <p>42 Nevsky Prospect<br/>St. Petersburg, FL 33701</p>
                </div>
                <div class="footer__col">
                    <h4>Hours</h4>
                    <p>Tue-Sun: 5pm - 11pm<br/>Monday: Private Events</p>
                </div>
                <div class="footer__col">
                    <h4>Contact</h4>
                    <p>(727) 555-0199<br/>concierge@tsarstable.com</p>
                </div>
            </div>
            <p class="copyright">© 2026 TSAR'S TABLE. ALL RIGHTS RESERVED.</p>
        </footer>
    )
});

export default Footer;