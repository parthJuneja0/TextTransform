import React from 'react'
import propType from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    function togglePallete(event) {
        document.body.classList.remove('bg-primary', 'bg-danger', 'bg-warning', 'bg-success')
        document.body.classList.add(event.target.classList[0])
    }

    return (
        <>
            <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`} style={props.navStyle} >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">{props.appName}</Link>
                    <Link to="/dark" className="navbar-brand">Dark Mode</Link>

                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={togglePallete} style={{ height: '20px', width: '20px', cursor: 'pointer' }}  ></div>
                        <div className="bg-danger rounded mx-2" onClick={togglePallete} style={{ height: '20px', width: '20px', cursor: 'pointer' }}  ></div>
                        <div className="bg-warning rounded mx-2" onClick={togglePallete} style={{ height: '20px', width: '20px', cursor: 'pointer' }}  ></div>
                        <div className="bg-success rounded mx-2" onClick={togglePallete} style={{ height: '20px', width: '20px', cursor: 'pointer' }}  ></div>
                    </div>
                </div>
            </nav >

            <div className="form-check form-switch" onClick={props.toggleMode} style={props.mode === 'light' ? { color: "black" } : { color: "white" }}>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.themeText}</label>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>

        </>
    )
}

Navbar.propType = {
    appName: propType.string.isRequired,
    searchText: propType.string.isRequired
}

Navbar.defaultProps = {
    appName: "MY APP",
    searchText: "Click to search"
}