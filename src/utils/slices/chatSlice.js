import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        listOfChats:[]
    },
    reducers:{
        addNewChat : (state,action) => {
            state.listOfChats.splice(25,1);
            state.listOfChats.push(action.payload);
        },
    }
})

export const {addNewChat} = chatSlice.actions;
export default chatSlice.reducer;