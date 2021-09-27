import React from "react";
import { FaSortDown } from "react-icons/fa";
import "./Sort.css";

interface SortProps {}

const Sort: React.FC<SortProps> = ({}) => {
    return (
        <div>
            <div className='sort '>
                Sort
                <FaSortDown />
            </div>
            <div className='sort-options'></div>
        </div>
    );
};

export default Sort;
