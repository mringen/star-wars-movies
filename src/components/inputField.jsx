const InputField = ({setSearchByString}) => {

  return (
    <div className="search-by-text">
      <input
        className="input-field"
        type="text"
        placeholder="Type to search..."
        onChange={(e) => setSearchByString(e.target.value)}
      />
    </div>
  )
}
export default InputField