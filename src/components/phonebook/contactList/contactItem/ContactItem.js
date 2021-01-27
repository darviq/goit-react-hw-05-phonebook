import styled from "styled-components";

const Li = styled.li`
    width: 100%;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: hotpink;
        font-weight: 700;
        width: 30px;
        height: 30px;
    }

    button:hover,
    button:focus {
        background-color: red;
    }
`;

const ContactItem = ({name, number, id, removeContact}) => {
    return (
        <Li>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" data-id={id} onClick={removeContact}>
                &#x2715;
            </button>
        </Li>
    );
};

export default ContactItem;
