import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: 1, name: 'Li', number: '0012301230' },
  { id: 2, name: 'Liq', number: '1012301230' },
  { id: 3, name: 'Liw', number: '2012301230' },
  { id: 4, name: 'Lie', number: '3012301230' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsInitialState
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
