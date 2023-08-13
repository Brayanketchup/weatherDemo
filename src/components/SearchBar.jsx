
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { motion } from "framer-motion";


export default function SearchBar({ onSearchChange }) {
    const [Search, setSearch] = useState("");

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let cityInput = document.getElementById('cityInput');
        cityInput.blur();
        setSearch("");
    };

    return (
        <>
            <form
                action=""
                className="relative w-max mx-auto mb-5 text-white"
                onSubmit={handleSubmit}
            >
                <input
                    value={Search}
                    onChange={(event) => handleOnChange(event.target.value)}
                    type="text"
                    name=""
                    placeholder="Enter a city name"
                    id="cityInput"
                    className="relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none pl-12 focus:w-full focus:cursor-text transition-width"
                />
                <SearchIcon className="absolute left-3 inset-y-0 my-auto h-8 w-12 border-r border-transparent" />
            </form>
        </>
    );
}
