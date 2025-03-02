import { Link } from 'react-router-dom';
import img1 from '../assets/images/about/about1.png';
import img2 from '../assets/images/about/about2.png';
import img3 from '../assets/images/about/about3.png';
import deliveryImg from '../assets/images/about/delivery.png';
import headPhoneImg from '../assets/images/about/headphones.png';
import leafImg from '../assets/images/about/leaf.png';
import packageImg from '../assets/images/about/package.png';
import shoppingBagImg from '../assets/images/about/shopping-bag.png';
import starsImg from '../assets/images/about/stars.png';

import { FaArrowRight } from 'react-icons/fa';
import Tickmark from '../assets/images/about/Tickmark';
import Breadcrumbs from '../components/Breadcrumbs';
import SimpleSlider from '../components/SimpleSlider';

const divStyle = {
    backgroundImage: `url(${img2})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    height: '685px',
    width: '100%',
};

const About = () => {
    const data = [
        {
            img: leafImg,
            title: '100% Organic food',
            desc: '100% healthy & Fresh food.',
        },
        {
            img: headPhoneImg,
            title: 'Great Support 24/7',
            desc: 'Instant access to Contact',
        },
        {
            img: starsImg,
            title: 'Customer Feedback',
            desc: 'Our happy customer',
        },
        {
            img: shoppingBagImg,
            title: '100% Sucure Payment',
            desc: 'We ensure your money is save',
        },
        {
            img: deliveryImg,
            title: 'Free Shipping',
            desc: 'Free shipping with discount',
        },
        {
            img: packageImg,
            title: '100% Organic food',
            desc: '100% healthy & Fresh food.',
        },
    ];
    return (
        <div>
            <Breadcrumbs />
            <div className="max-width">
                <div className="flex gap-10 py-20">
                    <div className="w-1/2">
                        <h1 className="text-[##1A1A1A] text-[56px] font-semibold w-[95%] leading-17 mt-18">
                            100% Trusted Organic Food Store
                        </h1>
                        <p className="text-lg text-[#666666] mt-8">
                            Morbi porttitor ligula in nunc varius sagittis.
                            Proin dui nisi, laoreet ut tempor ac, cursus vitae
                            eros. Cras quis ultricies elit. Proin ac lectus
                            arcu. Maecenas aliquet vel tellus at accumsan. Donec
                            a eros non massa vulputate ornare. Vivamus ornare
                            commodo ante, at commodo felis congue vitae.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img
                            src={img1}
                            alt=""
                            className="object-contain  h-[492px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-no-repeat" style={divStyle}>
                <div className="max-width flex justify-end pt-20">
                    <div className="w-1/2 px-4">
                        <h3 className=" text-[56px] text-[#002603] font-semibold">
                            100% Trusted Organic Food Store
                        </h3>
                        <p className="pt-5 text-[#808080]">
                            Pellentesque a ante vulputate leo porttitor luctus
                            sed eget eros. Nulla et rhoncus neque. Duis non diam
                            eget est luctus tincidunt a a mi. Nulla eu eros
                            consequat tortor tincidunt feugiat.
                        </p>
                        <div className="pt-6 grid grid-cols-2 gap-y-6 pb-20">
                            {data.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <div className="size-18  shrink-0 rounded-full bg-[#00B2071A] flex justify-center items-center">
                                        <img
                                            className="size-10"
                                            src={value.img}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[#1A1A1A] font-medium text-lg">
                                            {value.title}
                                        </p>
                                        <p className="text-sm text-[#808080]">
                                            {value.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#E5E5E5]">
                <div className="max-width">
                    <div className="flex items-center gap-7 pt-20">
                        <div className="w-[552px] pt-20">
                            <h3 className="text-5xl font-semibold text-[#1A1A1A]">
                                We Delivered, You Enjoy Your Order.
                            </h3>
                            <p className="pt-6  text-[#666] leading-6">
                                Ut suscipit egestas suscipit. Sed posuere
                                pellentesque nunc, ultrices consectetur velit
                                dapibus eu. Mauris sollicitudin dignissim diam,
                                ac mattis eros accumsan rhoncus. Curabitur
                                auctor bibendum nunc eget elementum.
                            </p>
                            <ul className="pt-5">
                                <li className="flex items-center gap-2">
                                    <div className="shrink-0 size-5 rounded-full bg-[#00B2071A] flex justify-center items-center">
                                        <Tickmark />
                                    </div>
                                    <p className="text-sm text-[#666] py-2">
                                        Sed in metus pellentesque.
                                    </p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="shrink-0 size-5 rounded-full bg-[#00B2071A] flex justify-center items-center">
                                        <Tickmark />
                                    </div>
                                    <p className="text-sm text-[#666] py-2">
                                        Fusce et ex commodo, aliquam nulla
                                        efficitur, tempus lorem.
                                    </p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="shrink-0 size-5 rounded-full bg-[#00B2071A] flex justify-center items-center">
                                        <Tickmark />
                                    </div>
                                    <p className="text-sm text-[#666] py-2">
                                        Maecenas ut nunc fringilla erat varius.
                                    </p>
                                </li>
                            </ul>
                            <Link
                                className="bg-primary flex items-center justify-center py-4 rounded-[43px] text-white gap-4 w-[192px] mt-8 "
                                to="#"
                            >
                                Shop Now <FaArrowRight />
                            </Link>
                        </div>
                        <div className="mt-10">
                            <img
                                src={img3}
                                alt=""
                                className="h-[606px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-linear-to-r from-[#F2F2F2] to-[#FFFFFF]">
                    <div className="max-width">
                        <h3>Our Awesome Team</h3>
                        <p>
                            Pellentesque a ante vulputate leo porttitor luctus
                            sed eget eros. Nulla et rhoncus neque. Duis non diam
                            eget est luctus tincidunt a a mi.
                        </p>

                        <SimpleSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
