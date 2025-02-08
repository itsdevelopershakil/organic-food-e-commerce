import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import TopbarDropdown from '../../components/TopbarDropdown';

type TopbarProps = {
    theme?: 'primary' | 'dark' | 'white';
};

const Topbar: React.FC<TopbarProps> = ({ theme }) => {
    const [selectedLang, setSelectedLang] = useState('ENG');
    const [selectedCurr, setSelectedCurr] = useState('USD');
    const [openDropdownLang, setOpenDropdownLang] = useState(false);
    const [openDropdownCurr, setOpenDropdownCurr] = useState(false);

    const languages = ['ENG', 'BN'];
    const currency = ['USD', 'BDT'];

    return (
        <div
            className={`${
                theme === 'primary'
                    ? 'bg-[#EDF2EE]'
                    : theme === 'dark'
                    ? 'bg-[#333]'
                    : 'bg-white'
            }`}
        >
            <div className="max-width">
                <div
                    className={`flex justify-between py-4 text-xs md:text-sm ${
                        theme === 'primary'
                            ? 'text-bottle-green'
                            : theme === 'dark'
                            ? 'text-[#b3b3b3]'
                            : 'text-[#666]'
                    }`}
                >
                    <div className="flex gap-1 items-center">
                        <CiLocationOn className="text-xl" />
                        <span>
                            Store Location: Lincoln- 344, Illinois, Chicago, USA
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <div
                            className="flex gap-2 items-center cursor-pointer relative group"
                            onClick={() =>
                                setOpenDropdownLang(!openDropdownLang)
                            }
                        >
                            {selectedLang} <IoIosArrowDown />
                            <TopbarDropdown
                                open={openDropdownLang}
                                options={languages}
                                onChange={(value) => setSelectedLang(value)}
                            />
                        </div>
                        <div
                            className="flex gap-2 items-center cursor-pointer relative group"
                            onClick={() =>
                                setOpenDropdownCurr(!openDropdownCurr)
                            }
                        >
                            {selectedCurr} <IoIosArrowDown />
                            <TopbarDropdown
                                open={openDropdownCurr}
                                options={currency}
                                onChange={(value) => setSelectedCurr(value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
