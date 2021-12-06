export const addToFavorites = (product) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: {
      product,
    },
  };
};

export const removeFromFavorites = (product) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: {
      product,
    },
  };
};

const initialState = {
  favorites: [],
  favoritesItemsQuantity: 0,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      state.favorites.push(action.payload);
      state.favoritesItemsQuantity += 1;

      return {
        ...state,
        cart: state.favorites,
      };

    case "REMOVE_FROM_FAVORITES":
      state.favoritesItemsQuantity -= 1;
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.product._id !== action.payload.product._id
        ),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
