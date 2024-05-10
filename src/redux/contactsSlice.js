import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'api';

export const getContactsAction = createAsyncThunk('get/contacts', () => {
  return getContacts();
});

export const addContactsAction = createAsyncThunk('add/contacts', contact =>
  addContact(contact)
);

export const deleteContactsAction = createAsyncThunk('delete/contacts', id =>
  deleteContact(id)
);

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactsAction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactsAction.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addMatcher(
        action => action.type.endsWith('contacts/pending'),
        handlePending
      )
      .addMatcher(
        action => action.type.endsWith('contacts/rejected'),
        handleRejected
      )
      .addMatcher(
        action => action.type.endsWith('contacts/fulfilled'),
        handleFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
