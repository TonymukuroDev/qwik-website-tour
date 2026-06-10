import { $, component$, useSignal } from '@builder.io/qwik';
import './faqSection.scss';


const FaqSection = component$(() => {
    const faqData = [
        {
            id: 1,
            question: "What is the dress code?",
            answer: "We maintain a smart elegant dress code. Jackets are preferred for gentlemen, though not strictly required. We kindly ask guests to avoid athletic wear, flip-flops, and shorts. The ambiance demands a certain refinement—dress as if meeting the Tsar."
        },
        {
            id: 2,
            question: "Do you accommodate dietary restrictions?",
            answer: "Absolutely. Our kitchen can accommodate vegetarian, vegan, gluten-free, and most allergy requirements with advance notice. Please indicate any dietary needs when making your reservation so our chef can prepare appropriate alternatives."
        },
        {
            id: 3,
            question: "Is there a corkage fee?",
            answer: "We allow one bottle per party at a corkage fee of $50. The wine must not be on our current list. We reserve the right to decline bottles that do not meet our quality standards."
        },
        {
            id: 4,
            question: "Can I host a private event?",
            answer: "Yes. The Amber Room accommodates up to 8 guests, while the Winter Hall can be reserved exclusively for up to 40. We also offer full restaurant buyouts on Mondays. Contact our events team for bespoke menu planning."
        },
        {
            id: 5,
            question: "Do you offer gift certificates?",
            answer: "Imperial dining experiences make exceptional gifts. Certificates are available in denominations from $200 and are presented in a hand-crafted wooden box with wax seal. Contact our concierge to arrange."
        },
        {
            id: 6,
            question: "What is your cancellation policy?",
            answer: "We require 24 hours notice for cancellations. No-shows or cancellations within 24 hours may be subject to a $50 per person fee. We understand plans change—please call us as soon as possible."
        }
    ];

    const openId = useSignal<number | null>(null);

    const toggleFaq = $((id: number): void => {
        openId.value = openId.value === id ? null : id; 
    })

    return (
        <section class="faq">
            <h2>Frequently Asked Questions</h2>
            {
                faqData.map(({id, question, answer}) => {

                    const isOpen = openId.value === id
                    return (
                        <div key={id} class={[
                            "faq__item",
                            isOpen ? "open" : ""
                            ]}>
                            <div class="faq__question" onClick$={() => toggleFaq(id)}>
                                <h3>{question}</h3>
                                <div class="faq__icon"></div>
                            </div>
                            <div class="faq__answer">
                                <p>{answer}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
});

export default FaqSection;