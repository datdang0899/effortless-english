import React from 'react';
import Button from "./Button" ; 

function GroupButtons() {
    const listButton = [
        { 
            icon : <i className="fa fa-star" aria-hidden="true"></i> , 
            id : 1
        },
        {
            icon : <i className="fa fa-archive" aria-hidden="true"></i>, 
            id : 2
        },
        {
            icon : <i className="fa fa-trash" aria-hidden="true"></i>, 
            id : 3 
        }
    ]
        
    

    return (
        <div className='group-buttons'>
            {listButton.map(button => <Button icon={button.icon} key={button.id} bg="bg-groupButton"/>)}
        </div>
    );
}

export default GroupButtons;