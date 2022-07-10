import {useState } from "react"
import { useComponentVisible } from "../functions/outsideClick"

const DropDown = ({setSortByValue}) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
  const [selected, setSelected] = useState(false)
  const options = ['episode_id', 'release_date']

  const renderOptions = () => {
    if(isComponentVisible) {
      return <div className="drop-down-box">
       {selected 
        ? <div className="drop-down-description clear-sorting" onClick={() => handleOption(false)}><span className="clear-text">Clear sorting</span> <span className="clear-sign">x</span></div>
        : <div className="drop-down-description">Choose an option</div>
      }
        { options.map(option => <div className="drop-down-option" key={option} onClick={() => handleOption(option)}>{option}</div>) }
      </div>
    }
    else return null
  }

  const toogleDropdown = () => {
    setIsComponentVisible(!isComponentVisible)
  }
  const handleOption = (option) => {
    setIsComponentVisible(false)
    setSelected(option)
    setSortByValue(option)
  }

  return (
    <div ref={ref} className="sort-by-key" onClick={() => toogleDropdown()}>
      <span>{selected ? selected : 'Sort by'}</span>
      {renderOptions()}
    </div>
  )
}
export default DropDown
