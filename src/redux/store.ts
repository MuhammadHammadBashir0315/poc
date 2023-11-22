import { configureStore } from "@reduxjs/toolkit";
import { toggleSlice } from "./features/click-event-slice";
import projectsArraySlice from "./features/projects-array-slice";


const store:any = configureStore({
    reducer: {
        value : toggleSlice.reducer,
        Projects : projectsArraySlice
    }
})

export default store