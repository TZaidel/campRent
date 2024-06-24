import { configureStore } from '@reduxjs/toolkit'
import campsReducer from './campsSlice'

export default configureStore({
  reducer: {
    camps: campsReducer,
  },
});

 