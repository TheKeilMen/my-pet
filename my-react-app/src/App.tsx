import React, { useEffect, useState } from 'react';
import './App.css';
import { Films } from './components/films/Films';
import { Filters } from './components/filters/Filters';
import { Header } from './components/header/Header';
import { FILMS_LIST } from './mocks';

const maxPages = FILMS_LIST.length / 10;

function App() {
    const [filmsList, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const newList = FILMS_LIST.slice(counter, counter + 10);
        const count = setCounter(counter + 10);
        setFilms(newList);
    }, []);

    const changeHandle = (e: Event) => {
        console.log(e.target.value);
    };

    function addNextPage() {
        const newList = FILMS_LIST.slice(counter, counter + 10);
        setFilms(newList);
        const count = () => setCounter(counter + 10);
        console.log(counter);
    }

    function addPreviousPage() {
        const newList = FILMS_LIST.slice(counter - 10, counter);
        setFilms(newList);
        const count = () => setCounter(counter - 10);
        console.log(counter);
    }

    return (
        <div className="App">
            <Header />
            <div className="Content">
                <Filters
                    addNextPage={addNextPage}
                    addPreviousPage={addPreviousPage}
                    counter={counter}
                    list={filmsList}
                    currentPage={1}
                    maxPages={maxPages}
                    setCounter={setCounter}
                    changeHandle={changeHandle}
                />
                <Films data={filmsList} />
            </div>
        </div>
    );
}

export { App };
