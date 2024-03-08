const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts.map(contact => {
        return (
          <div key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ContactList;
