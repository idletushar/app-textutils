import React from 'react'


export default function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{height: '50px'}}>
    {/* // this syntax will make jsx to javascripts call */}
    {props.alert && <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong> {capitalize(props.alert.type)} </strong> {props.alert.msg}
        </div>
    </div>}
    </div>
  )
}
