import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        searchItemsList:[]
    },
    reducers: {
        searchItemsInList : (state,action) => {
            state.searchItemsList.push(action.payload);
        }
    }
})

export const {searchItemsInList} = searchSlice.actions;
export default searchSlice.reducer;