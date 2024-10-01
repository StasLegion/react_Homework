import React, { useEffect, useState } from 'react';
import FeatureCard from "./components/FeatureCard/FeatureCard";
import featuresData from "./features.json";

const Feature = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, []);
    return (
        <div className="Feature">
            <h3>Возможности Ed Space</h3>
            <div className="feature-list">
                {features.map((feature, index) => (
                    <FeatureCard
                    key={index}
                    image={feature.image}
                    title={feature.title}
                    text={feature.text}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feature;