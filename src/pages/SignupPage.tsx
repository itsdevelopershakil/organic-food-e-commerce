import { useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface FormState {
    [key: string]: string; // Allow dynamic keys for form fields
}

const SignupPage = () => {
    const [showPass, setShowPass] = useState(false);
    const [formValue, setFormValue] = useState<FormState>({
        email: '',
        password: '',
        // rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="flex justify-center items-center p-5 py-20 md:p-20">
            <div className="border border-[#f2f2f2] shadow-[#00260314] shadow-2xl p-6 max-w-[520px]">
                <h1 className="text-center text-2xl md:text-[36px] font-semibold text-[#1a1a1a]">
                    Sign In
                </h1>
                <div className="mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="relative sm:text-sm md:text-base">
                            <input
                                className="w-full py-2 px-4 outline-0 border border-[#E6E6E6] rounded-md mb-3"
                                type="text"
                                name="email"
                                value={formValue.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <input
                                className="w-full py-2 px-4 outline-0 border border-[#E6E6E6] rounded-md md:mb-3"
                                type={showPass ? 'text' : 'password'}
                                name="password"
                                value={formValue.password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                className="absolute right-[22px] bottom-[14px] md:bottom-[24px] md:right-[24px] cursor-pointer"
                                onClick={() => setShowPass(!showPass)}
                            >
                                {showPass ? (
                                    <IoEyeOutline className="size-4 md:size-5 text-[#1a1a1a]" />
                                ) : (
                                    <FaRegEyeSlash className="size-4 md:size-5 text-[#1a1a1a]" />
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between md:items-center text-xs md:text-sm text-[#666] mt-4 gap-6 md:gap-0">
                            <div className="flex gap-2 items-center">
                                <input
                                    className="size-4 md:size-5 cursor-pointer"
                                    type="checkbox"
                                />
                                <label>Remember me</label>
                            </div>
                            <Link
                                to="/forget-password"
                                className="hover:text-[#1a1a1a] duration-300 text-center"
                            >
                                Forget Password
                            </Link>
                        </div>
                        <button
                            className="mt-2 md:mt-5 bg-primary w-full text-white py-2 md:py-3 px-4 text-sm rounded-[43px] hover:bg-green-600 duration-300 cursor-pointer"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-2 md:mt-6 p-2 text-center text-xs md:text-sm text-[#999]">
                        Don't have account?{' '}
                        <Link
                            to="create-account"
                            className="text-[#1a1a1a] hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
