import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            //since the format in which we'll be getting the searchText & it's suggestions is:
            //{"iph":["iphone1","ipone2","iphonexr"]}
            //so to cache it we'll use spread operator
            state={...state,...action.payload}; //this will merge existing obj. with latest obj.
        }
    }
})

export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;