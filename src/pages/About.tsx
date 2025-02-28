import img1 from '../assets/images/about/about1.png';
import Breadcrumbs from '../components/Breadcrumbs';

const About = () => {
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
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
