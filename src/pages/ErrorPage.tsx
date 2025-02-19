import { Link } from 'react-router-dom';
import ErrorImage from '../assets/images/ErrorImage';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 sm:p-10 md:p-20">
            <div className="flex justify-center w-full">
                <ErrorImage />
            </div>
            <div className="text-center">
                <h3 className="mt-4 md:mt-8 md:text-[40px] text-2xl  font-semibold text-[#1a1a1a]">
                    Oops! page not found
                </h3>
                <p className="mt-3 mb-6 md:mt-5 text-[#808080] max-w-[612px] text-sm md:text-base">
                    Ut consequat ac tortor eu vehicula. Aenean accumsan purus
                    eros. Maecenas sagittis tortor at metus mollis
                </p>
                <Link
                    to="/"
                    className="inline bg-primary text-white py-3 px-8 text-xs md:text-sm rounded-[43px] duration-300 hover:bg-green-600"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
