import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import greenCapsicum from '../assets/images/green-capsicum.png';
import redCapsicum from '../assets/images/red-capsicum.png';
import Divider from '../components/Divider';
// Define the CartItem type
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

// Initial cart data
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

const Test: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>(initialCart);

    // Function to update quantity
    const updateQuantity = (id: number, change: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    // Function to remove an item from the cart
    // const removeItem = (id: number) => {
    //     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    // };

    return (
        <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-md bg-white">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 border-b py-3 font-semibold text-gray-600">
                <div className="col-span-2">PRODUCT</div>
                <div>PRICE</div>
                <div>QUANTITY</div>
                <div>SUBTOTAL</div>
            </div>

            {/* Cart Items */}
            {cart.map((item) => (
                <div key={item.id} className="p-4">
                    <div className="grid grid-cols-6 gap-4 items-center">
                        {/* Product Name & Image */}
                        <div className="col-span-2 flex gap-4 items-center">
                            <img
                                src={item.image}
                                alt=""
                                className="w-25 h-25"
                            />
                            {item.name}
                        </div>

                        {/* Price */}
                        <div>$14.00</div>

                        {/* Quantity Controls */}
                        <div>
                            <div className="w-[124px] border border-[#E6E6E6] rounded-[170px] p-2 text-[#1a1a1a] flex justify-between items-center">
                                <button
                                    className="w-8 h-8 rounded-full bg-[#F2F2F2] cursor-pointer"
                                    onClick={() => updateQuantity(item.id, -1)}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="w-8 h-8 rounded-full bg-[#F2F2F2] cursor-pointer"
                                    onClick={() => updateQuantity(item.id, 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Subtotal */}
                        <div>${(item.price * item.quantity).toFixed(2)}</div>

                        {/* Remove Button (Now properly aligned) */}
                        <div className="flex justify-center">
                            <button
                                className="w-6 h-6 border rounded-full border-[#CCCCCC] flex justify-center items-center cursor-pointer"
                                onClick={() =>
                                    setCart(
                                        cart.filter(
                                            (cartItem) =>
                                                cartItem.id !== item.id
                                        )
                                    )
                                }
                            >
                                <RxCross2 className="text-[#666666]" />
                            </button>
                        </div>
                    </div>
                    <Divider className="mx-4 h-[1px] bg-[#E6E6E6]" />
                </div>
            ))}

            {/* Bottom Buttons */}
            <div className="flex justify-between items-center mt-6">
                <Link to="/" className="bg-gray-200 px-4 py-2 rounded-full">
                    Return to shop
                </Link>
                <button className="bg-gray-300 px-6 py-2 rounded-full">
                    Update Cart
                </button>
            </div>
        </div>
    );
};

export default Test;
