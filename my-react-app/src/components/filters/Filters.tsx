import React, { useState } from 'react';
import { Button } from '../button/Button';
import { Select } from '../select/Select';
import './Filters.css';
import { GENRES } from '../../mocks.js';
import { Checkbox } from '../checkbox/Checkbox';
import { Pagination } from '../pagination/Pagination';

const optionsSort: object[] = [
    {
        option: 'popularity-descending',
        text: 'Популярные по убыванию',
        select: true,
    },
    { option: 'popularity-ascending', text: 'Популярные по возрастанию' },
    { option: 'vote-descending', text: 'Рейтинг по убыванию' },
    { option: 'vote-ascending', text: 'Рейтинг по возрастанию' },
];

const optionsYearsSort: object[] = [
    { option: '2020', text: '2020', select: true },
    { option: '2019', text: '2019' },
    { option: '2018', text: '2018' },
    { option: '2017', text: '2017' },
];

function Filters({
    list,
    addNextPage,
    addPreviousPage,
    currentPage,
    maxPages,
    changeHandle,
    setCounter,
    counter,
}) {
    return (
        <div className="Filters">
            <h2>Фильры</h2>

            <button type="button" className="default-filters">
                <label htmlFor="default-filters"> Сбросить все фильры </label>
            </button>

            <p>Сортировать по </p>
            <Select
                changeHandle={changeHandle}
                defaultValue="popularity-descending"
                options={optionsSort}
                label="default"
            />
            <p>Год релиза </p>
            <Select
                changeHandle={changeHandle}
                defaultValue="2020"
                options={optionsYearsSort}
                label="default"
            />
            <Checkbox genres={GENRES} />
            <Pagination
                setCounter={setCounter}
                counter={counter}
                addNextPage={addNextPage}
                addPreviousPage={addPreviousPage}
                list={list}
                currentPage={currentPage}
                maxPages={maxPages}
            />
        </div>
    );
}

export { Filters };
