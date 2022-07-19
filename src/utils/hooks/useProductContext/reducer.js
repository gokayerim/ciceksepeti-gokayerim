import catalogMock from "../../../mocks/catalog.mock";

export const initialState = {
  products: catalogMock.data,
  searchTerm: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      return { ...state, cart: [...state.cart, action.payload] };
    }

    case "REMOVE_CART_ITEM": {
      return;
    }

    case "SET_SEARCH_TERM": {
      return { ...state, searchTerm: action.payload.toLowerCase() };
    }
    case "RESET_SEARCH_TERM": {
      return { ...state, searchTerm: "" };
    }

    default: {
      return state;
    }
  }
};
