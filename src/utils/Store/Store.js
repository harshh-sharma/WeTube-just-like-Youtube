import {configureStore} from '@reduxjs/toolkit';
import appSlice from '../slices/appSlice';
import searchSlice from '../slices/searchSlice';
import watchPage from '../slices/watchPage';
import chatSlice from '../slices/chatSlice';

const store = configureStore({
      reducer:{
        app : appSlice,
        search : searchSlice,
        watch : watchPage,
        chat : chatSlice
      }
})

export default store;