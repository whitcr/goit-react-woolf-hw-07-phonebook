import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterAction(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { setFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
