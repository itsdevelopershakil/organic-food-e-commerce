type DropdownProps = {
    open: boolean;
    options: string[]; // Fix: Options should be an array of strings
    onChange: (value: string) => void; // Fix: onChange should accept a value argument
};

const TopbarDropdown: React.FC<DropdownProps> = ({
    options,
    onChange,
    open,
}) => {
    // Fix: Explicitly define the component type
    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        onChange(e.currentTarget.value); // Fix: Use `currentTarget.value` instead of `target.value`
    };

    return (
        <div
            className={`absolute top-[20px] left-[-10px] bg-white shadow-xl rounded-sm duration-300 ${
                open ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            {options.map((v, i) => (
                <button
                    key={i}
                    className="border-b border-gray-300 px-4 py-2 cursor-pointer hover:text-red-500 transition duration-300"
                    value={v}
                    onClick={handleChange}
                >
                    {v}
                </button>
            ))}
        </div>
    );
};

export default TopbarDropdown;
