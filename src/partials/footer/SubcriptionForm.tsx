import { ChangeEvent, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

const SubcriptionForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue) {
            console.log(inputValue);
        } else {
            toast.error('Please enter valid Email!');
        }
    };
    return (
        <form
            onSubmit={handleSubscribe}
            className="flex bg-white rounded-[43px] border border-[#e6e6e6] grow"
        >
            <input
                type="email"
                value={inputValue}
                onChange={handleInput}
                className="h-full outline-none bg-transparent px-5 w-[calc(100%_-_100px)] sm:w-auto sm:grow text-sm py-3 sm:py-[14px] shrink"
                placeholder="Your email address"
            />
            <button
                type="submit"
                className="h-full shrink-0 rounded-[43px] bg-primary text-white text-sm px-5 sm:px-10 cursor-pointer py-3 sm:py-[14px] border border-primary"
            >
                Subscribe
            </button>
        </form>
    );
};

export default SubcriptionForm;
