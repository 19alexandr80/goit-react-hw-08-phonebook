import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshUser } from 'redux/auth/operations';
import { addUser, getUsers, deleteUsers } from 'redux/phoneBook/operations';

const initial = {
  value: [],
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  // state.isLoading = true;
};
const handleRejected = (state, action) => {
  // state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: initial,
  reducers: {
    increment(state, action) {
      state.value.push(action.payload);
    },
    decrement(state, action) {
      state.value = state.value.filter(({ id }) => {
        return id !== action.payload;
      });
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        // state.token = null;
        // state.user.email = null;
        // state.user.name = null;
        // state.isLoggedIn = false;
        // state.value = [];
        return initial;
      })
      .addCase(addUser.pending, handlePending)
      .addCase(addUser.rejected, handleRejected)
      .addCase(addUser.fulfilled, (state, action) => {
        state.value.push(action.payload);
      })
      .addCase(getUsers.pending, handlePending)
      .addCase(getUsers.rejected, handleRejected)
      .addCase(getUsers.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(deleteUsers.pending, handlePending)
      .addCase(deleteUsers.rejected, handleRejected)
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.value = state.value.filter(({ id }) => {
          return id !== action.payload.id;
        });
      })
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
      }),
});
export const { increment, decrement } = contactsSlise.actions;

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    incr(state, action) {
      return action;
    },
  },
});
export const { incr } = filterSlise.actions;
