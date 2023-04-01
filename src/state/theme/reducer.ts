import { createSlice } from '@reduxjs/toolkit'

export interface IState {
  activeTheme: 'dark' | 'light'
}

export const initialState: IState = {
  activeTheme: localStorage.theme ?? 'dark',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setActiveTheme(state, action) {
      state.activeTheme = action.payload
    },
  },
})

export const { setActiveTheme } = themeSlice.actions
export default themeSlice.reducer
