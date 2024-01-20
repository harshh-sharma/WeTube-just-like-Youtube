import { createSlice } from "@reduxjs/toolkit";

const WatchPage = createSlice({
    name:'watch',
    initialState:{
        vedioData:[]
    },
    reducers:{
        addInfo:(state,action) => {
            state.vedioData = [...action.payload]
        }
    }
})

export const {addInfo} = WatchPage.actions;
export default WatchPage.reducer;