
import React from 'react'
import {Link} from 'react-router-dom' 

function Header() {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
     
        <Link className='nav-link active' to='/'> Home </Link>
        <Link className='nav-link active' to='/About'> About </Link>
        <Link className='nav-link active' to='/Contact'> Contact </Link>
        
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}
export default Header


