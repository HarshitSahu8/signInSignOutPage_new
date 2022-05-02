import { createSlice } from "@reduxjs/toolkit";

interface Iformfields {
    username: string;
    pass: any;
}

const initialState = {
    username: "",
    pass: "",
};

const fromData = createSlice({
    name: "formInfo",
    initialState,
    reducers: {
        username: (state, action) => {
            state.username = action.payload;
        },
        pass: (state, action) => {
            state.pass = action.payload;
        },
    },
});

export const { username, pass } = fromData.actions;

export default fromData.reducer;
