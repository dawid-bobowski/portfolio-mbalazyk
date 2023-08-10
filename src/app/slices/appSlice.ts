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
    setSticky(state, action: PayloadAction<{ newProps: IAppState }>) {
      const { sticky } = action.payload.newProps;
      state.sticky = sticky;
    },
  },
});

export const { setSticky } = appSlice.actions;
export default appSlice.reducer;