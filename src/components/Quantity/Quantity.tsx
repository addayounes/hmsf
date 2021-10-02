import React from "react";

interface QuantityProps {
    Quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const Quantity: React.FC<QuantityProps> = ({ setQuantity, Quantity }) => {
    const incrementQuantity = (): void => {
        setQuantity((v) => v + 1);
    };

    const decrementQuantity = (): void => {
        setQuantity((v) => (v === 1 ? v : v - 1));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuantity(parseInt(e.target.value));
    };
    return (
        <div>
            <div className='product-quantity split-between'>
                <div onClick={decrementQuantity} className='split-center'>
                    -
                </div>
                <input type='text' value={Quantity} onChange={(e) => handleChange(e)} />
                <div onClick={incrementQuantity} className='split-center'>
                    +
                </div>
            </div>
        </div>
    );
};

export default Quantity;
