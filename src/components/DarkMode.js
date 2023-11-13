import React, { useState } from 'react'

export default function DarkMode() {
    const [buttonText, setButtonText] = useState("Enable Dark Mode")

    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    })

    function toggleTheme() {
        if (myStyle.backgroundColor === 'white') {
            setButtonText("Enable Light Theme")
            setMyStyle({
                backgroundColor: 'black',
                color: 'white'
            })
        }
        else {
            setButtonText("Enable Dark Theme")
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            })
        }
    }

    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body" style={myStyle}>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/dark" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body" style={myStyle}>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/dark" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-danger my-3' onClick={toggleTheme}>{buttonText}</button>
        </div>
    )
}
