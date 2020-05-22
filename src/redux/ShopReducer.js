import { ShopActionTypes } from "./ShopTypes";
const INITAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const ShopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
};
export default ShopReducer;
