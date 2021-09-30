import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { sortByName, sortByPriceAsc, sortByPriceDesc } from "../../redux/ducks/sort";
import { RootState } from "../../redux/store";
import "./Sort.css";

interface SortOptions {
    label: string;
    action: () => void;
}

const Sort: React.FC<{ forceUpdate: React.DispatchWithoutAction }> = ({ forceUpdate }) => {
    const dispatch = useDispatch();
    const [showSortOptions, setShowSortOptions] = useState(false);
    const flowers = useSelector((state: RootState) => state.flowersReducer.flowers);

    const sortOptions: SortOptions[] = [
        {
            label: "Name",
            action: () => dispatch(sortByName(flowers)),
        },
        {
            label: "Price Descending",
            action: () => dispatch(sortByPriceDesc(flowers)),
        },
        {
            label: "Price Ascending ",
            action: () => dispatch(sortByPriceAsc(flowers)),
        },
    ];

    const renderSortOptions = (): JSX.Element[] => {
        return sortOptions.map((option, idx) => {
            return (
                <div
                    onClick={() => {
                        option.action();
                        setShowSortOptions(false);
                        forceUpdate();
                    }}
                    key={idx}
                    className='sort--option'>
                    {option.label}
                </div>
            );
        });
    };

    return (
        <div className='sort-wrapper'>
            <div className='sort' onClick={() => setShowSortOptions((v) => !v)}>
                Sort
                <FaSortDown />
            </div>
            {showSortOptions && <div className='sort-options'>{renderSortOptions()}</div>}
        </div>
    );
};

export default Sort;
