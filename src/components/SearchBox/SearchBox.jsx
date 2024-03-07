const SearchBox = ({ findContact }) => {
  return (
    <div>
      <label htmlFor="">
        <span>Find contacts by name</span>
        <input
          type="text"
          placeholder="Enter name"
          name="searchName"
          onChange={findContact}
        />
      </label>
    </div>
  );
};

export default SearchBox;
