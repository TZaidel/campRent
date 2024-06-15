import { configureStore } from '@reduxjs/toolkit'
import campsReducer from './campsSlice'

const store = configureStore({
  reducer: {
    camps: campsReducer
  }
})

export default store