import {configureStore} from "@reduxjs/toolkit"
import sideBarSlice from "./sideBarSlice"
import searchSlice from "./searchSlice";
const appStore=configureStore({
    reducer:{
        app:sideBarSlice,
        search:searchSlice
    }
});

export default appStore;