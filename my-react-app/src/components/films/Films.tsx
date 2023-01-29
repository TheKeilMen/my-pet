import React from 'react';
import './Films.css';
import { Card } from '../card/card';

function Films({ data }) {
    return (
        <div className="Films-container">
            <Card data={data} />
        </div>
    );
}

export { Films };
