type FavouriteIconProps = {
    className?: string;
};

const FavouriteIcon: React.FC<FavouriteIconProps> = ({ className }) => {
    return (
        <svg
            className={`${className} stroke-[#1A1A1A]`}
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.9995 28.0717C-10.6667 13.3329 7.99999 -2.66711 15.9995 7.4503C24 -2.66711 42.6666 13.3329 15.9995 28.0717Z"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default FavouriteIcon;
