import { useState } from 'react';

const PaymentMethod = () => {
    const [selected, setSelected] = useState('cod');

    const radioOptions = [
        { id: 'cod', label: 'Cash on Delivery' },
        { id: 'paypal', label: 'Paypal' },
        { id: 'amazon', label: 'Amazon Pay' },
    ];

    return (
        <div className="">
            <h4 className="text-[#1A1A1A] text-xl font-medium pt-6">
                Payment Method
            </h4>
            <div className="my-4 space-y-2.5">
                {radioOptions.map((method) => (
                    <label
                        key={method.id}
                        className="flex gap-1.5 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selected === method.id}
                            onChange={() => setSelected(method.id)}
                            className="hidden"
                        />
                        <div
                            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                                selected === method.id
                                    ? 'border-primary'
                                    : 'border-[#CCCCCC]'
                            }`}
                        >
                            {selected === method.id && (
                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                            )}
                        </div>
                        <span className="text-[#4D4D4D] text-sm">
                            {method.label}
                        </span>
                    </label>
                ))}{' '}
            </div>

            {/* <div className="flex gap-1 text-[#4D4D4D]">
                <input
                    type="radio"
                    id="cod"
                    name="payment_method"
                    defaultValue="cod"
                    className=" border-white"
                />

                <label htmlFor="cod">Cash on Delivery</label>
            </div>
            <div className="flex gap-1 text-[#4D4D4D]">
                <input
                    type="radio"
                    id="paypal"
                    name="payment_method"
                    defaultValue="paypal"
                    className=" border-white"
                />
                <label htmlFor="paypal">Paypal</label>
            </div>
            <div className="flex gap-1 text-[#4D4D4D]">
                <input
                    type="radio"
                    id="amazon-pay"
                    name="payment_method"
                    defaultValue="amazon-pay"
                    className=" border-white"
                />
                <label htmlFor="amazon-pay">Amazon Pay</label>
            </div> */}
        </div>
    );
};

export default PaymentMethod;
