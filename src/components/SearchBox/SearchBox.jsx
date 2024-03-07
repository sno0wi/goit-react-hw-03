const SearchBox = ({ searchContact }) => {
  const hendleChange = e => {
    const searchName = e.target.value;
    searchContact(searchName);
  };
  return (
    <div>
      <label htmlFor="">
        <span>Find contacts by name</span>
        <input
          type="text"
          placeholder="Enter name"
          name="searchName"
          onChange={hendleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
