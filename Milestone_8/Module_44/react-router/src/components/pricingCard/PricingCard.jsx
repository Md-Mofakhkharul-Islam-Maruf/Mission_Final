import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingCard = ({ pricing }) => {
    const { name, price, features } = pricing;

    return (
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-amber-300 
                        hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col my-10">   {/* ADD THIS */}

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800">{name}</h3>

            {/* Price */}
            <h4 className="text-xl font-semibold text-amber-600 mt-1">
                $ {price} / month
            </h4>

            {/* Features */}
            <div className="mt-5 bg-amber-50 p-5 rounded-2xl space-y-3">
                {
                    features.map((feature, index) => (
                        <p key={index} className="flex items-start gap-2 text-gray-700">
                            <CircleCheckBig className="text-amber-600" />
                            {feature}
                        </p>
                    ))
                }
            </div>

            {/* Button */}
            <button className="bg-amber-500 hover:bg-amber-600 
                               text-white py-2 rounded-xl font-semibold mt-auto">
                Join Now
            </button>
        </div>
    );
};

export default PricingCard;
