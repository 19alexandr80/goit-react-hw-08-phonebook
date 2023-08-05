import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { PhoneBook } from 'api/api';
const api = new PhoneBook();

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const res = await api.registration(credentials);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const res = await api.login(credentials);
    return res.data;
  } catch (error) {
    return error.message;
  }
});
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
  } catch (error) {
    return error.message;
  }
});
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.contacts.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const res = await api.refreshUser(persistedToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
