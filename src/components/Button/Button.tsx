import React from "react";
import "./Button.css";

interface ButtonProps {
    variant?: string;
    label: string;
    size?: string;
    onClick?: () => void;
}

const VARIANTS: string[] = ["primary", "secondary", "secondary-light"];
const SIZES: string[] = ["md", "sm"];

const Button: React.FC<ButtonProps> = ({ variant, label, size, onClick }) => {
    const buttonStyle: string | undefined = VARIANTS.includes(variant as string)
        ? variant
        : VARIANTS[0];
    const buttonSize: string | undefined = SIZES.includes(size as string) ? size : SIZES[0];

    return (
        <div onClick={onClick} className={`btn ${buttonSize} ${buttonStyle}`}>
            {label}
        </div>
    );
};

export default Button;
