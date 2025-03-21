type MapProps = {
    className: string;
};

const MapPin: React.FC<MapProps> = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 52 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.6562 46.2188H40.3438"
                stroke="#2C742F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M26 27.0938C27.6908 27.0938 29.3123 26.4221 30.5078 25.2266C31.7033 24.031 32.375 22.4095 32.375 20.7188C32.375 19.028 31.7033 17.4065 30.5078 16.2109C29.3123 15.0154 27.6908 14.3438 26 14.3438C24.3092 14.3438 22.6877 15.0154 21.4922 16.2109C20.2966 17.4065 19.625 19.028 19.625 20.7188C19.625 22.4095 20.2966 24.031 21.4922 25.2266C22.6877 26.4221 24.3092 27.0938 26 27.0938V27.0938Z"
                stroke="#2C742F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M41.9375 20.7188C41.9375 35.0625 26 46.2188 26 46.2188C26 46.2188 10.0625 35.0625 10.0625 20.7188C10.0625 16.4919 11.7416 12.4381 14.7305 9.44924C17.7193 6.46037 21.7731 4.78125 26 4.78125C30.2269 4.78125 34.2807 6.46037 37.2695 9.44924C40.2584 12.4381 41.9375 16.4919 41.9375 20.7188V20.7188Z"
                stroke="#2C742F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default MapPin;
