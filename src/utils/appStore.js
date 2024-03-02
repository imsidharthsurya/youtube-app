import {configureStore} from "@reduxjs/toolkit"
import sideBarSlice from "./sideBarSlice"
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
const appStore=configureStore({
    reducer:{
        app:sideBarSlice,
        search:searchSlice,
        chat:liveChatSlice
    }
});

export default appStore;