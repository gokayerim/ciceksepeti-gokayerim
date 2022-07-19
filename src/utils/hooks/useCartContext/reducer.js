export const initialState = {
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      return { ...state, cart: [...state.cart, action.payload] };
    }

    case "REMOVE_CART_ITEM": {
      return;
    }

    default: {
      return state;
    }
  }
};
