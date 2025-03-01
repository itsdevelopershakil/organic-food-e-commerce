import img1 from '../assets/images/about/about1.png';
import img2 from '../assets/images/about/about2.png';
import deliveryImg from '../assets/images/about/delivery.png';
import headPhoneImg from '../assets/images/about/headphones.png';
import leafImg from '../assets/images/about/leaf.png';
import packageImg from '../assets/images/about/package.png';
import shoppingBagImg from '../assets/images/about/shopping-bag.png';
import starsImg from '../assets/images/about/stars.png';

import Breadcrumbs from '../components/Breadcrumbs';

const divStyle = {
    backgroundImage: `url(${img2})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // height: '120px',
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
                <div className="max-width flex justify-end py-20">
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
                        <div className="pt-6 grid grid-cols-2 gap-y-6">
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
        </div>
    );
};

export default About;
