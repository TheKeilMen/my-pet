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

export const pageContext = createContext([]);

function App() {
  const [filmsList, setFilms] = useState([]);

  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <pageContext.Provider value={filmsList}>
          <Filters />
          <Films />
        </pageContext.Provider>
      </div>
    </div>
  );
}

export { App };
