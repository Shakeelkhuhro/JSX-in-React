import React, { useState } from 'react'



export default function TextFrom(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked")
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        console.log("LowerCase was clicked")
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        console.log("Clear was clicked")
        let newText= '';
        setText(newText);
    }

    const handleOnChange=(event)=>{
        console.log("Uppercase was clicked")
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text="New text" it is worng way to change the state 
    // setText("New Text Here"); // Correct way to change the state
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *(text.split(" ").length)} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
