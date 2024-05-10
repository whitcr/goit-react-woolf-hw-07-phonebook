export const selectFilters = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectContacts = state => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
};
