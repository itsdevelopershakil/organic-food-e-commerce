type UserIconprops = {
    className?: string;
};

const UserIcon: React.FC<UserIconprops> = ({ className }) => {
    return (
        <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M7.00033 7.66667C8.84128 7.66667 10.3337 6.17428 10.3337 4.33333C10.3337 2.49238 8.84128 1 7.00033 1C5.15938 1 3.66699 2.49238 3.66699 4.33333C3.66699 6.17428 5.15938 7.66667 7.00033 7.66667Z"
                stroke="#B3B3B3"
                stroke-width="1.2"
            />
            <path
                d="M9.50019 10.1665H4.50019C2.19852 10.1665 0.137691 12.2915 1.65186 14.024C2.68186 15.2023 4.38519 15.9998 7.00019 15.9998C9.61519 15.9998 11.3177 15.2023 12.3477 14.024C13.8627 12.2907 11.801 10.1665 9.50019 10.1665Z"
                stroke="#B3B3B3"
                stroke-width="1.2"
            />
        </svg>
    );
};

export default UserIcon;
