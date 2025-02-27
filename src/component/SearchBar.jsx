
const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {
  return (
    <div className="search-container">
    <input 
        type="text"
        placeholder="Search Blogs..."
        value={value}
        className="search-input"
        onChange={onChange}   
    />
    {value && (
        <box-icon name='x' onClick={onClearSearch}></box-icon>
    )}
    <box-icon name='search-alt-2' onClick={handleSearch}></box-icon>
</div>

  )
}

export default SearchBar