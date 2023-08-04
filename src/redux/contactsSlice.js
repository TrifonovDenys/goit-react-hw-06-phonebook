import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
  { id: 1, name: 'Li', number: '0012301230' },
  { id: 2, name: 'Liq', number: '1012301230' },
  { id: 3, name: 'Liw', number: '2012301230' },
  { id: 4, name: 'Lie', number: '3012301230' }],
    filter: '',
  },

  reducers: {
    addContact: {
      reducer({contacts}, action) {
        contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number, 
          },
        };
      },
    },
    deleteContact({contacts}, action) {
      const index = contacts.findIndex(contact => contact.id === action.payload);
      contacts.splice(index, 1);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    }
  },
});

export const { addContact, deleteContact, filterContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
