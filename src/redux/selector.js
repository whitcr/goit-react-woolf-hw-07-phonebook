import { createSelector } from '@reduxjs/toolkit';

export const selectFilters = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectContacts = state => {
  return state.contacts.items;
};

const selector = createSelector(
  selectFilters,
  selectContacts,
  (filter, contacts) => {
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
