import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import styled from "styled-components";

const Div = styled.div`
    width: 300px;
    margin-left: 25px;

    h1,
    h2 {
        text-align: center;
    }

    h2 {
        margin-top: 10px;
    }
`;

const Phonebook = () => {
    const [state, setState] = useState({
        contacts: [],
        filter: "",
    });

    useEffect(() => {
        const localSorageContacts = JSON.parse(localStorage.getItem("contacts"));
        if (localSorageContacts && localSorageContacts.length > 0) {
            setState({
                contacts: [...localSorageContacts],
                filter: "",
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
    }, [state.contacts]);

    const addFilter = value => {
        setState(prevState => ({
            ...prevState,
            filter: value,
        }));
    };

    const addContact = ({name, number}) => {
        if (state.contacts.find(contact => contact.name === name)) {
            alert(`${name} is already in contacts`);
        } else {
            setState(prevState => ({
                filter: prevState.filter,
                contacts: [
                    ...prevState.contacts,
                    {
                        name: name,
                        number: number,
                        id: uuidv4(),
                    },
                ],
            }));
        }
    };

    const removeContact = e => {
        setState(prevState => ({
            contacts: [...prevState.contacts.filter(contact => contact.id !== e.target.dataset.id)],
        }));
    };

    return (
        <Div>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            {state.contacts.length > 0 && (
                <>
                    <h2>Contacts</h2>
                    <Filter addFilter={addFilter} />
                </>
            )}
            <ContactList {...state} removeContact={removeContact} />
        </Div>
    );
};

export default Phonebook;
