import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { applyBestSellingsFilter } from "../../redux/ducks/flowers";

export interface Price {
    min: number;
    max: number;
}

interface FilterPricePanelProps {
    setPriceValues: React.Dispatch<React.SetStateAction<Price>>;
}

const FilterPricePanel: React.FC<FilterPricePanelProps> = ({ setPriceValues }) => {
    const numRegEx = /^\d+$/;
    const [BestSellingsOnly, setBestSellingsOnly] = useState<boolean>(false);
    const dispatch = useDispatch();

    const toggleBestSellings = useCallback(() => {
        dispatch(applyBestSellingsFilter(!BestSellingsOnly));
        setBestSellingsOnly((v) => !v);
    }, [BestSellingsOnly]);

    return (
        <div className='filter-subpanel'>
            <p>Price</p>
            <div className='price-inputs'>
                <div className='price-input'>
                    <input
                        type='text'
                        placeholder='MIN'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (!e.target.value.match(numRegEx)) return;
                            setPriceValues((v) => {
                                return { ...v, min: parseInt(e.target.value) };
                            });
                        }}
                    />
                    <span>DA</span>
                </div>
                <div className='price-input'>
                    <input
                        type='text'
                        placeholder='MAX'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (!e.target.value.match(numRegEx)) return;
                            setPriceValues((v) => {
                                return { ...v, max: parseInt(e.target.value) };
                            });
                        }}
                    />
                    <span>DA</span>
                </div>
            </div>
            <div className='filter-best-sellings-wrapper split-between'>
                <p>Best sellings only</p>
                <div
                    onClick={toggleBestSellings}
                    className={`filter-best-sellings ${
                        BestSellingsOnly ? "active-best-sellings" : ""
                    }`}></div>
            </div>
        </div>
    );
};

export default FilterPricePanel;
