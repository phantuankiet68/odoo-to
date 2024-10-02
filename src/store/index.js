import { configureStore } from '@reduxjs/toolkit';
import authReducer from './apiAuth';
import apiCall from './apiCall';

const store = configureStore({
  reducer: {
    auth: authReducer,
    call: apiCall,
  },
});

export default store;
