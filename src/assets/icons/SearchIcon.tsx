type SearchIconProps = {
    className?: string;
};

const SearchIcon: React.FC<SearchIconProps> = ({ className }) => {
    return (
        <svg
            className={`${className} stroke-[#1A1A1A]`}
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.6667 22.3333C17.5577 22.3333 22.3333 17.5577 22.3333 11.6667C22.3333 5.77563 17.5577 1 11.6667 1C5.77563 1 1 5.77563 1 11.6667C1 17.5577 5.77563 22.3333 11.6667 22.3333Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25.0002 25.0002L19.2002 19.2002"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SearchIcon;
