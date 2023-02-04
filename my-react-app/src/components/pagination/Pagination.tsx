import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { prevPage, addPage } from '../../redux/actions/pages';
import { FILMS_LIST } from '../../assets/mocks';
import { store } from '../../redux/store';

const itemsLimit = Math.ceil(FILMS_LIST.length / 10);

function Pagination({ setFilms }) {
  const dispatch = useDispatch();

  // const [filmsListPagination, setFilmsPagination] = useState([]);

  useEffect(() => {
    const newList = FILMS_LIST.slice(0, 10);
    setFilms(newList);
  }, []);

  function addNextPage() {
    if (store.getState().currentPage >= 240) {
      FILMS_LIST.slice(
        store.getState().currentPage,
        store.getState().currentPage + 10
      );
      return;
    }
    const newList = FILMS_LIST.slice(
      store.getState().currentPage,
      store.getState().currentPage + 10
    );
    setFilms(newList);
    dispatch(addPage(newList));
  }

  function addPreviousPage() {
    if (store.getState().currentPage < 10) {
      FILMS_LIST.slice(0, 10);
      return;
    }
    const newList = FILMS_LIST.slice(
      store.getState().currentPage - 10,
      store.getState().currentPage
    );
    setFilms(newList);
    dispatch(prevPage(newList));
  }

  return (
    <div className="Pagination">
      <button onClick={addPreviousPage} type="button" className="back">
        <label htmlFor="back"> Назад </label>
      </button>
      <button onClick={addNextPage} type="button" className="next">
        <label htmlFor="next"> Вперед </label>
      </button>
      <p>
        {1} of {itemsLimit}
      </p>
    </div>
  );
}

export { Pagination };
