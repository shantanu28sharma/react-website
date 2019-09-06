import { createSelector } from 'reselect';

const Shop = state => state.shop;

export const shopItems = createSelector(
  [Shop],
  shop => shop.sections
);