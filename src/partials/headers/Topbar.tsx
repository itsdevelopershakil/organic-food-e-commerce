import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';

const Topbar = () => {
    const [selectedLang, setSelectedLang] = useState('ENG');

    return (
        <div className="bg-[#EDF2EE]">
            <div className="max-width">
                <div className="flex justify-between py-4 text-sm text-bottle-green">
                    <div className="flex gap-2 items-center">
                        <CiLocationOn className="text-xl" />
                        <span>
                            Store Location: Lincoln- 344, Illinois, Chicago, USA
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-2 items-center cursor-pointer relative group">
                            {selectedLang} <IoIosArrowDown />{' '}
                            <div className="absolute top-[20px] left-[-10px] bg-white shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
                                <button
                                    className="border-b border-gray-300 px-4 py-2 cursor-pointer hover:text-red-500 transition duration-300"
                                    onClick={() => setSelectedLang('ENG')}
                                >
                                    ENG
                                </button>
                                <button
                                    className="border-b border-gray-300 px-4 py-2 cursor-pointer hover:text-red-500 transition duration-300"
                                    onClick={() => setSelectedLang('BN')}
                                >
                                    BN
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center cursor-pointer">
                            USD <IoIosArrowDown />{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
