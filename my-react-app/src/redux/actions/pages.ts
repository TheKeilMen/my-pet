import { store } from '../store';
import { ADD_NEXT_PAGE, ADD_PREVIOUS_PAGE } from './action-types';

const maxItemsOnPage = 10;

export function addPage(array: object[]): {
  type: string;
  currentPage: number;
  array: object[];
} {
  return {
    type: ADD_NEXT_PAGE,
    currentPage: store.getState().currentPage + maxItemsOnPage,
    array,
  };
}

export function prevPage(array: object[]): {
  type: string;
  currentPage: number;
  array: object[];
} {
  return {
    type: ADD_PREVIOUS_PAGE,
    currentPage: store.getState().currentPage - maxItemsOnPage,
    array,
  };
}
