
interface TestimonialCardPropsInterface {
    author: {
        name: string;
        title: string;
        avatar: string;
    };
    rating: number;
    text: string;
}

const TestimonialCard = ({author, rating, text}: TestimonialCardPropsInterface) => {
    return (
        <div class="testimonial-card">
            <div class="testimonial-stars">{"★".repeat(rating)}</div>
            <div class="testimonial-text">"{text}</div>
            <div class="testimonial-author">
                <div class="author-avatar">{author.avatar}</div>
                <div class="author-info">
                    <h4>{author.name}</h4>
                    <p>{author.title}</p>
                </div>
            </div>
        </div>
    )
};


export default TestimonialCard;