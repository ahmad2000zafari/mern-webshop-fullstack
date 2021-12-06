export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product,
    },
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      product: product,
    },
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
  };
};

export const chooseSize = (product, chosenSize) => {
  return {
    type: "CHOOSE_SIZE",
    payload: {
      product,
      chosenSize,
    },
  };
};

export const chooseColor = (product, chosenColor) => {
  return {
    type: "CHOOSE_COLOR",
    payload: {
      product,
      chosenColor,
    },
  };
};

export const increaseProductQuantity = (product) => {
  return {
    type: "INCREASE_PRPDUCT_QUANTITY",
    payload: {
      product,
    },
  };
};

export const decreaseProductQuantity = (product) => {
  return {
    type: "DECREASE_PRPDUCT_QUANTITY",
    payload: {
      product,
    },
  };
};

const initialState = {
  cart: [],
  cartItemsQuantity: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state.cart.push(action.payload);
      state.cartItemsQuantity += 1;
      state.total +=
        action.payload.product.price * action.payload.product.quantity;

      return {
        ...state,
        cart: state.cart,
      };

    case "REMOVE_FROM_CART":
      state.cartItemsQuantity -= 1;
      state.total -=
        action.payload.product.price * action.payload.product.quantity;

      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product._id !== action.payload.product._id
        ),
      };

    case "RESET_CART":
      state.cart = [];
      state.cartItemsQuantity = 0;
      state.total = 0;

      return {
        ...state,
      };

    case "CHOOSE_SIZE":
      state.cart.find(
        (item) => item.product._id === action.payload.product._id
      ).product.chosenSize = action.payload.chosenSize;

      return {
        ...state,
      };

    case "CHOOSE_COLOR":
      state.cart.find(
        (item) => item.product._id === action.payload.product._id
      ).product.chosenColor = action.payload.chosenColor;
      console.log("this is new cart");
      console.log(state.cart);

      return {
        ...state,
      };

    case "INCREASE_PRPDUCT_QUANTITY":
      state.cart.find(
        (item) => item.product._id === action.payload.product._id
      ).product.quantity = action.payload.product.quantity;
      state.total += action.payload.product.price;

      return {
        ...state,
      };

    case "DECREASE_PRPDUCT_QUANTITY":
      state.cart.find(
        (item) => item.product._id === action.payload.product._id
      ).product.quantity = action.payload.product.quantity;
      state.total -= action.payload.product.price;

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default cartReducer;
