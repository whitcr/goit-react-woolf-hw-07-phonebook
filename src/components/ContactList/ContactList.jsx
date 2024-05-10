import ContactItem from 'components/ContactItem/ContactItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selector';
import { getContactsAction } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsAction());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <ul>
        {contacts &&
          contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
