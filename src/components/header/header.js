import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {auth, firebase, googleAuthProvider } from '../../firebase/firebase'

const Header = (props) => (
    <header>
    <div className="collapse bg-dark" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4 className="text-white">About</h4>
            <p className="text-muted">Tourister makes Virtual Signtseeing fun and easy. Justy type in a location that you would like to visit. Tourister will then compile a gallery of local images. You can add your own locations to the list, or take a Google StreetView tour of that area.</p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4 className="text-white">Contact</h4>
            <ul className="list-unstyled">
              <li><a href="http://pat.rickjobin.com" className="text-white">Visit my Web Site</a></li>
              <li><a href="mailto:p@rickjobin.com" className="text-white">Email me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container d-flex justify-content-between">
    <NavLink to="/" className="navbar-brand d-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      <strong>Tourister</strong>
    </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
  </header>
  )



export default Header
