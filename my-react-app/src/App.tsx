import React, {
  Context,
  createContext,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Films } from './components/films/films';
import { Filters } from './components/filters/filters';
import { Header } from './components/header/header';
import { store } from './redux/store';
import { FILMS_LIST } from './assets/mocks';

function App() {
  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Filters />
        <Films />
      </div>
    </div>
  );
}

export { App };
