import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {},
	reducers: {
		cacheQueries: (state, action) => {
			// state = { state, ...action.payload };
			state = Object.assign(state, action.payload);
		},
	},
});

export const { cacheQueries } = searchSlice.actions;
export default searchSlice.reducer;
