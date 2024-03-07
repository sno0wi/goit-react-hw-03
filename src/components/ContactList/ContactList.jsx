const ContactList = ({ contacts }) => {
  return (
    <>
      {contacts.map(contact => {
        return (
          <div key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button type="button">Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default ContactList;
