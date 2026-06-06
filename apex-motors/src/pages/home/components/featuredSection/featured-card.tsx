import { Link } from "@builder.io/qwik-city";
import { formatPrice } from "~/utils/formatting";

interface FeaturedCardPropsInterface {
    img: string;
    title: string;
    link: string;
    badge: {
        type: string;
        text: string;
    };
    specs: {
        power: string;
        year: number;
        fuel: string;
    };
    pricing: {
        currentPrice: number;
        monthlyPayment: number | null;
        originalPrice: number | null;
    };
}


const FeaturedCard = ({
    img,
    title,
    link,
    badge,
    specs,
    pricing
}: FeaturedCardPropsInterface) => {

    const formattedPrices = {
        currentPrice: formatPrice(pricing.currentPrice),
        monthlyPayment: pricing.monthlyPayment ? formatPrice(pricing.monthlyPayment) : null,
        originalPrice: pricing.originalPrice ? formatPrice(pricing.originalPrice) : null,
    }
    return (
        <Link href="/vehicle-detail" class="featured-card">
            <div class="featured-img">
                <div class="featured-badges">
                    <span class={`badge badge-${badge.type}`}>{badge.text}</span>
                </div>
                <img src={img} alt={title} />
            </div>
            <div class="featured-info">
                <h3>{title}</h3>
                <div class="featured-meta">
                    <span>⚡ {specs.power}</span>
                    <span>📅 {specs.year}</span>
                    <span>⛽ {specs.fuel}</span>
                </div>
                <div class="featured-price">
                    <div>
                        <h4>${formattedPrices.currentPrice}</h4>
                        {formattedPrices.monthlyPayment && <p>or ${formattedPrices.monthlyPayment}/mo</p>}
                        {formattedPrices.originalPrice && <p class="original-price">${formattedPrices.originalPrice}</p>}
                    </div>
                    <span class="btn-open">View →</span>
                </div>
            </div>
        </Link>
    )
};

export default FeaturedCard;