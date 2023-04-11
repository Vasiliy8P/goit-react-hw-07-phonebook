import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import './ContactForm.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmitForm = (evt) => {
        evt.preventDefault();

        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`)
        } else {
            dispatch(addContact({ name, phone: number }));
        };

        reset();
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        
        switch (name) {
            case 'name':
                setName(value)
                break;
            
            case 'number':
                setNumber(value)
                break;
            
            default:
                return;
        }
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <form className="ContactForm" onSubmit={handleSubmitForm}>
            <label>
                Name
                <br />
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Number
                <br />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <button type="submit" className="ContactForm__btn">Add contact</button>
        </form>
    )
}

export default ContactForm;