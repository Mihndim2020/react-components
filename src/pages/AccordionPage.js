import React from 'react'
import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            label: 'Can I use JS on a project',
            content: 'Yes you can use Javascript in your project because it is the most popular language in the world'
        },
        {
            label: 'Can I use React on a project',
            content: 'Yes you can use React in your project because it is the most popular language in the world'
        },
        {
            label: 'Can I use Angular on a project',
            content: 'Yes you can use Angular in your project because it is the most popular language in the world'
        }
    ]
    
      return (
        <div className="App">
            <h1>Welcome to React Accordion</h1>
            <Accordion items={items}/>
        </div>
      );
}

export default AccordionPage