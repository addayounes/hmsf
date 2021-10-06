import React, { useState } from "react";
import { FaCheck, FaRedo } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { FilterPrice, resetFilters } from "../../redux/ducks/flowers";
import FilterPricePanel, { Price } from "./FilterPricePanel";

const FilterPanel: React.FC = () => {
    const [PriceValues, setPriceValues] = useState<Price>({ min: 0, max: 20000 });
    const dispatch = useDispatch();

    const applyFilters = (): void => {
        if (PriceValues.min >= PriceValues.max) return;
        dispatch(FilterPrice(PriceValues.min, PriceValues.max));
    };

    const onResetFilters = (): void => {
        dispatch(resetFilters());
    };

    return (
        <section className='filter-panel split-between'>
            <FaCheck onClick={applyFilters} className='apply-filters-icon split-center' />
            <FaRedo
                onClick={onResetFilters}
                className='apply-filters-icon reset-filters-icon split-center'
            />
            <FilterPricePanel setPriceValues={setPriceValues} />
        </section>
    );
};

export default FilterPanel;

/**
 * price (min / max)
 * only best sellings
 * types
 *  */
