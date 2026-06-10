import { Signal, useSignal, useVisibleTask$ } from "@builder.io/qwik";


export function useElementReveal(): (Signal<HTMLElement | undefined> | Signal<boolean>)[] {
    const isVisible = useSignal(false);
    const elementRef = useSignal<HTMLElement>();
    
    useVisibleTask$(({ cleanup}) => {
        const currentElement = elementRef.value;

        if(!currentElement) return;

        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(currentElement);
            }
        }, {
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        });

        observer.observe(currentElement);
        cleanup(() => observer.disconnect());
    })

    return [ elementRef, isVisible]
}