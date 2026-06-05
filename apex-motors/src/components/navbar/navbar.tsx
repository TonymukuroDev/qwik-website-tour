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

    useVisibleTask$(({ cleanup }) => {

        const handleScroll = () => {
            isSticky.value = window.scrollY > navRef.value!.getBoundingClientRect().height;
        }

        window.addEventListener('scroll', handleScroll);
        cleanup(() => window.removeEventListener('scroll', handleScroll));
    })
    return (
        <nav ref={navRef} class={`nav ${isSticky.value ? 'sticky' : ''}`}>
            <div class="nav__container">
                <Link href="/" class="logo">
                    <span class="logo-icon">A</span>
                    Apex Motors
                </Link>
                <ul class={{
                    'nav__links': true,
                    'hidden': !isSidebarOpen.value
                    }}>
                    <div class="logo">
                        <span class="logo-icon">A</span>
                        Apex Motors 
                    </div>
                    <img 
                        class="close-btn" 
                        onClick$={() => isSidebarOpen.value = false} 
                        src={assetsIcon.closeBtn.icon} 
                        alt={assetsIcon.closeBtn.title} 
                    /> 
                    <li
                    onClick$={() => isSidebarOpen.value = false}
                    ><Link href="/" class={{
                        'active': navItem.value === "/"
                    }}>Home</Link></li>
                    <li
                    onClick$={() => isSidebarOpen.value = false}
                    ><Link href="/inventory" class={{
                        'active': navItem.value === "/inventory/"
                    }}>Inventory</Link></li>
                    <li
                    onClick$={() => isSidebarOpen.value = false}
                    ><Link href="/financing" class={{
                        'active': navItem.value === "/financing/"
                    }}>Financing</Link></li>
                    <li
                    onClick$={() => isSidebarOpen.value = false}
                    ><Link href="/contact" class={{
                        'active': navItem.value === "/contact/"
                    }}>Contact</Link></li>
                </ul>
                <Link href="/inventory" class="nav__cta">Browse Cars</Link>
                <button class="mobile-menu-btn" onClick$={() => isSidebarOpen.value = true}>
                    <img src={assetsIcon.menuBtn.icon} alt={assetsIcon.menuBtn.title} />
                </button>
            </div>
        </nav>
    )
});

export default Navbar;