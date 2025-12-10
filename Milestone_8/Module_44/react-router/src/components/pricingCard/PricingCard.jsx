import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingCard = ({ pricing }) => {
    const { name, price, features } = pricing
    return (
        <div className='text-center bg-amber-500 rounded-3xl p-5 space-y-2'>
            <h3 className='text-start text-2xl'>{name}</h3>
            <h4 className='text-start'>$  {price} month</h4>
            <div className='space-y-2 bg-amber-300 p-5 rounded-2xl'>
                {
                    features.map(feature => <p className='flex text-start gap-2'><CircleCheckBig/>{feature}</p>)
                }
            </div>
        </div>
    );
};

export default PricingCard;