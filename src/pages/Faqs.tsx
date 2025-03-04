import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import faqImg from '../assets/images/faqImg.png';
import Breadcrumbs from '../components/Breadcrumbs';

const Faqs = () => {
    const [data, setData] = useState([
        {
            title: 'In elementum est a ante sodales iaculis.',
            desc: 'Morbi porttitor ligula in nunc variussagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae. ',
            open: true,
        },
        {
            title: 'Etiam lobortis massa eu nibh tempor elementum.',
            desc: 'Morbi porttitor ligula in nunc variussagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
            open: false,
        },
        {
            title: 'In elementum est a ante sodales iaculis.',
            desc: 'Morbi porttitor ligula in nunc variussagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
            open: false,
        },
        {
            title: 'Aenean quis quam nec lacus semper dignissim.',
            desc: 'Morbi porttitor ligula in nunc variussagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
            open: false,
        },
        {
            title: 'Nulla tincidunt eros id tempus accumsan.',
            desc: 'Morbi porttitor ligula in nunc variussagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
            open: false,
        },
    ]);

    const handleData = (index: number) => {
        setData((prevData) =>
            prevData.map((item, i) => ({
                ...item,
                open: i === index ? !item.open : false,
            }))
        );
        console.log(data);
    };

    return (
        <div>
            <Breadcrumbs />
            <div className="max-width">
                <div className="pt-10 lg:pt-20 flex-col-reverse flex lg:flex-row gap-10 sm:gap-18">
                    <div className="w-full lg:w-[40%] lg:pt-34 pb-5 shrink-0">
                        <h2 className="text-3xl md:text-5xl font-semibold md:leading-12 text-center sm:text-left">
                            Welcome, Let&apos;s Talk About Our Ecobazar
                        </h2>
                        <ul className="pt-2 md:pt-8">
                            {data.map((value, i) => (
                                <li
                                    className={`rounded-md mt-2 ${
                                        value.open
                                            ? 'border border-[#84D187] bg-white'
                                            : 'bg-[#F2F2F2]'
                                    }`}
                                    key={i}
                                >
                                    <div
                                        className={`flex justify-between p-4 items-center text-[#1a1a1a] ${
                                            value.open
                                                ? 'border-b border-[#84D187]'
                                                : ''
                                        }${
                                            value.open
                                                ? 'border-b border-[#84D187]'
                                                : ''
                                        }`}
                                    >
                                        <p className="font-medium">
                                            {value.title}
                                        </p>
                                        <button
                                            type="button"
                                            className="cursor-pointer size-8 bg-white rounded-full flex justify-center items-center shrink-0"
                                            onClick={() => handleData(i)}
                                        >
                                            <HiPlus />
                                        </button>
                                    </div>
                                    <p
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            value.open
                                                ? 'max-h-screen opacity-100 p-4'
                                                : 'max-h-0 opacity-0 p-0'
                                        } text-[#666666]`}
                                    >
                                        {value.desc}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full sm:w-2/3  mx-auto lg:w-[60%] shrink-0">
                        <img src={faqImg} className="object-contain" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;
