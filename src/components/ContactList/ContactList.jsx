import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import './ContactList.css';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getFilterValue);
    const dispatch = useDispatch ();

    const getFilterContacts = () => {
        const normalizedFilterValue = filterValue.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilterValue)
        )
    };

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId))
    }

    const filterContacts = getFilterContacts()

    return (
        <ul className="Contacts__list">
            {filterContacts.map(({ id, name, number }) => {
                    return (
                        <li key={id} className="Contacts__item">{name}: {number}
                            <button
                                type="button"
                                className="Contacts__btn"
                                onClick={() => (handleDeleteContact(id))}
                            >
                                Delete
                            </button>
                        </li>
                    )
                }) 
            }
        </ul>        
    )
}

export default ContactList;