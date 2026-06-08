import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import './footer.scss';

const Footer = component$(() => {
    return (
        <footer class="footer">
            <div class="footer__grid">
                <div class="footer__brand">
                    <div class="logo">
                        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                        NexusCom
                    </div>
                    <p>Next generation connectivity for everyone. Building the digital future, one connection at a time.</p>
                </div>
                <div class="footer__links">
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/">Careers</Link></li>
                        <li><Link href="/">Press</Link></li>
                        <li><Link href="/">Investors</Link></li>
                    </ul>
                </div>
                <div class="footer__links">
                    <h4>Services</h4>
                    <ul>
                        <li><Link href="/plans">Mobile Plans</Link></li>
                        <li><Link href="/business">Business</Link></li>
                        <li><Link href="/network">5G Network</Link></li>
                        <li><Link href="/support">Support</Link></li>
                    </ul>
                </div>
                <div class="footer__links">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link href="/">Privacy Policy</Link></li>
                        <li><Link href="/">Terms of Service</Link></li>
                        <li><Link href="/">Cookie Policy</Link></li>
                        <li><Link href="/">Accessibility</Link></li>
                    </ul>
                </div>
            </div>
            <div class="footer__bottom">
                <p>© 2026 NexusCom. All rights reserved.</p>
                <div class="social-links">
                    <Link href="/">𝕏</Link>
                    <Link href="/">in</Link>
                    <Link href="/">f</Link>
                    <Link href="/">ig</Link>
                </div>
            </div>
        </footer>
    )
});


export default Footer;