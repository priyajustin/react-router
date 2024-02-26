import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function TopNav() {
  return (
<>
<nav className="navbar bg-body-tertiary topnav">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="https://raw.githubusercontent.com/Prakash-V-S/Guvi-Blog-Clone-ReactRouter/d829720a1726fe4ab3347e4616ee11b28d03bb1f/src/assets/Guvi-blog-logo.png"
       alt="Bootstrap" width="120" height="50"/> 
    </a>
  </div>
</nav>
<div className='container'>
<div className='navimg d-flex justify-content-center'>
<img src="https://raw.githubusercontent.com/Prakash-V-S/Guvi-Blog-Clone-ReactRouter/d829720a1726fe4ab3347e4616ee11b28d03bb1f/src/assets/blog-header.png" 
alt="Bootstrap" width="90%" height="30%"/> 
</div>

</div>
</>  )
}

export default TopNav 