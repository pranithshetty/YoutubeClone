import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: {
		isSideBarOpen: false,
	},
	reducers: {
		toggleMenu: (state) => {
			state.isSideBarOpen = !state.isSideBarOpen;
		},
		closeMenu: (state) => {
			state.isSideBarOpen = false;
		},
	},
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
