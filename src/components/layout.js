import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: '600px', padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Mandy Coates</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/gallery">Image Gallery</ListLink>
        <ListLink to="/links">Links</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <div style={{clear: 'both'}}>
      {children}
    </div>
    <Footer/>
  </div>
)