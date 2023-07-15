const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updateCart = [...state.cart];
      const updatedItemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updateCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updateCart[updatedItemIndex] };
        updatedItem.quantity++;
        updateCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updateCart };
    }

    case "REMOVE": {
      const updateCart = [...state.cart];
      const filteredCart = updateCart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: filteredCart };
    }
    default:
      return state;
  }
};

export default CartReducer;
