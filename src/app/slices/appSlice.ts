import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  sticky: boolean;
}

const initialState: IAppState = {
  sticky: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGlobalSticky(state, action: PayloadAction<{ sticky: boolean }>) {
      state.sticky = action.payload.sticky;
    },
  },
});

export const { setGlobalSticky } = appSlice.actions;
export default appSlice.reducer;