import { createAsyncThunk } from '@reduxjs/toolkit';

import { PhoneBook } from 'api/api';
const api = new PhoneBook();

export const addUser = createAsyncThunk('phone/addUser', async credentials => {
  try {
    const res = await api.addUserPhoneBook(credentials);
    return res.data;
  } catch (error) {
    return error.message;
  }
});
export const getUsers = createAsyncThunk('phone/getUsers', async () => {
  try {
    const res = await api.getUsers();
    return res.data;
  } catch (error) {
    return error.message;
  }
});
export const deleteUsers = createAsyncThunk('phone/deleteUsers', async id => {
  try {
    const res = await api.deleteUsers(id);
    return res.data;
  } catch (error) {
    return error.message;
  }
});
