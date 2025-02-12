import PhoneIcon from '../../assets/icons/PhoneIcon';
import Navbar from './Navbar';

type BottombarProps = {
    theme?: 'dark' | 'white';
};

const BottomBar: React.FC<BottombarProps> = ({ theme }) => {
    return (
        <div
            className={`${
                theme === 'dark'
                    ? 'bg-[#1a1a1a] text-[#999]'
                    : 'bg-white text-[#666]'
            }  hidden md:block`}
        >
            <div className="max-width">
                <div className="flex justify-between py-4">
                    <Navbar />
                    <div className="flex gap-2 items-center">
                        <PhoneIcon
                            className={`size-6 lg:size-7 ${
                                theme === 'dark'
                                    ? 'stroke-white'
                                    : '!stroke-[#1a1a1a]'
                            }`}
                        />
                        <span
                            className={`text-sm ${
                                theme === 'dark' ? 'text-white' : ''
                            }`}
                        >
                            (219) 555-0114
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
