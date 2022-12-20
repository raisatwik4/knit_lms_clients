import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../reducers/signupSlice';
import loginReducer from '../reducers/loginSlice';


const store = configureStore({
  reducer: signupReducer,
});

export default store;