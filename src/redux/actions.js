import { createAction } from '@reduxjs/toolkit';

import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from './actionTypes';

export const addToCart = createAction(ADD_TO_CART);
export const removeFromCart = createAction(REMOVE_FROM_CART);
export const updateCartItemQuantity = createAction(UPDATE_CART_ITEM_QUANTITY, ({ gameId, quantity }) => ({
  payload: { gameId, quantity }
}));