import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slices/AuthSlice";
import theme from "./Slices/themeSlice";
import cart from "./Slices/cartSlice";
const store = configureStore({
  reducer: { auth, theme, cart },
});
export default store;
