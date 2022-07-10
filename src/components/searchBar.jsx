import InputField from "./inputField"
import DropDown from "./dropDown"
const SearchBar = ({setSortByValue, setSearchByString}) => {

  return (
    <div className="search-bar">
      <DropDown setSortByValue={setSortByValue} />
      <InputField setSearchByString={setSearchByString} />
    </div>
  )
}
export default SearchBar