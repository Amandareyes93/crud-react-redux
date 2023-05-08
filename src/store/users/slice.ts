import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Amanda Reyes",
		email: "amanda_reyesb@hotmail.com",
		github: "Amandareyes93",
	},
	{
		id: "2",
		name: "Harrison Chacon",
		email: "harrisonlchr@gmail.com",
		github: "Harrisonlchr",
	},
	{
		id: "3",
		name: "Mariantonieta Chacon",
		email: "sdgffdgdfhdghgfhfgj",
		github: "Mariantonieta",
	},
	{
		id: "4",
		name: "Joaquin Alameda",
		email: "sdfsdgsfgdghghgh",
		github: "davidlopez",
	},
];

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}
	return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},

		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;

export const { deleteUserById, addNewUser } = usersSlice.actions;
