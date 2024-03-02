import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice=createSlice({
    name:"chat",
    initialState:{
        comments:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.comments.splice(30,1)
            state.comments.unshift(action.payload);
        }
    }
})

export const {addMessage}= liveChatSlice.actions;
export default liveChatSlice.reducer;