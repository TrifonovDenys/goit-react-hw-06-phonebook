import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from './App.module.css'
export const App = () => {

    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          padding: '20px',
        }}
      >
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm/>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
  }