import React from 'react';

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello Raiyan</h1>
    //     </div>
    // )
    return React.createElement('div', null,React.createElement('h1',
    {id:'hello'},'Hello Raiyan'))
}

export default Hello;