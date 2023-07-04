import { useState } from "react";
import Dropdown from "../components/Dropdown";


function DropDownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
      setSelection(option);
    }
    console.log("The selected item is",selection)
  
    const options = [
      {label: 'Red', value: 'red'},
      {label: 'Green', value: 'green'},
      {label: 'Yellow', value: 'yellow'},
      {label: 'Blue', value: 'blue'}
    ]
    return (
      <div className="flex">
        <Dropdown value={selection} onChange={handleSelect} options={options}/>
    </div>
    )
}

export default DropDownPage