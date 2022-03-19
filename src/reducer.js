export const initialState = {
  cart: [],
  user: null,
};

// Selector
// reduce will map over the cart array, we set amount to start at 0
// return the sum of each item price plus the  amount
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

//  reducer : how we are able to dispatch actions into datalayer, and pull info from the datalayer , listens for actions
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as its not in cart!`
        );
      }
      return { ...state, cart: newCart };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
