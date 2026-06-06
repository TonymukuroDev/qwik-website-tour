import { component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import './navbar.scss';
import { assetsIcon } from "~/assets/assets";

const Navbar = component$(() => {
    const isSidebarOpen = useSignal(false);
    const navRef = useSignal<HTMLElement>();
    const isSticky = useSignal<boolean>(false);
    const location = useLocation();
    const navItem = useSignal<string>("/");

    useTask$(({track}) => {
        track(() => location.url.pathname);
        console.log(location.url.pathname);
        navItem.value = location.url.pathname;
        
    });

    useVisibleTask$(({ cleanup }) => {

        const handleScroll = () => {
            isSticky.value = window.scrollY > navRef.value!.getBoundingClientRect().height;
        }

        window.addEventListener('scroll', handleScroll);
        cleanup(() => window.removeEventListener('scroll', handleScroll));
    })

    return (
        <nav ref={navRef} class={`nav ${isSticky.value ? 'sticky' : ''}`}>
            <Link href="/" class="nav__logo">TSAR'S TABLE</Link>
            <ul class={[
                "nav__links",
                isSidebarOpen.value ? "" : "hidden"
            ]}>
                <div class="nav__logo">TSAR'S TABLE</div>
                <img 
                    class="close-btn" 
                    onClick$={() => isSidebarOpen.value = false} 
                    src={assetsIcon.btnClose.icon} 
                    alt={assetsIcon.btnClose.title} 
                /> 
                <li><Link href="/" class={{
                        'active': navItem.value === "/"
                    }}>Home</Link></li>
                <li><Link href="/menu" class={{
                        'active': navItem.value === "/menu"
                    }}>Menu</Link></li>
                <li><Link href="/experience" class={{
                        'active': navItem.value === "/experience"
                    }}>Experience</Link></li>
                <li><Link href="/reservations" class={{
                        'active': navItem.value === "/reservations"
                    }}>Reservations</Link></li>
                <li><Link href="/contact" class={{
                        'active': navItem.value === "/contact"
                    }}>Contact</Link></li>
            </ul>
            <button class="mobile-menu-btn" onClick$={() => isSidebarOpen.value = true}>
                <img src={assetsIcon.btnMenu.icon} alt={assetsIcon.btnMenu.title} />
            </button>
        </nav>
    )
});

export default Navbar;