import React, { useState } from 'react'

export default function Form(props) {
    const textInp = document.getElementById('textInp')

    const [val, setval] = useState('')

    function handleUp() {
        let newText = val.toUpperCase();
        setval(newText);
        props.setAlert("Converted to Upper case", 'success')
    }

    function handleLo() {
        let newText = val.toLowerCase();
        setval(newText);
        props.setAlert("Converted to Lower case", 'success')
    }

    function textChange(event) {
        setval(event.target.value);
    }

    function handleClr() {
        let newText = "";
        setval(newText);
        props.setAlert("Text cleared", 'success')
    }

    function handleCopy() {
        navigator.clipboard.writeText(textInp.value)
        props.setAlert("Text copied", 'success')
    }

    function handleSelect() {
        textInp.select();
        props.setAlert("Text selected", 'success')
    }
    return (
        <>
            <div className="container my-5">
                <div className="htmlForm-group">
                    <h1><label htmlFor="textInp" style={props.mode === 'light' ? { color: "black" } : { color: "white" }}>{props.head}</label></h1>
                    <textarea className="form-control" id="textInp" value={val} rows="10" onChange={textChange}></textarea>
                    <button disabled={val.length === 0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} my-2 mx-3`} onClick={handleUp}>{props.upperText}</button>
                    <button disabled={val.length === 0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} my-2 mx-3`} onClick={handleLo}>{props.lowerText}</button>
                    <button disabled={val.length === 0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} my-2 mx-3`} onClick={handleClr}>{props.clrText}</button>
                    <button disabled={val.length === 0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} my-2 mx-3`} onClick={handleCopy}>{props.cpyText}</button>
                    <button disabled={val.length === 0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} my-2 mx-3`} onClick={handleSelect}>{props.selectText}</button>
                </div>
            </div>
            <div className="container my-3" style={props.mode === 'light' ? { color: "black" } : { color: "white" }}>
                <h2>Text Count</h2>
                <p>{val.split(/\s+/).filter((word) => { return word.length > 0 }).length} words and {val.split('').filter((letter) => { return letter !== " " }).length} letters</p>
                <h2>Preview</h2>
                <p>{val.length > 0 ? val : 'Enter your text to get preview'}</p>
            </div>
        </>
    )
}
