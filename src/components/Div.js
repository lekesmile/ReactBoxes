import React from 'react'

const Div = (props) => {
    return (
        <div class="col-md-4">
            
           <h3>Name: {props.name}</h3>
            <p>Age: {props.age}</p>
            
           
        </div>
    )
}

export default Div


