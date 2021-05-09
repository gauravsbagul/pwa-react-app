import React from 'react'


export const ErrorFallBack=({error}) => (

    <div role="alert">
        <p>Something went wrong:</p>
        <pre style={ { color: 'red' } }>{ error.message }</pre>
    </div>

)