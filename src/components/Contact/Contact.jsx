import { deleteContact } from 'redux/contactsSlice';
import css from '../ContactList/ContactList.module.css'
import { useDispatch } from 'react-redux';
const Contact = ({ contact }) => {
  console.dir(contact);
const dispatch = useDispatch()
    const handleDelite = () => dispatch(deleteContact(contact.id))
  return (
    <>
      <p className={css.text}> {contact.name}:
        <span>{contact.number}</span>
      </p>
      <button onClick={handleDelite}>delete</button>
    </>
  )
}
export default Contact