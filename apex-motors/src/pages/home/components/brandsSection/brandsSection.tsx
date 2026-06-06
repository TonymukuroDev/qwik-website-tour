import { component$ } from "@builder.io/qwik";
import './brandsSection.scss';

const BrandsSection = component$(() => {

    const carBrands = [
        "Porsche",
        "Mercedes-Benz",
        "BMW",
        "Audi",
        "Lexus",
        "Tesla",
        "Land Rover",
        "Jaguar",
        "Maserati",
        "Bentley"
    ];
    return (
        <section class="brands">
            <div class="container">
                <div class="section-header">
                    <h2>Premium <span class="gold-text">Brands</span></h2>
                    <p>Authorized dealer for the world's finest automotive manufacturers</p>
                </div>
                <div class="brands__scroll">
                    {
                        carBrands.map((brand) => (
                            <div class="brand-item">{brand}</div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
});

export default BrandsSection;