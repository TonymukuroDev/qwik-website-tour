
interface DishCardPropsInterface {
    name: string;
    description: string;
    imageUrl: string;
    imageAltText: string;
}

const DishCard = ({
    name,
    description,
    imageUrl,
    imageAltText
}: DishCardPropsInterface) => {
    return (
        <div class="dish-card">
            <img src={imageUrl} alt={imageAltText} />
            <div class="dish-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default DishCard;