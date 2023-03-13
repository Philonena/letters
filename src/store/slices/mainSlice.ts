import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

type MainType = {
  lang: string;
};

const initialState: MainType = {
  lang: localStorage.getItem('lang') || 'ru',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateLang: (state, action: { payload: { lang: string } }) => {
      state.lang = action.payload.lang;
      localStorage.setItem('lang', action.payload.lang);
    },
  },
});

export const main = (state: RootState) => state.main;

export const { updateLang } = mainSlice.actions;

export default mainSlice.reducer;
