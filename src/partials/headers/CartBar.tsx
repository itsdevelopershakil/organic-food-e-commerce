import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import apple from '../../assets/images/products/apple.png';
import orange from '../../assets/images/products/orange.png';
import Divider from '../../components/Divider';
import {
    removeCartItem,
    setCartItems,
    setCartOpen,
} from '../../redux/features/header/cartSlice';
import { RootState } from '../../redux/store';

type DataObject = {
    image: string;
    title: string;
    quantity: string;
    price: string;
};

const CartBar = () => {
    const dispatch = useDispatch();
    const { open, cartItems } = useSelector((state: RootState) => state.cart);

    const data = [
        {
            image: orange,
            title: 'Fresh Indian Orange',
            quantity: '1',
            price: '12.00',
        },
        {
            image: apple,
            title: 'Green Apple',
            quantity: '1',
            price: '14.00',
        },
        {
            image: apple,
            title: 'Green Apple',
            quantity: '1',
            price: '14.00',
        },
        {
            image: apple,
            title: 'Green Apple',
            quantity: '1',
            price: '14.00',
        },
        {
            image: apple,
            title: 'Green Apple',
            quantity: '1',
            price: '14.00',
        },
        {
            image: apple,
            title: 'Green Apple',
            quantity: '1',
            price: '14.00',
        },
        {
            image: apple,
            title: 'Green Apple',
            quantity: '1',
            price: '14.00',
        },
    ];

    useEffect(() => {
        dispatch(setCartItems(data));
    }, []);

    const handleRemove = (id: number) => {
        dispatch(removeCartItem(id));
        toast.success('Item Removed Successfully!');
    };

    const totalPrice = cartItems.reduce((acc, curr) => {
        return acc + parseInt(curr.price);
    }, 0);

    return (
        <div
            className={`fixed block top-0 left-0 w-full duration-100 h-screen bg-black/50 z-[999999] ${
                open ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <div
                className={`h-full max-w-[300px] md:max-w-[456px] flex flex-col bg-white ml-auto relative duration-300 p-10 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-between w-full">
                    <h3 className="text-lg md:text-xl">
                        Shopping Card ({cartItems.length})
                    </h3>
                    <button
                        className=""
                        type="button"
                        onClick={() => dispatch(setCartOpen(false))}
                    >
                        <RxCross2 className="cursor-pointer text-[#1a1a1a] size-4" />
                    </button>
                </div>
                <div className="w-full overflow-y-auto scrollbar-hidden">
                    <div className="pt-3">
                        {cartItems.map(
                            (
                                { image, price, quantity, title }: DataObject,
                                i: number
                            ) => (
                                <div key={i}>
                                    <div className="flex gap-2 items-center mb-3">
                                        <div className="w-[90px] md:w-[120px] shrink-0">
                                            <img
                                                className="w-full"
                                                src={image}
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-xs md:text-sm">
                                            <p className="text-[#1A1A1A]">
                                                {title}
                                            </p>
                                            <p>
                                                <span className="text-[#808080]">
                                                    {quantity} kg X
                                                </span>
                                                <span className="font-bold">
                                                    {price}
                                                </span>
                                            </p>
                                        </div>
                                        <button
                                            className="ml-auto cursor-pointer w-6 h-6 rounded-full border flex justify-center items-center shrink-0"
                                            type="button"
                                            onClick={() => handleRemove(i)}
                                        >
                                            <RxCross2 />
                                        </button>
                                    </div>
                                    <Divider className="h-px w-full bg-[#E6E6E6]" />
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="mt-auto w-full">
                    <div className="flex justify-between text-[#1a1a1a] py-6">
                        <p>
                            {cartItems.length} Product
                            {cartItems.length > 1 ? 's' : ''}
                        </p>
                        <p className="font-semibold">
                            $ {totalPrice.toFixed(2)}
                        </p>
                    </div>
                    <div>
                        <Link
                            className="block bg-primary rounded-[43px] py-2 md:py-4 text-sm md:text-base text-center text-white font-semibold mb-3"
                            to="/checkout"
                        >
                            Checkout
                        </Link>
                        <Link
                            className="block bg-[#56AC591A] rounded-[43px] py-2 md:py-4 text-sm md:text-base text-center text-primary font-semibold mb-3"
                            to="/checkout"
                        >
                            Go To Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBar;
