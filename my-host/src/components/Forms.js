import React, {useState} from 'react'

export default function Forms(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLowClick = ()=>{
    console.log("Lowercase was clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
    }

  const handleOnChange = (event)=>{
    console.log("On change.")
    setText(event.target.value)
  }

  const [text, setText] = useState('Sarim loves Sehar💗😉.')
  // setText("Sarim hates maryam.");
  return (
    <>
    <div className="container" style={{color:props.mode ==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==="dark"?"grey":"white",color:props.mode ==="dark"?"white":"black"}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==="dark"?"white":"black"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes Time needed to read required words</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}