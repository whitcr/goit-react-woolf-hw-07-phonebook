import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://663e0d0ae1913c47679657af.mockapi.io/',
});

export const getContacts = async () => {
  const { data } = await instance('contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await instance.post('contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`contacts/${id}`);
  return data;
};
