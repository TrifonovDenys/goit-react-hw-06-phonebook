import React from "react";
import css from './ContactList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";
import Contact from "components/Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(getContacts)
  


  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css.item}
            // key={liId} id={liId}
          >
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
