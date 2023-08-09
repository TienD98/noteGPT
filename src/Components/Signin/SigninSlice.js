import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
    userName: "",
    hashedPassword: ""
}

const SigninSlice = createSlice({
    name: 'signin',
    initialState: defaultValue,
    reducers: {
        getUser(state, action) {
            state.userName = action.payload;
        },
        getPassword(state, action) {
            state.hashedPassword = action.payload
        }
    }
})

export const { getUser, getPassword } = SigninSlice.actions;
export default SigninSlice.reducer;