import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactsAction } from '../../redux/contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactsAction(contactId));
  };

  return (
    <li>
      {contact.name}: {contact.phone}
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
