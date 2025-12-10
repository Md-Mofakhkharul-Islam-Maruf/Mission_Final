import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOption = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise)
    return (
        <div>
            <h2 className='text-4xl my-4 text-center'>My Pricing Cards</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    pricingData.map((pricing,index) => <PricingCard key={index} pricing={pricing}></PricingCard>)
                }

            </div>

        </div>
    );
};

export default PricingOption;