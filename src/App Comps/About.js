import React from 'react'

export default function About(props) {
    return (
    <>
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>About Us</h1>

        </div>      
    </>
  )
}
