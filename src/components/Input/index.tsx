import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    labelComplement: string;
}

const Input: React.FC<InputProps> = ({ label, name, labelComplement, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <label className="label-complement" htmlFor={name}>{labelComplement}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;
