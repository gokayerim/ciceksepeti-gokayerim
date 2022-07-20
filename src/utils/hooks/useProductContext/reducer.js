import catalogMock from "../../../mocks/catalog.mock";

export const initialState = {
  products: catalogMock.data,
  searchTerm: "",
  category: "",
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_ITEM": {
      if (action.payload.amount) {
        return {
          ...state,
          cart: state.cart.map((c) => {
            if (c.id === action.payload.id) {
              return { ...c, amount: action.payload.amount };
            }
            return c;
          }),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            price: action.payload.price,
            amount: 1,
          },
        ],
      };
    }

    case "RESET_CART_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };
    }

    case "SET_SEARCH_TERM": {
      return { ...state, searchTerm: action.payload.toLowerCase() };
    }
    case "RESET_SEARCH_TERM": {
      return { ...state, searchTerm: "" };
    }

    case "SET_CATEGORY": {
      return { ...state, category: action.payload };
    }

    case "SET_MOBILE": {
      return { ...state, isMobile: action.payload };
    }
    default: {
      return state;
    }
  }
};
