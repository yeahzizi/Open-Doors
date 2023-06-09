import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLogged: false,
	username: null,
	password: null,
	name: null,
	accessToken: null,
	sfInfoIds: null,
	userImg: null,
};

export const AuthSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginAccount(state, action) {
			state.isLogged = true;
			state.username = action.payload.username;
			state.password = action.payload.password;
			state.name = action.payload.name;
			state.accessToken = action.payload.accessToken;
			state.sfInfoIds = action.payload.sfInfoIds;
			state.userImg = action.payload.userImg;
		},
		logoutAccount(state) {
			state.isLogged = false;
			state.username = null;
			state.password = null;
			state.name = null;
			state.accessToken = null;
			state.sfInfoIds = null;
			state.userImg = null;
		},
	},
});

export const { loginAccount, logoutAccount } = AuthSlice.actions;

export default AuthSlice.reducer;
