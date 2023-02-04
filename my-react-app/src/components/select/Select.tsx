import React from 'react';
import { nanoid } from 'nanoid';

function Select({ label, options, defaultValue }) {
  const changeHandle = (e: Event) => {
    if (e.target) {
      console.log(e.target.value);
    }
  };
  return (
    <div className={`div-${label}`}>
      <select
        onChange={(e) => changeHandle(e)}
        defaultValue={defaultValue}
        name={label}
        id={nanoid()}
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
