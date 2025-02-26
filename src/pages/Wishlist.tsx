import { FaShoppingCart } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import product1 from '../assets/images/products/product1.png';
import product2 from '../assets/images/products/product2.png';
import product3 from '../assets/images/products/product3.png';
import Divider from '../components/Divider';
import { addToCart } from '../redux/features/header/cartSlice';
import { RootState } from '../redux/store';

interface CartItem {
    title: string;
    image: string;
    price: string;
    quantity: number;
    subtotal: number;
}

interface WishlistItem {
    title: string;
    image: string;
    price: string;
    stock: boolean;
}

const Wishlist = () => {
    const dispatch = useDispatch();
    const { cartItems }: { cartItems: CartItem[] } = useSelector(
        (state: RootState) => state.cart
    );

    const data: WishlistItem[] = [
        {
            title: 'Green Capsicum',
            image: product1,
            price: '14.99',
            stock: true,
        },
        {
            title: 'Chinese Cabbage',
            image: product2,
            price: '45.00',
            stock: true,
        },
        {
            title: 'Fresh Sujapuri Mango',
            image: product3,
            price: '09.00',
            stock: false,
        },
    ];

    const handleAddToCart = (item: WishlistItem) => {
        dispatch(
            addToCart({
                image: item.image,
                title: item.title,
                price: item.price,
                quantity: 1,
                subtotal: Number(item.price),
            })
        );
    };

    return (
        <div>
            <div className="max-width">
                <div>
                    <h1 className="text-center text-[32px] font-semibold text-[#1a1a1a] py-8">
                        My Wishlist
                    </h1>
                    <div className="border border-[#E6E6E6] rounded-lg">
                        <div className="hidden sm:grid grid-cols-12 py-4 px-6 border-b border-[#E6E6E6] uppercase text-[#808080]">
                            <p className="col-span-5 text-center md:text-left">
                                Product
                            </p>
                            <p className="col-span-2 lg:col-span-3">price</p>
                            <p className="col-span-5 lg:col-span-4">
                                Stock Status
                            </p>
                        </div>
                        {data.map((item: WishlistItem, index) => (
                            <div key={index} className="px-6">
                                <div className="grid grid-cols-12 py-4 items-center">
                                    <div className="flex flex-col md:flex-row sm:gap-3 lg:gap-5 md:justify-start items-center col-span-5">
                                        <img
                                            src={item.image}
                                            alt={`product-${index}`}
                                            className="size-16 sm:size-20 lg:size-25 object-cover"
                                        />
                                        <p className="text-[#1a1a1a] text-center text-xs sm:text-sm md:text-base">
                                            {item.title}
                                        </p>
                                    </div>
                                    <p className="col-span-2 lg:col-span-3 text-[#1a1a1a] font-medium text-sm sm:text-base">
                                        ${item.price}
                                    </p>
                                    <div className="col-span-5 lg:col-span-4 flex items-center gap-3 md:gap-6">
                                        <div className="hidden sm:block">
                                            {item.stock ? (
                                                <p className="text-[#2C742F] bg-[#20B52633] py-1 px-2 rounded-sm md:text-sm text-xs text-center ">
                                                    In Stock
                                                </p>
                                            ) : (
                                                <p className="text-[#EA4B48] bg-[#EA4B4833] py-1 px-2 rounded-sm md:text-sm text-xs text-center ">
                                                    Out of Stock
                                                </p>
                                            )}
                                        </div>

                                        {cartItems.some(
                                            (cartItem) =>
                                                cartItem.title === item.title
                                        ) ? (
                                            <button
                                                className="hidden sm:flex gap-1 items-center ml-auto text-xs md:text-sm  text-primary border border-primary px-4 py-2 md:px-4 shrink-0 md:py-4 rounded-[43px] cursor-pointer disabled:bg-[#F2F2F2] disabled:text-[#B3B3B3]"
                                                disabled={!item.stock}
                                                onClick={() =>
                                                    handleAddToCart(item)
                                                }
                                            >
                                                Added to Cart{' '}
                                                <TiTick className="text-primary" />
                                            </button>
                                        ) : (
                                            <button
                                                className="hidden sm:block ml-auto text-xs md:text-sm bg-primary text-white px-4 py-2 md:px-8 shrink-0 md:py-4 rounded-[43px] cursor-pointer disabled:bg-[#F2F2F2] disabled:text-[#B3B3B3]"
                                                disabled={!item.stock}
                                                onClick={() =>
                                                    handleAddToCart(item)
                                                }
                                            >
                                                Add to Cart
                                            </button>
                                        )}

                                        {cartItems.some(
                                            (cartItem) =>
                                                cartItem.title === item.title
                                        ) ? (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleAddToCart(item)
                                                }
                                                className="ml-auto sm:hidden"
                                                disabled={!item.stock}
                                            >
                                                <TiTick className="text-[#b3b3b3] size-6" />
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleAddToCart(item)
                                                }
                                                className="ml-auto sm:hidden"
                                                disabled={!item.stock}
                                            >
                                                <FaShoppingCart className="text-[#b3b3b3]" />
                                            </button>
                                        )}
                                        <div className="ml-auto size-6 border border-[#CCCCCC] rounded-full flex justify-center items-center cursor-pointer">
                                            <RxCross2 />
                                        </div>
                                    </div>
                                </div>
                                <Divider className="bg-[#e6e6e6] h-px w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
