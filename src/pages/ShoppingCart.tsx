import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Divider from '../components/Divider';
import {
    removeCartItem,
    updateCartItemQuantity,
} from '../redux/features/header/cartSlice';
import { RootState } from '../redux/store';

// Define the CartItem type
const ShoppingCart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: RootState) => state.cart);
    const [subTotal, setSubTotal] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const updateQuantity = (index: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateCartItemQuantity({ index, quantity }));
        } else {
            dispatch(removeCartItem(index)); // Remove item if quantity is 0
            toast.success('Item Removed!');
        }
    };

    useEffect(() => {
        const subtotals = cartItems.reduce(
            (acc, item) => acc + item.subtotal,
            0
        );
        setSubTotal(subtotals);
    }, [cartItems]);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleRemove = (index: number) => {
        dispatch(removeCartItem(index));
        toast.success('Item Removed!');
    };

    const handleCouponForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue) {
            console.log(inputValue);
        } else {
            toast.error('Please enter valid Coupon!');
        }
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
                                {cartItems.length === 0 && (
                                    <div className="text-[#666] text-center p-20">
                                        No Items found
                                    </div>
                                )}

                                <div className="">
                                    {cartItems.map((item, index) => (
                                        <div key={index} className="*p-4">
                                            <div className="grid grid-cols-12 gap-3 lg:gap-4 items-center p-3 lg:p-5">
                                                <div className="relative col-span-5 flex flex-col  sm:flex-row sm:gap-4 items-center">
                                                    <div className=" absolute top-0 left-0 sm:hidden md:col-span-1">
                                                        <button
                                                            className="w-6 h-6 border rounded-full border-[#CCCCCC] flex justify-center items-center cursor-pointer"
                                                            type="button"
                                                            onClick={() =>
                                                                handleRemove(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            <RxCross2 className="text-[#666666]" />
                                                        </button>
                                                    </div>
                                                    <img
                                                        src={item.image}
                                                        alt=""
                                                        className="w-14 h-14 md:w-20 md:h-20 lg:w-25 lg:h-25"
                                                    />
                                                    <p className="text-xs sm:text-sm">
                                                        {item.title}
                                                    </p>
                                                </div>

                                                <div className="col-span-2 sm:col-span-1 md : p -1 text-sm md:text-base">
                                                    ${item.price}
                                                </div>
                                                <div className="col-span-5 sm:col-span-3 px-6 sm:px-12 md:px-14 lg:px-12">
                                                    <div className="w-[80px] sm:w-[90px] md:w-[120px] border border-[#E6E6E6] rounded-[170px] p-1 md:p-2 text-[#1a1a1a] flex justify-between items-center text-sm md:text-base">
                                                        <button
                                                            className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F2F2F2] cursor-pointer"
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    index,
                                                                    item.quantity -
                                                                        1
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
                                                                    index,
                                                                    Number(
                                                                        item.quantity
                                                                    ) + 1
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="hidden sm:block col-span-2 lg:p-6">
                                                    ${item.subtotal.toFixed(2)}
                                                </div>
                                                <div className="hidden sm:block col-span-1">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemove(index)
                                                        }
                                                        className="w-6 h-6 border rounded-full border-[#CCCCCC] flex justify-center items-center cursor-pointer"
                                                    >
                                                        <RxCross2 className="text-[#666666]" />
                                                    </button>
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
                                    <p className="font-semibold">
                                        ${subTotal.toFixed(2)}
                                    </p>
                                </div>
                                <div className="flex justify-between mt-2 p-3 border-b border-[#e6e6e6]">
                                    <p className="text-[#4D4D4D]">Shipping </p>
                                    <p>Free</p>
                                </div>
                                <div className="flex justify-between mt-2 p-3 border-[#e6e6e6]">
                                    <p className="text-[#4D4D4D]">Total</p>
                                    <p className="font-semibold">
                                        ${subTotal.toFixed(2)}
                                    </p>
                                </div>
                                <Link
                                    to="/checkout"
                                    className="block mt-5 bg-primary w-full text-center text-white font-semibold rounded-[43px] cursor-pointer hover:border hover:border-gray-300 hover:text-primary hover:bg-white hover:shadow-sm duration-300 p-4 text-sm sm:text-base"
                                >
                                    Proceed To Checkout
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <div className="w-full gap-6 lg:w-2/3 rounded-lg border border-[#E6E6E6] lg:m-6 p-6 flex flex-col md:flex-row items-center">
                            <p className="text-xl font-medium shrink-0">
                                Coupon Code
                            </p>
                            <form
                                onSubmit={handleCouponForm}
                                className="w-full flex bg-white rounded-[43px] border border-[#e6e6e6] grow"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInput}
                                    className="outline-none bg-transparent px-5 w-[calc(100%_-_100px)] sm:w-auto sm:grow text-sm py-4 sm:py-[16px] shrink"
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
