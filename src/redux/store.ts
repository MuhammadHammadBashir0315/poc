import { configureStore } from "@reduxjs/toolkit";
import { toggleSlice } from "./features/click-event-slice";
// import {projectsArraySlice} from "./features/projects-array-slice";
import { ProjecArraySlice } from "./features/projects-array-slice";
import { selectedProjectSlice } from "./features/selected-project-slice";


const store:any = configureStore({
    reducer: {
        value : toggleSlice.reducer,
        Projects : ProjecArraySlice.reducer,
        Selectedproject : selectedProjectSlice.reducer
    }
})

export default store