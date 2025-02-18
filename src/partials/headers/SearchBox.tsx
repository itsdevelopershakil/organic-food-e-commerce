import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import apple from '../../assets/images/products/apple.png';
import orange from '../../assets/images/products/orange.png';
import Divider from '../../components/Divider';

type searchBoxProps = {
    close: (value: boolean) => void;
    open: boolean;
};

const SearchBox: React.FC<searchBoxProps> = ({ close, open }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue) {
            console.log(searchValue);
        } else {
            toast.error('Please enter value!');
        }
    };

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

    return (
        <div
            className={`fixed top-0 left-0 bg-black/50 h-screen w-full z-[99999999] flex flex-col items-center gap-10 p-2 py-16 md:p-10 text-[#1a1a1a] ${
                open ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <button
                type="button"
                className="absolute top-[20px] right-1/2 translate-x-1/2 md:right-[40px] size-6 md:size-8 bg-white rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => close(false)}
            >
                <RxCross2 className="md:text-xl" />
            </button>
            <form
                className="flex justify-center items-center shrink-0 w-full max-w-[650px] h-[40px] md:h-[50px] text-xs md:text-sm rounded-lg overflow-hidden bg-white shadow-lg shadow-gray-500"
                onSubmit={handleSearch}
            >
                <input
                    type="text"
                    className=" outline-none p-3 w-full"
                    placeholder="Search Products..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                    className="flex gap-1 items-center p-4 bg-primary text-white font-medium"
                    type="submit"
                >
                    <FaSearch className=" text-white" /> Search
                </button>
            </form>
            <div className="bg-white text-[#1a1a1a] w-full max-w-[650px] rounded-lg p-4 overflow-y-auto scrollbar-sm">
                {data.length > 0 &&
                    data.map((v, i) => (
                        <div key={i}>
                            <div className="flex gap-2 items-center mb-3">
                                <div className="w-[90px] md:w-[120px] shrink-0">
                                    <img
                                        className="w-full"
                                        src={v.image}
                                        alt=""
                                    />
                                </div>
                                <div className="text-xs md:text-sm">
                                    <Link
                                        to="product-1"
                                        className="text-[#1A1A1A] hover:text-primary duration-300"
                                    >
                                        {v.title}
                                    </Link>
                                    <p>
                                        <span className="text-[#808080]">
                                            {v.quantity} kg X
                                        </span>
                                        <span className="font-bold">
                                            {v.price}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <Divider className="h-px w-full bg-[#E6E6E6]" />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SearchBox;
