import React, {useState} from 'react'


export default function Textform(props) {
    // while using hooks use the same syntext as below
    // declare a new state variable, which we'll call "const"
    // creating state
    const [text, setText] = useState('');
    
    const handleOnChange =(event)=>{
        // console.log('onChange')
        setText(event.target.value)
        // after using syntext writtern above user can also setText
    }

    const handleUpperCaseClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCAse!', 'success')
    }

    const handleLowerCaseClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to LowerCAse!', 'success')
    }
    
    const handleClearClick =()=>{
        let newText = '';
        setText(newText)
        props.showAlert('Text Cleared!', 'success')
    }

    const handleCopy =()=>{
        let text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Coped to Clipboard!', 'success')
    }

    const handleExtraSpaces =()=>{
        // logic made using regex (logic copied)
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces have been removed!', 'success')
    }

    return (
    <>
    {/* <div style={myStyle}>        */}
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.head}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} placeholder='Enter your Text Here' rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my=2" onClick={handleUpperCaseClick}>Convert to UpperCAse</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my=2" onClick={handleLowerCaseClick}>Convert to LowerCAse</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my=2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my=2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my=2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <hr />
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <hr/>
            {/* text.split is an array. used for counting words */}
            {/* (/\s+/) this is an regular expression */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <hr />
            <h3>Preview</h3>
            <hr/>
            <p>{text.length>0?text: "Enter something to preview it here."}</p>
            <hr />
            </div>
    {/* </div> */}
    </>
  )
}
