import React from 'react';
import { useParams } from 'react-router-dom';

const CoffeeCards = () => {

    const {category} = useParams();

    return (
        <div>
            Coffee Cards..... {category}
        </div>
    );
};

export default CoffeeCards;