import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type OfferButtonProps = {
    className?: string;
};

const OfferButton: React.FC<OfferButtonProps> = ({ className }) => {
    return (
        <Link
            to="/shop"
            className={`${className} flex items-center gap-2 w-[150px] sm:w-[162px] px-4 sm:px-8 py-2 lg:py-3 rounded-[43px] justify-center`}
        >
            Shop Now <FaArrowRight />
        </Link>
    );
};

export default OfferButton;
