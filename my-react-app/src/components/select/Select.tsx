import React from 'react';

function Select({ label, options, defaultValue, changeHandle }) {
    return (
        <div className={`div-${label}`}>
            <select
                onChange={(e) => changeHandle(e)}
                defaultValue={defaultValue}
                name={label}
                id={label}
            >
                {options.map((item) => (
                    <option key={`option-${item.option}`} value={item.option}>
                        {item.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export { Select };
