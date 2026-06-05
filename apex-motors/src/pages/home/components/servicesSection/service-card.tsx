
interface ServiceCardPropsInterface {
    icon: string;
    title: string;
    description: string
} 

const ServiceCard = ({icon, title, description}: ServiceCardPropsInterface) => {
    return (
        <div class="service-card">
            <div class="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
};

export default ServiceCard;