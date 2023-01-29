import React from 'react';

function Checkbox({ genres }) {
  return (
    <div className="checkbox-container">
      {genres.map((item) => (
        <div key={item.id} className={item.name}>
          <input type="checkbox" id={item.name} name={item.name} />
          <label htmlFor={item.name}>{item.name}</label>
        </div>
      ))}
    </div>
  );
}

export { Checkbox };
