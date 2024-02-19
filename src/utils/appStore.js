import {configureStore} from "@reduxjs/toolkit"
import sideBarSlice from "./sideBarSlice"
const appStore=configureStore({
    reducer:{
        app:sideBarSlice
    }
});

export default appStore;