import React, { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {

    const handler = (event) => {

      if (!divEl.current) { // This is used if the element is not visible(hidden)
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }; // If not the targeted element is clicked
    }

    document.addEventListener('click', handler, true);

    return () => { // Stops the eventListener if an element is removed from the screen.
      document.removeEventListener('click', handler);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  }

  const renderedOptions = options.map((option) => {
    return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>
      {option.label}
    </div>
  })
  // let content = "Select...";
  // if (value) {
  //   content = value.label;
  // }
  // A more compressed implementation below...
  return (
    <div className='w-48 relative'> 
      <div ref={divEl} className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>{value?.label || "Select..."}
      <GoChevronDown className='text-lg' />
      </div>
      {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown