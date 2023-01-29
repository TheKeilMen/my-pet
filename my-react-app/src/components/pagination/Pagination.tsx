import React, { useState } from 'react';

function Pagination({
    list,
    addNextPage,
    addPreviousPage,
    currentPage,
    maxPages,
    setCounter,
    counter,
}) {
    const setPreviousPage = () => {
        addPreviousPage();
        setCounter(counter - 10);
    };
    const setNextPage = () => {
        addNextPage();
        setCounter(counter + 10);
    };
    return (
        <div className="Pagination">
            <button onClick={setPreviousPage} type="button" className="back">
                <label htmlFor="back"> Назад </label>
            </button>
            <button onClick={setNextPage} type="button" className="next">
                <label htmlFor="next"> Вперед </label>
            </button>
            <p>
                {currentPage} of {maxPages}
            </p>
        </div>
    );
}

export { Pagination };
