import React from 'react'


// function Greet(){
//     return <h1>Hello Raiyan</h1>
// }
const Greet = (props) => { 
    const {name,heroName} = props
    return (
    <div>
        <h1>Hello {name} also known as {heroName} </h1>
        {props.children}
    </div>
            )
}

export default Greet;