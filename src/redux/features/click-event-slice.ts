import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false
}

export const toggleSlice = createSlice({
    name : 'value',
    initialState,
    reducers : {
        setTrue : (state)=>{ state.status = true },
        setFalse : (state)=>{ state.status = false}
    }
})

export const {setTrue , setFalse} = toggleSlice.actions;