import { component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { assetsIcon } from "~/assets/assets";
import './navbar.scss';


const Navbar = component$(() => {
    const location = useLocation();
    const navItem = useSignal<string>("/");
    const isSidebarOpen = useSignal(false);
    const navRef = useSignal<HTMLElement>();
    const isSticky = useSignal<boolean>(false);

    useTask$(({track}) => {
        track(() => location.url.pathname);
        console.log(location.url.pathname);
        
        navItem.value = location.url.pathname;
    });

    useVisibleTask$(({cleanup}) => {
        const handleScroll = () => {
            isSticky.value = window.scrollY > navRef.value!.getBoundingClientRect().height;
        }

        window.addEventListener('scroll', handleScroll);
        cleanup(() => window.removeEventListener('scroll', handleScroll));
    });
    
    return (
        <nav class={[
            "nav",
            isSticky.value ? 'sticky' : ''
            ]}>
            <div class="logo">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                NexusCom
            </div>
            <ul class={[
                "nav__links",
                isSidebarOpen.value ? '' : 'hidden'
                ]}>
                <div class="logo">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    NexusCom
                </div>
                <img onClick$={() => isSidebarOpen.value = false} src={assetsIcon.closeBtn.icon} alt={assetsIcon.closeBtn.title} class="close-btn" />
                <li><Link href="/" class={{
                    'active': navItem.value === '/'
                }}>Home</Link></li>
                <li><Link href="/plans" class={{
                    'active': navItem.value === '/plans/'
                }}>Plans</Link></li>
                <li><Link href="/network" class={{
                    'active': navItem.value === '/network/'
                }}>Network</Link></li>
                <li><Link href="/business" class={{
                    'active': navItem.value === '/business/'
                }}>Business</Link></li>
                <li><Link href="/support" class={{
                    'active': navItem.value === '/support/'
                }}>Support</Link></li>
            </ul>
            <Link href="/plans" class="cta-btn">Get Started</Link>
            <button class="mobile-menu-btn" onClick$={() => isSidebarOpen.value = true}>
                <img src={assetsIcon.menuBtn.icon} alt={assetsIcon.menuBtn.title} />
            </button>
        </nav>
    )
});

export default Navbar;