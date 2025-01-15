import { configureStore } from "@reduxjs/toolkit";
import shipReducer from "./reducers/shipReducer";
import logger from 'redux-logger'
const store=configureStore({
  reducer:{
    ships:shipReducer
  },
    // Add the logger middleware only in development mode
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger), // Add redux-logger to middleware
  });
  
  

export default store;
