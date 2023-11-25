import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : null
}

export const selectedProjectSlice = createSlice({
    name : 'Selectedproject',
    initialState,
    reducers : {
        addValue : (state, action)=>{
            state.value = action.payload;
          },
    }
})

export const {addValue } = selectedProjectSlice.actions;