import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(nextIndex)
        }
    }
    const renderedItems = items.map((item, index) => {
        // if(index === expandedIndex) {
        //     console.log('expanded')
        // } else {
        //     console.log('collapsed')
        // }

        const isExpanded = index === expandedIndex;
        console.log(isExpanded);
        // && returns the last truthy value, this is called conditional rendering...
        // We can put this inline
        // const content = isExpanded && <div>{item.content}</div>

        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        return (
            <div key={item.label}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
            </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })
  return (
    <div className='border-x border-t rounded' >{renderedItems}</div>
  )
}

export default Accordion