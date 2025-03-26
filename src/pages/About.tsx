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
import TestimonialSlider from '../components/TestimonialSlider';

const divStyle = {
    backgroundImage: `url(${img2})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // height: '685px',
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
            {/* about heading section  */}
            <div className="max-width">
                <div className="flex-col-reverse flex lg:flex-row justify-center items-center gap-10 px-5 lg:px-0 py-20">
                    <div className="lg:w-1/2">
                        <h1 className="text-[##1A1A1A] text-4xl  lg:text-[56px] font-semibold w-[95%] lg:leading-17 lg:mt-18">
                            100% Trusted Organic Food Store
                        </h1>
                        <p className="text-base sm:text-lg lg:text-[#666666] mt-4 lg:mt-8">
                            Morbi porttitor ligula in nunc varius sagittis.
                            Proin dui nisi, laoreet ut tempor ac, cursus vitae
                            eros. Cras quis ultricies elit. Proin ac lectus
                            arcu. Maecenas aliquet vel tellus at accumsan. Donec
                            a eros non massa vulputate ornare. Vivamus ornare
                            commodo ante, at commodo felis congue vitae.
                        </p>
                    </div>
                    <div className="lg:w-1/2 shrink-0">
                        <img
                            src={img1}
                            alt=""
                            className="object-contain  lg:h-[492px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
            {/* About Consumer Trust  */}
            <div
                className="bg-cover lg:bg-contain bg-no-repeat"
                style={divStyle}
            >
                <div className="max-width flex justify-end pt-20">
                    <div className="w-full xl:w-1/2 px-4">
                        <h3 className="text-4xl  lg:text-[56px] text-[#002603] font-semibold">
                            100% Trusted Organic Food Store
                        </h3>
                        <p className="pt-5 text-white lg:text-[#808080]">
                            Pellentesque a ante vulputate leo porttitor luctus
                            sed eget eros. Nulla et rhoncus neque. Duis non diam
                            eget est luctus tincidunt a a mi. Nulla eu eros
                            consequat tortor tincidunt feugiat.
                        </p>
                        <div className="pt-6 grid sm:grid-cols-2 gap-y-6 pb-20">
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
                                        <p className="text-white lg:text-[#1A1A1A] font-medium text-lg">
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
                {/* Deliver Section  */}
                <div className="max-width">
                    <div className="flex flex-col-reverse lg:flex-row  items-center lg:gap-7 sm:pt-20">
                        <div className="w-full lg:w-[40%] shrink-0 pt-5 lg:pt-20">
                            <h3 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A]">
                                We Delivered, You Enjoy Your Order.
                            </h3>
                            <p className="pt-4 sm:pt-6  text-[#666] leading-6">
                                Ut suscipit egestas suscipit. Sed posuere
                                pellentesque nunc, ultrices consectetur velit
                                dapibus eu. Mauris sollicitudin dignissim diam,
                                ac mattis eros accumsan rhoncus. Curabitur
                                auctor bibendum nunc eget elementum.
                            </p>
                            <ul className="pt-2 sm:pt-5">
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
                                className="bg-primary flex items-center justify-center py-2 md:py-4 rounded-[43px] text-white gap-4 w-[180px] sm:w-[192px] mt-4 sm:mt-8 mb-10 lg:mb-0 text-sm sm:text-base"
                                to="#"
                            >
                                Shop Now <FaArrowRight />
                            </Link>
                        </div>
                        <div className="mt-10 shrink-0 w-full lg:w-[60%]">
                            <img src={img3} alt="" className="object-contain" />
                        </div>
                    </div>
                </div>
                {/* Team Section */}
                <div className="bg-linear-to-r from-[#F2F2F2] to-[#FFFFFF] py-10 md:py-20">
                    <div className="max-width">
                        <h3 className="text-3xl md:text-5xl text-center font-semibold text-[#1A1A1A]">
                            Our Awesome Team
                        </h3>
                        <p className="pt-2 sm:pt-3 w-full md:w-1/2 mx-auto text-center text-sm sm:text-base text-[#666666] mb-0.5">
                            Pellentesque a ante vulputate leo porttitor luctus
                            sed eget eros. Nulla et rhoncus neque. Duis non diam
                            eget est luctus tincidunt a a mi.
                        </p>

                        <SimpleSlider />
                    </div>
                </div>
            </div>
            {/* Testimonial section  */}
            <div className="bg-[#F2F2F2]">
                <div className="max-width py-25">
                    <h3 className="text-[#1A1A1A] text-xl sm:text-3xl md:text-5xl font-semibold px-4 mb-0.5">
                        Client Testimonail
                    </h3>
                    <TestimonialSlider />
                </div>
            </div>
        </div>
    );
};

export default About;
