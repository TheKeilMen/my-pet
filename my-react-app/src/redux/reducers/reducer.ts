import { FILMS_LIST } from '../../assets/mocks';
import { ADD_NEXT_PAGE, ADD_PREVIOUS_PAGE } from '../actions/action-types';

const inicialState = {
  currentPage: 10,
  maxPage: Math.ceil(FILMS_LIST.length / 10),
};

export function reducer(
  state: { currentPage: number; maxPage: number } = inicialState,
  action?: { type: string; currentPage: number; array: object[] }
) {
  if (action) {
    if (action.currentPage < inicialState.currentPage) {
      return {
        currentPage: inicialState.currentPage,
        array: action.array,
      };
    }
    if (action.currentPage >= 240) {
      return {
        currentPage: 240,
        array: action.array,
      };
    }
    switch (action.type) {
      case ADD_NEXT_PAGE:
        return {
          currentPage: action.currentPage,
          array: action.array,
        };
      case ADD_PREVIOUS_PAGE:
        return {
          currentPage: action.currentPage,
          array: action.array,
        };
      default:
        break;
    }
  }
  return state;
}
