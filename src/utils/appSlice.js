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
		openMenu: (state) => {
			state.isSideBarOpen = true;
		},
	},
});

export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;
export default appSlice.reducer;
