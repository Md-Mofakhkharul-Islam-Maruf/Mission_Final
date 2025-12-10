import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOption = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise)
    return (
        <div>
            <h2 className='text-4xl hidden md:flex justify-center'>My Pricing Cards</h2>
            <div className='md:grid grid-cols-3 gap-4'>
                {
                    pricingData.map((pricing,index) => <PricingCard key={index} pricing={pricing}></PricingCard>)
                }

            </div>

        </div>
    );
};

export default PricingOption;