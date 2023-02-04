import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { prevPageAction, addPageAction } from '../../redux/actions/pages';
import { FILMS_LIST } from '../../assets/mocks';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';

const itemsLimit = Math.ceil(FILMS_LIST.length / 10);

function Pagination() {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  function addNextPage() {
    if (currentPage >= 240) {
      const newList = FILMS_LIST.slice(currentPage, currentPage + 10);
      dispatch(addPageAction(newList));
      return;
    }
    const newList = FILMS_LIST.slice(currentPage, currentPage + 10);
    dispatch(addPageAction(newList));
  }

  function addPreviousPage() {
    if (currentPage < 10) {
      const newList = FILMS_LIST.slice(0, 10);
      dispatch(prevPageAction(newList));
      return;
    }
    const newList = FILMS_LIST.slice(currentPage - 10, currentPage);
    dispatch(prevPageAction(newList));
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
