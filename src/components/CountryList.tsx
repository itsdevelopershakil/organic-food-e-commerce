import React from 'react';
import { countryList } from '../lib/countrylist';

interface CountryListProps {
    country: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountryList: React.FC<CountryListProps> = ({ country, handleChange }) => {
    const countries = [...countryList];

    return (
        <div>
            <label htmlFor="country" className="block text-sm  py-2">
                Country / Region
            </label>
            <select
                id="country"
                name="country"
                className="block w-full border border-solid border-[#e7e7e7] bg-white py-3 px-4 outline-none rounded-[6px]"
                value={country}
                onChange={handleChange}
            >
                {countries.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
            <p className="mt-2 hidden px-2 text-xs text-red-600">
                There was an error!
            </p>
        </div>
    );
};

export default CountryList;
