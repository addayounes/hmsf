import React from "react";
import { FaFilter } from "react-icons/fa";
import "./Filter.css";

interface FilterProps {
    setShowFilterPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = ({ setShowFilterPanel }) => {
    const toggleFilterPanel = () => setShowFilterPanel((v) => !v);

    return (
        <div onClick={toggleFilterPanel} className='filter'>
            <FaFilter />
            Filter
        </div>
    );
};

export default Filter;
