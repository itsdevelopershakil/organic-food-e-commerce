import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import greenCapsicum from '../assets/images/green-capsicum.png';
import redCapsicum from '../assets/images/red-capsicum.png';
import Breadcrumbs from '../components/Breadcrumbs';
import Divider from '../components/Divider';

// Define the CartItem type
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const initialCart: CartItem[] = [
    {
        id: 1,
        name: 'Green Capsicum',
        price: 14.0,
        quantity: 5,
        image: greenCapsicum, // Replace with actual image URL
    },
    {
        id: 2,
        name: 'Red Capsicum',
        price: 14.0,
        quantity: 5,
        image: redCapsicum, // Replace with actual image URL
    },
];

const ShoppingCart = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCart);

    const updateQuantity = (id: number, change: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    return (
        <>
            <Breadcrumbs />
            <div>
                <div className="max-width">
                    <h1 className="text-[32px] font-semibold mt-10 mb-8 text-center">
                        My Shopping Cart
                    </h1>
                    <div className="flex">
                        <div className="w-2/3 rounded-lg border border-[#E6E6E6] m-6">
                            <div>
                                <div className="grid grid-cols-12 gap-4 *:font-medium *:text-left p-4 text-[#808080] border-b border-[#E6E6E6]">
                                    <p className="col-span-5">PRODUCT </p>
                                    <p className="col-span-2">PRICE </p>
                                    <p className="col-span-2">QUANTITY </p>
                                    <p className="col-span-2">SUBTOTAL</p>
                                    <p className="col-span-1"></p>
                                </div>

                                <div>
                                    {cart.map((item) => (
                                        <div key={item.id} className="*p-4">
                                            <div className="grid grid-cols-12 gap-4 items-center p-5">
                                                <div className="col-span-5 flex gap-4 items-center">
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        className="w-25 h-25"
                                                    />
                                                    {item.name}
                                                </div>

                                                <div className="col-span-1 p-1">
                                                    {item.price.toFixed(2)}
                                                </div>
                                                <div className="col-span-3 px-13">
                                                    <div className="w-[120px] border border-[#E6E6E6] rounded-[170px] p-2 text-[#1a1a1a] flex justify-between items-center">
                                                        <button
                                                            className="w-8 h-8 rounded-full bg-[#F2F2F2] cursor-pointer"
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    -1
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <span>
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            className="w-8 h-8 rounded-full bg-[#F2F2F2] cursor-pointer"
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 p-4">
                                                    ${item.price.toFixed(2)}
                                                </div>
                                                <div className="col-span-1">
                                                    <div className="w-6 h-6 border rounded-full border-[#CCCCCC] flex justify-center items-center cursor-pointer">
                                                        <RxCross2 className="text-[#666666]" />
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider className="mx-4 h-[1px] bg-[#E6E6E6]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between py-4 px-5">
                                <Link
                                    to="#"
                                    className="text-sm text-[#4D4D4D] hover:bg-[#4d4d4d] hover:text-[#f2f2f2] duration-200 font-semibold py-3 px-8 bg-[#F2F2F2] rounded-[43px] cursor-pointer"
                                >
                                    Return to shop
                                </Link>
                                <Link
                                    to="#"
                                    className="text-sm text-[#4D4D4D] hover:bg-[#4d4d4d] hover:text-[#f2f2f2] duration-200 font-semibold py-3 px-8 bg-[#F2F2F2] rounded-[43px] cursor-pointer"
                                >
                                    Update Cart
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/3  my-6">
                            <div className="border border-[#E6E6E6] p-6 rounded-lg text-[#1a1a1a]">
                                <h3 className="text-xl font-medium">
                                    Cart Total
                                </h3>
                                <div className="flex justify-between mt-2 p-3 border-b border-[#e6e6e6]">
                                    <p className="text-[#4D4D4D]">Subtotal: </p>
                                    <p>$84.00</p>
                                </div>
                                <div className="flex justify-between mt-2 p-3 border-b border-[#e6e6e6]">
                                    <p className="text-[#4D4D4D]">Shipping </p>
                                    <p>Free</p>
                                </div>
                                <div className="flex justify-between mt-2 p-3 border-[#e6e6e6]">
                                    <p className="text-[#4D4D4D]">Total</p>
                                    <p className="font-semibold">$84.00</p>
                                </div>
                                <button className="mt-5 bg-primary w-full text-center text-white font-semibold rounded-[43px] cursor-pointer hover:border hover:border-gray-300 hover:text-primary hover:bg-white hover:shadow-sm duration-300 p-4">
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-2/3 rounded-lg border border-[#E6E6E6] m-6 p-6 flex items-center">
                            <p className="w-1/4 text-xl font-medium text-[#1a1a1a]">
                                Coupon Code
                            </p>
                            <div className="relative w-3/4">
                                <input
                                    type="text"
                                    className="w-full px-6 py-3 rounded-[46px] outline-none border border-[#E6E6E6]"
                                    placeholder="Enter Code"
                                />
                                <button className="absolute right-0 px-6 py-3 bg-[#333] text-white rounded-[43px] cursor-pointer hover:shadow-md hover:bg-white hover:border border-gray-200 hover:text-[#333] duration-300">
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                        <div className="w-1/3"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
