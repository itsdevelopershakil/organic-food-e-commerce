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
        price: 1444.0,
        quantity: 5,
        image: greenCapsicum, // Replace with actual image URL
    },
    {
        id: 2,
        name: 'Red Capsicum',
        price: 1444.0,
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
                    <div className="lg:flex">
                        <div className="w-full lg:w-2/3 rounded-lg border border-[#E6E6E6] lg:m-6">
                            <div>
                                <div className="text-sm sm:text-base grid grid-cols-12 gap-4 *:font-medium *:text-left p-4 text-[#808080] border-b border-[#E6E6E6]">
                                    <p className="col-span-5">PRODUCT </p>
                                    <p className="col-span-3 sm:col-span-2">
                                        PRICE{' '}
                                    </p>
                                    <p className="col-span-3 sm:col-span-2">
                                        QUANTITY{' '}
                                    </p>
                                    <p className="hidden sm:block col-span-2">
                                        SUBTOTAL
                                    </p>
                                    <p className="col-span-1"></p>
                                </div>

                                <div>
                                    {cart.map((item) => (
                                        <div key={item.id} className="*p-4">
                                            <div className="grid grid-cols-12 gap-3 lg:gap-4 items-center p-3 lg:p-5">
                                                <div className="relative col-span-5 flex flex-col  sm:flex-row sm:gap-4 items-center">
                                                    <div className=" absolute top-0 left-0 sm:hidden md:col-span-1">
                                                        <div className="w-6 h-6 border rounded-full border-[#CCCCCC] flex justify-center items-center cursor-pointer">
                                                            <RxCross2 className="text-[#666666]" />
                                                        </div>
                                                    </div>
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        className="w-14 h-14 md:w-20 md:h-20 lg:w-25 lg:h-25"
                                                    />
                                                    <p className="text-xs sm:text-sm">
                                                        {item.name}
                                                    </p>
                                                </div>

                                                <div className="col-span-2 sm:col-span-1 md : p -1 text-sm md:text-base">
                                                    ${item.price.toFixed(2)}
                                                </div>
                                                <div className="col-span-5 sm:col-span-3 px-10 md:px-14 lg:px-12">
                                                    <div className="w-[90px] md:w-[120px] border border-[#E6E6E6] rounded-[170px] p-1 md:p-2 text-[#1a1a1a] flex justify-between items-center text-sm md:text-base">
                                                        <button
                                                            className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F2F2F2] cursor-pointer"
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
                                                            className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F2F2F2] cursor-pointer"
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
                                                <div className="hidden sm:block col-span-2 lg:p-6">
                                                    ${item.price.toFixed(2)}
                                                </div>
                                                <div className="hidden sm:block col-span-1">
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
                            <div className="flex flex-col sm:flex-row gap-4 justify-between py-4 px-5">
                                <Link
                                    to="#"
                                    className="text-sm text-[#4D4D4D] hover:bg-[#4d4d4d] hover:text-[#f2f2f2] duration-200 font-semibold py-3 px-8 bg-[#F2F2F2] rounded-[43px] cursor-pointer text-center"
                                >
                                    Return to shop
                                </Link>
                                <Link
                                    to="#"
                                    className="text-sm text-[#4D4D4D] hover:bg-[#4d4d4d] hover:text-[#f2f2f2] duration-200 font-semibold py-3 px-8 bg-[#F2F2F2] rounded-[43px] cursor-pointer text-center"
                                >
                                    Update Cart
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3  my-6 lg:mx-6">
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
                                <button className="mt-5 bg-primary w-full text-center text-white font-semibold rounded-[43px] cursor-pointer hover:border hover:border-gray-300 hover:text-primary hover:bg-white hover:shadow-sm duration-300 p-4 text-sm sm:text-base">
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <div className="w-full gap-6 lg:w-2/3 rounded-lg border border-[#E6E6E6] lg:m-6 p-6 flex flex-col md:flex-row items-center">
                            <p className="text-xl font-medium shrink-0">
                                Coupon Code
                            </p>
                            <form
                                // onSubmit={handleSubscribe}
                                className="w-full flex bg-white rounded-[43px] border border-[#e6e6e6] grow"
                            >
                                <input
                                    type="email"
                                    // value={inputValue}
                                    // onChange={handleInput}
                                    className="h-full outline-none bg-transparent px-5 w-[calc(100%_-_100px)] sm:w-auto sm:grow text-sm py-4 sm:py-[14px] shrink"
                                    placeholder="Enter Code"
                                />
                                <button
                                    type="submit"
                                    className="h-full shrink-0 rounded-[43px] bg-[#333333] text-white text-sm px-5 sm:px-10 cursor-pointer py-4 sm:py-[14px] border "
                                >
                                    Apply Coupon
                                </button>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/3  my-6 mx-6"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
