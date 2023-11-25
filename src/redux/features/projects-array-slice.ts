import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = []

export const ProjecArraySlice = createSlice({
    name : 'Projects',
    initialState,
    reducers : {
        // AddArray : (state, action)=>{  return [...state, ...action.payload]; },
        AddArray : (state, action)=>{  return action.payload },
        
    }
})

export const {AddArray } = ProjecArraySlice.actions;
// export default ProjecArraySlice.reducer;