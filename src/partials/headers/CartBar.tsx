import { RxCross2 } from 'react-icons/rx';
import apple from '../../assets/images/products/apple.png';
import orange from '../../assets/images/products/orange.png';
import Divider from '../../components/Divider';

type cartbarProps = {
    close: (value: boolean) => void;
    open: boolean;
};

const CartBar: React.FC<cartbarProps> = ({ close, open }) => {
    return (
        <div
            className={`fixed block top-0 left-0 w-full duration-100 h-screen bg-black/50 z-[999999] ${
                open ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <div
                className={`h-full w-full max-w-[456px] bg-white ml-auto relative duration-300 p-10 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-between">
                    <h3 className="text-xl">Shopping Card (2)</h3>
                    <button
                        className=""
                        type="button"
                        onClick={() => close(false)}
                    >
                        <RxCross2 className="cursor-pointer text-[#1a1a1a] size-4" />
                    </button>
                </div>
                <div className="pt-3">
                    <div>
                        <div className="flex gap-2 items-center mb-3">
                            <div className="w-[120px]">
                                <img src={orange} alt="" />
                            </div>
                            <div className="">
                                <p>Fresh Indian Orange</p>
                                <p>1 kg X 12.00</p>
                            </div>
                            <button className="ml-auto cursor-pointer w-6 h-6 rounded-full border flex justify-center items-center">
                                <RxCross2 />
                            </button>
                        </div>
                        <Divider className="h-px w-full bg-[#E6E6E6]" />
                    </div>
                    <div>
                        <div className="flex gap-2 items-center mb-3">
                            <div className="w-[120px]">
                                <img src={apple} alt="" />
                            </div>
                            <div>
                                <p>Green Apple</p>
                                <p>1 kg X 14.00</p>
                            </div>
                            <button className="ml-auto cursor-pointer w-6 h-6 rounded-full border flex justify-center items-center">
                                <RxCross2 />
                            </button>
                        </div>
                        <Divider className="h-px w-full bg-[#E6E6E6]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBar;
