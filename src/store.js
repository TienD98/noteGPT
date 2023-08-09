import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "./Components/Signin/SigninSlice";

const store = configureStore({
    reducer: {
        signin: SigninReducer
    }
})

export default store;