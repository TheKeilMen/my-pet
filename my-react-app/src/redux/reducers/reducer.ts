import { FILMS_LIST } from '../../assets/mocks';
import { ADD_NEXT_PAGE, ADD_PREVIOUS_PAGE } from '../actions/action-types';

const inicialState: {
  currentPage: number;
  array: object[];
} = {
  currentPage: 10,
  array: FILMS_LIST.slice(0, 10),
};

export function reducer(
  state: {
    currentPage: number;
    array: object[];
  } = inicialState,
  action?: { type: string; currentPage: number; array: object[] }
) {
  if (action) {
    if (action.currentPage < inicialState.currentPage) {
      return {
        ...state,
        currentPage: inicialState.currentPage,
        array: action.array,
      };
    }
    if (action.currentPage >= FILMS_LIST.length) {
      return {
        ...state,
        currentPage: FILMS_LIST.length,
        array: action.array,
      };
    }
    switch (action.type) {
      case ADD_NEXT_PAGE:
        return {
          ...state,
          currentPage: action.currentPage,
          array: action.array,
        };
      case ADD_PREVIOUS_PAGE:
        return {
          ...state,
          currentPage: action.currentPage,
          array: action.array,
        };
      default:
        break;
    }
  }
  return state;
}
