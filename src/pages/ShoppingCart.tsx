import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import greenCapsicum from '../assets/images/green-capsicum.png';
import redCapsicum from '../assets/images/red-capsicum.png';
import Breadcrumbs from '../components/Breadcrumbs';

const ShoppingCart = () => {
    return (
        <>
            <Breadcrumbs />
            <div>
                <div className="max-width">
                    <h1 className="text-[32px] font-semibold mt-10 mb-8 text-center">
                        My Shopping Cart
                    </h1>
                    <div className="w-2/3">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="*:font-medium *:text-left *:p-4 text-[#808080] border-b border-[#E6E6E6]">
                                    <th>PRODUCT </th>
                                    <th>PRICE </th>
                                    <th>QUANTITY </th>
                                    <th>SUBTOTAL</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:p-4 border-b border-[#E6E6E6]">
                                    <td className="flex gap-3 items-center">
                                        <img src={greenCapsicum} alt="" />
                                        Green Capsicum
                                    </td>
                                    <td>$14.00</td>
                                    <td>
                                        <div className="w-[124px] border border-[#E6E6E6] rounded-[170px] p-2 text-[#1a1a1a] flex justify-between items-center">
                                            <button className="w-8 h-8 rounded-full bg-[#F2F2F2]">
                                                -
                                            </button>
                                            <span>5</span>
                                            <button className="w-8 h-8 rounded-full bg-[#F2F2F2]">
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td>$70.00</td>
                                    <td>
                                        <div className="w-6 h-6 border rounded-full border-[#CCCCCC] flex justify-center items-center cursor-pointer">
                                            <RxCross2 className="text-[#666666]" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="*:p-4 border-b border-[#E6E6E6]">
                                    <td className="flex gap-3 items-center">
                                        <img src={redCapsicum} alt="" />
                                        Red Capsicum
                                    </td>
                                    <td className="font-medium">$14.00</td>
                                    <td>
                                        <div className="w-[124px] border border-[#E6E6E6] rounded-[170px] p-2 text-[#1a1a1a] flex justify-between items-center">
                                            <button className="w-8 h-8 rounded-full bg-[#F2F2F2]">
                                                -
                                            </button>
                                            <span>5</span>
                                            <button className="w-8 h-8 rounded-full bg-[#F2F2F2]">
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="font-medium">$70.00</td>
                                    <td>
                                        <div className="w-6 h-6 border rounded-full border-[#CCCCCC] flex justify-center items-center cursor-pointer">
                                            <RxCross2 className="text-[#666666]" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-between py-4 px-5">
                            <Link
                                to="#"
                                className="text-sm text-[#4D4D4D] font-semibold py-3 px-8 bg-[#F2F2F2] rounded-[43px] cursor-pointer"
                            >
                                Return to shop
                            </Link>
                            <Link
                                to="#"
                                className="text-sm text-[#4D4D4D] font-semibold py-3 px-8 bg-[#F2F2F2] rounded-[43px] cursor-pointer"
                            >
                                Update Cart
                            </Link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
