import { createSlice } from "@reduxjs/toolkit";

import { authenticate, logout, register } from "./operations";

export const initialState = {
	user: { username: null, emailAddress: null },
	token: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

const handlePending = (state) => {
	state.error = null;
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: {
		[register.pending]: handlePending,
		[register.rejected]: handleRejected,
		[register.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.error = null;
		},
		[authenticate.pending]: handlePending,
		[authenticate.rejected]: handleRejected,
		[authenticate.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.error = null;
		},
		[logout.pending]: handlePending,
		[logout.rejected]: handleRejected,
		[logout.fulfilled](state) {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
			state.isLoading = false;
			state.error = null;
		},
	},
	reducers: {
		clearError: (state) => {
			state.error = null;
		},
	},
});

export const authReducer = authSlice.reducer;
