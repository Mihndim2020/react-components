import React, { useState } from 'react'

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(1);
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
        return (
            <div key={item.label}>
                <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })
  return (
    <div>{renderedItems}</div>
  )
}

export default Accordion