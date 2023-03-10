import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducer";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
  productReviewsReducer,
  reviewReducer,
} from "./reducers/productReducer";
import { cartReducer, orderSampleReducer } from "./reducers/cartReducer";
import { saveForLaterReducer } from "./reducers/saveForLaterReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
  paymentStatusReducer,
} from "./reducers/orderReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";
import {
  compareDetailsReducer,
  comparesReducer,
  cropDetailsReducer,
  cropReducer,
  cropsReducer,
  insightDetailsReducer,
  newCompareReducer,
  newCropReducer,
  newInsightReducer,
} from "./reducers/cropReducer";
import {
  knowledgesReducer,
  newKnowledgeReducer,
} from "./reducers/knowledgeReducer";

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  products: productsReducer,
  crops: cropsReducer,
  compares: comparesReducer,
  knowledges: knowledgesReducer,
  productDetails: productDetailsReducer,
  cropDetails: cropDetailsReducer,
  compareDetails: compareDetailsReducer,
  insightDetails: insightDetailsReducer,
  newReview: newReviewReducer,
  cart: cartReducer,
  orderSample: orderSampleReducer,
  saveForLater: saveForLaterReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  paymentStatus: paymentStatusReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  newProduct: newProductReducer,
  newKnowledge: newKnowledgeReducer,
  newCrop: newCropReducer,
  newCompare: newCompareReducer,
  newInsight: newInsightReducer,
  product: productReducer,
  crop: cropReducer,
  users: allUsersReducer,
  userDetails: userDetailsReducer,
  reviews: productReviewsReducer,
  review: reviewReducer,
  wishlist: wishlistReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  saveForLater: {
    saveForLaterItems: localStorage.getItem("saveForLaterItems")
      ? JSON.parse(localStorage.getItem("saveForLaterItems"))
      : [],
  },
  wishlist: {
    wishlistItems: localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
