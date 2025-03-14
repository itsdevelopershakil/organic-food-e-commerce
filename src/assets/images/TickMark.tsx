type TickMarkProps = {
    className?: string;
};

const TickMark: React.FC<TickMarkProps> = ({ className }) => {
    return (
        <svg
            className={className}
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.3332 1.5L4.99984 8.83333L1.6665 5.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default TickMark;
