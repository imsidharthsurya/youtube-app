import {createSlice} from "@reduxjs/toolkit";

const sideBarSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen= !state.isMenuOpen
        },
        hideMenu:(state)=>{
            state.isMenuOpen=false
        }
    }
})

export const {toggleMenu,hideMenu}=sideBarSlice.actions;
export default sideBarSlice.reducer;