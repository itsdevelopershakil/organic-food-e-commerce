import Breadcrumbs from '../components/Breadcrumbs';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CountryList from '../components/CountryList';
import Divider from '../components/Divider';
import PaymentMethod from '../components/PaymentMethod';
import { RootState } from '../redux/store';

const Checkout = () => {
    const { cartItems } = useSelector((state: RootState) => state.cart);
    const [subTotal, setSubTotal] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        streetAddress: '',
        country: '',
        states: '',
        zipCode: '',
        email: '',
        phone: '',
        shipToDifferentAdd: false,
        additionalInfo: '',
    });

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleCountryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        console.log(event.target.value);
        setFormData({ ...formData, country: event.target.value });
        console.log(formData);
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    useEffect(() => {
        const subtotals = cartItems.reduce(
            (acc, item) => acc + item.subtotal,
            0
        );
        setSubTotal(subtotals);
    }, [cartItems]);

    return (
        <div>
            <Breadcrumbs />
            <div className="max-width">
                <div className="lg:flex p-8 text-[#1A1A1A]">
                    <div className="w-full lg:w-2/3  my-6">
                        <h3 className="text-2xl font-medium">
                            Billing Information
                        </h3>
                        <div className="grid grid-cols-12 gap-x-4 mt-5">
                            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                <p className="text-sm pb-2">First Name</p>
                                <input
                                    value={formData.firstName}
                                    name="firstName"
                                    onChange={handleChange}
                                    className="outline-0 border border-[#E6E6E6] rounded-[6px] py-2 px-4 w-full"
                                    type="text"
                                    placeholder="Your first name"
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 pt-4 sm:pt-0">
                                <p className="text-sm pb-2">Last Name</p>
                                <input
                                    name="lastName"
                                    onChange={handleChange}
                                    value={formData.lastName}
                                    className="outline-0 border border-[#E6E6E6] rounded-[6px] py-2 px-4 w-full"
                                    type="text"
                                    placeholder="Your last name"
                                />
                            </div>
                            <div className="col-span-12 md:col-span-4 pt-4 md:pt-0">
                                <p className="text-sm pb-2">
                                    Company Name{' '}
                                    <span className="text-[#999999]">
                                        (optional)
                                    </span>
                                </p>
                                <input
                                    value={formData.companyName}
                                    name="companyName"
                                    onChange={handleChange}
                                    className="outline-0 border border-[#E6E6E6] rounded-[6px] py-2 px-4 w-full"
                                    type="text"
                                    placeholder="Company name"
                                />
                            </div>
                        </div>
                        <div className="pt-4">
                            <p className="text-sm mb-2">Street Address</p>
                            <input
                                name="streetAddress"
                                onChange={handleChange}
                                value={formData.streetAddress}
                                className="w-full border border-[#E6E6E6] outline-0 py-3 px-4  rounded-[6px]"
                                type="text"
                                placeholder="Enter Your Address"
                            />
                        </div>
                        <div className="grid grid-cols-12 gap-x-4 pt-4">
                            <div className="col-span-12 md:col-span-4">
                                <CountryList
                                    country={formData.country}
                                    handleChange={handleCountryChange}
                                />
                            </div>
                            <div className="col-span-6 md:col-span-4">
                                <p className="text-sm py-2">States</p>
                                <input
                                    name="states"
                                    value={formData.states}
                                    onChange={handleChange}
                                    type="text"
                                    className="outline-0 border border-[#E6E6E6] w-full md:w-1/2 py-3 px-4 rounded-[6px]"
                                />
                            </div>
                            <div className="col-span-6 md:col-span-4">
                                <p className="text-sm py-2">Zip Code</p>
                                <input
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Zip Code"
                                    className="outline-0 border border-[#E6E6E6] w-full md:w-1/2 py-3 px-4 rounded-[6px]"
                                />
                            </div>
                        </div>
                        <div className="py-4 grid gap-x-4 grid-cols-12">
                            <div className="col-span-12 md:col-span-6">
                                <p className="mb-2 text-sm">Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full outline-0 border border-[#E6E6E6] py-3 px-4 rounded-[6px]"
                                />
                            </div>
                            <div className="col-span-12 md:col-span-6 pt-4 md:pt-0">
                                <p className="mb-2 text-sm">Phone</p>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Phone number"
                                    className="w-full outline-0 border border-[#E6E6E6] py-3 px-4 rounded-[6px]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-1 items-center pt-2 pb-8">
                            <input
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        shipToDifferentAdd:
                                            !formData.shipToDifferentAdd,
                                    })
                                }
                                className="size-5 cursor-pointer"
                                type="checkbox"
                            />
                            <p className="text-sm text-[#4D4D4D]">
                                Ship to a different address
                            </p>
                        </div>
                        <Divider className="w-full h-px bg-[#E6E6E6]" />

                        <div>
                            <h3 className="text-2xl font-medium text-[#1a1a1a] pt-8 pb-5">
                                Additional Info
                            </h3>
                            <p className="text-sm text-[#1a1a1a] pb-2">
                                Order Notes (Optional)
                            </p>
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleTextArea}
                                className="w-full outline-0 border border-[#E6E6E6] h-[100px] px-4 py-3 rounded-[6px]"
                                placeholder="Notes about your order, e.g. special notes for delivery"
                            ></textarea>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3  my-6 lg:mx-6">
                        <div className="border border-[#E6E6E6] p-6 rounded-lg text-[#1a1a1a]">
                            <h3 className="text-xl font-medium mb-3">
                                Order Summery
                            </h3>

                            {cartItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center text-sm text-[#1A1A1A]"
                                >
                                    <div className="flex gap-1.5 items-center">
                                        <img
                                            className="size-10 sm:size-15 object-contain"
                                            src={item.image}
                                            alt=""
                                        />
                                        <p className="text-xs sm:text-sm">
                                            {item.title}
                                        </p>
                                        <p className="text-xs sm:text-sm">
                                            x{item.quantity}
                                        </p>
                                    </div>
                                    <p className="font-medium pl-2 sm:pl-0">
                                        ${item.subtotal.toFixed(2)}
                                    </p>
                                </div>
                            ))}

                            <div className="flex justify-between mt-2 py-3 border-b border-[#e6e6e6] text-sm">
                                <p className="text-[#4D4D4D]">Subtotal: </p>
                                <p className="font-semibold">
                                    ${subTotal.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex justify-between mt-2 py-3 border-b border-[#e6e6e6] text-sm">
                                <p className="text-[#4D4D4D]">Shipping </p>
                                <p>Free</p>
                            </div>
                            <div className="flex justify-between mt-2 py-3 border-[#e6e6e6] text-sm">
                                <p className="text-[#4D4D4D]">Total</p>
                                <p className="font-semibold">
                                    ${subTotal.toFixed(2)}
                                </p>
                            </div>
                            <PaymentMethod />
                            <button
                                className="block mt-5 bg-primary w-full text-center text-white font-semibold rounded-[43px] cursor-pointer hover:border hover:border-gray-300 hover:text-primary hover:bg-white hover:shadow-sm duration-300 p-4 text-sm sm:text-base"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
