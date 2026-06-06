import { component$ } from "@builder.io/qwik";
import './footer.scss';
import { Link } from "@builder.io/qwik-city";

const Footer = component$(() => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__grid">
                    <div class="footer__brand">
                        <Link href="/" class="logo">
                            <span class="logo-icon">A</span>
                            Apex Motors
                        </Link>
                        <p>Premium automotive retail since 2008. We curate the world's finest vehicles and deliver an unmatched buying experience.</p>
                        <div class="footer__social">
                            <a href="#">f</a>
                            <a href="#">in</a>
                            <a href="#">ig</a>
                            <a href="#">yt</a>
                        </div>
                    </div>
                    <div class="footer__links">
                        <h4>Inventory</h4>
                        <ul>
                            <li><Link href="/inventory">All vehicles</Link></li>
                            <li><Link href="/inventory">New Arrivals</Link></li>
                            <li><Link href="/inventory">Certified Pre-Owned</Link></li>
                            <li><Link href="/inventory">Electric Vehicles</Link></li>
                        </ul>
                    </div>
                    <div class="footer__links">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/financing">Financing</Link></li>
                            <li><Link href="/financing">Trade-In Valuation</Link></li>
                            <li><Link href="/financing">Service Center</Link></li>
                            <li><Link href="/financing">Extended Warranty</Link></li>
                        </ul>
                    </div>
                    <div class="footer__links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/contact">About Us</Link></li>
                            <li><Link href="/contact">Careers</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/contact">Press</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer__bottom">
                    <p>© 2024 Apex Motors. All rights reserved.</p>
                    <p>Designed with precision. Built for performance.</p>
                </div>
            </div>
        </footer>
    )
});

export default Footer;