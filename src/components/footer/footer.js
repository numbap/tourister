import React from 'react'
import LoginButton from '../login/login'

const Footer = (props) => {
    return (
        <footer className="text-muted">
          <div className="container">
            <p className="float-left">Logged in as <strong>{props.name}</strong>.</p>
            <p className="float-right">
            <LoginButton/>
            </p>
          </div>    
        </footer>
    )
}

export default Footer 
