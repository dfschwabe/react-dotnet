import { createSlice, configureStore } from '@reduxjs/toolkit'

const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
      value: null,
    },
    reducers: {
      set: (state, action) => {
        state.value = action.payload
      },
    },
  })

export const { set } = forecastSlice.actions
export default configureStore({
  reducer: forecastSlice.reducer,
})