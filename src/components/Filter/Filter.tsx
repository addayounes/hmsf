import React from "react";
import { FaFilter } from "react-icons/fa";

interface FilterProps {}

const Filter: React.FC<FilterProps> = ({}) => {
    return (
        <div className='filter'>
            <FaFilter />
            Filter
        </div>
    );
};

export default Filter;
