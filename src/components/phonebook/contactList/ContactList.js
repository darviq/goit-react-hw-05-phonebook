import ContactItem from "./contactItem/ContactItem";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    margin-top: 10px;
`;

const ContactList = ({contacts, filter, removeContact}) => {
    return (
        <>
            {contacts.length > 0 && (
                <>
                    <Ul>
                        {filter && filter.length > 0
                            ? contacts
                                  .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
                                  .map(contact => <ContactItem key={contact.id} {...contact} removeContact={removeContact} />)
                            : contacts.map(contact => <ContactItem key={contact.id} {...contact} removeContact={removeContact} />)}
                    </Ul>
                </>
            )}
        </>
    );
};

export default ContactList;
