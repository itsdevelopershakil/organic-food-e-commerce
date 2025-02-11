type ProfileIconProps = {
    className?: string;
};

const ProfileIcon: React.FC<ProfileIconProps> = ({ className }) => {
    return (
        <svg
            className={`${className} stroke-[#1A1A1A] `}
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.9998 14.6667C18.9454 14.6667 21.3332 12.2789 21.3332 9.33333C21.3332 6.38781 18.9454 4 15.9998 4C13.0543 4 10.6665 6.38781 10.6665 9.33333C10.6665 12.2789 13.0543 14.6667 15.9998 14.6667Z"
                strokeWidth="1.5"
            />
            <path
                d="M19.9998 18.667H11.9998C8.31715 18.667 5.01982 22.067 7.44248 24.839C9.09048 26.7243 11.8158 28.0003 15.9998 28.0003C20.1838 28.0003 22.9078 26.7243 24.5558 24.839C26.9798 22.0657 23.6812 18.667 19.9998 18.667Z"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default ProfileIcon;
