import React from 'react'
import { func } from 'prop-types';

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
