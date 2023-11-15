import { configureStore } from "@reduxjs/toolkit";
import { toggleSlice } from "./features/click-event-slice";


const store:any = configureStore({
    reducer: {
        value : toggleSlice.reducer
    }
})

export default store