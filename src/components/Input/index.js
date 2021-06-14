import React, { useState } from 'react';
const Input = ({ name, onClick, defaultValue, edit, id }) => {
    const [value, setValue] = useState(defaultValue ? defaultValue : "");

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const handleClick = (value) => {
        onClick(value, id);
    }
    return (
        <div className="custom_input">
            <input onChange={e => onChange(e)} value={value} />
            <button onClick={() => handleClick(value)}>{name}</button>
            {edit && <button onClick={() => handleClick(defaultValue)}>Отменить</button>}
        </div>
    );
};


export default Input;