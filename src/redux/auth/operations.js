import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://backend-coin-lift-production.up.railway.app/api/v1/auth";

// Utility to add JWT
const setAuthHeader = (token) => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /register
 * body: {
  "username": "string",
  "emailAddress": "string",
  "password": "string",
  "confirmPassword": "string"
}
 */
export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
	try {
		const res = await axios.post("/register", credentials);
		// After successful registration, add the token to the HTTP header
		setAuthHeader(res.data.token);
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

/*
 * POST @ /authenticate
 * body: {
  "email": "string",
  "password": "string"
}
 */
export const authenticate = createAsyncThunk("auth/authenticate", async (credentials, thunkAPI) => {
	try {
		const res = await axios.post("/authenticate", credentials);
		// After successful login, add the token to the HTTP header
		setAuthHeader(res.data.token);
		return res.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

/*
 * POST @ /logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
		await axios.post("/logout");
		// After a successful logout, remove the token from the HTTP header
		clearAuthHeader();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const clearAuthError = () => ({
	type: "auth/clearError",
});
