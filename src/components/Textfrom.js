import React, {useState} from 'react'


export default function Textfrom(props) {
    const[text, setText]=useState("")
    //text= "new text"; this is a wrong way to change the state value
    //setText("newText");  this is a right way to change the state value
    const upclick=()=>{
        console.log("uppercase was clicked"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("your text has been convert to uppercase","success ")
    }
    const lowclick=()=>{
        console.log(text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("your text is convert to lowercase","success ")
        
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const removetext=()=>{
        let newtext=" ";
        setText(newtext)
        props.showAlert("your text has been cleard","success ")
    }
    const copytext=()=>{
        var text=document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("your text has been copied on your clipboard","success ")
    }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} style= {{backgroundColor:props.mode==="dark"?"grey":"white"}}id="my-box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upclick}>convert to upper case</button>
            <button className="btn btn-success mx-2 my-3" onClick={lowclick}>convert to lower case</button>
            <button className="btn btn-danger mx-2 my-3" onClick={removetext}>clear all</button>
            <button className="btn btn-primary mx-2" onClick={copytext}>copy text</button> 
        </div>
        <div className="container">
            <h1>your text summary</h1>
            <p>you have {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
