import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface mainState {
  isSidebarCompact: boolean,
  subMenuOpen: string,
}

// Define the initial state using that type
const initialState: mainState = {
    isSidebarCompact: false,
    subMenuOpen: '',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsSidebarCompact: (state) => {
      state.isSidebarCompact = !state.isSidebarCompact
    },
    setIsSubMenuOpen: (state, action) => {
      state.subMenuOpen = action.payload
    },
  },
})

export const { setIsSidebarCompact, setIsSubMenuOpen } = mainSlice.actions
export default mainSlice.reducer