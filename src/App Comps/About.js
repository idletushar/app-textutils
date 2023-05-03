import React from 'react'

export default function About(props) {
    return (
    <>
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>About Us</h1>
            <p>TextUtils is a word counter and a character utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from Upper case to lower case and Lowercase to uppercase.</p>
        </div>      
    </>
  )
}
