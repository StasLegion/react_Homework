import './featureCard.css';

const FeatureCard = ({image, title, text }) => {
    return (
        <div className="featureCard">
            <img src={image} alt={title} className="featureImage" />
            <h3 className="featureTitle">{title}</h3>
            <p className="featureText">{text}</p>
        </div>
    );
};

export default FeatureCard;
