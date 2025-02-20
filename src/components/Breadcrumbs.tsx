import { GoHome } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import bgImage from '../assets/images/Breadcrumbs.png';

const divStyle = {
    backgroundImage: `url(${bgImage})`,
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: '120px',
    width: '100%',
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    console.log(pathnames);

    return (
        <div style={divStyle} className="bg-no-repeat h-[80px]  md:h-[120px]">
            <div className="max-width">
                <div className="text-[#999999] flex items-center px-6 lg:px-0 py-6 md:py-12 gap-2 md:gap-3">
                    <Link to="/">
                        <GoHome />
                    </Link>

                    {pathnames.length > 0 && <MdKeyboardArrowRight />}

                    {/* Generate dynamic links */}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames
                            .slice(0, index + 1)
                            .join('/')}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <div
                                key={index}
                                className="flex items-center gap-2 md:gap-3"
                            >
                                <Link
                                    to={routeTo}
                                    className={
                                        isLast
                                            ? 'text-primary cursor-default'
                                            : ''
                                    }
                                >
                                    {name.charAt(0).toUpperCase() +
                                        name.slice(1)}
                                </Link>
                                {!isLast && <MdKeyboardArrowRight />}
                            </div>
                        );
                    })}
                    {/* <MdKeyboardArrowRight />
                    <Link to="/account">Account</Link>
                    <MdKeyboardArrowRight />
                    <Link to="/sign-in">Login</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
