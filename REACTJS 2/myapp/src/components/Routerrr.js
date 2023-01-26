

import React from 'react'
import {BrowserRouter as Router , Switch , Link , Route } from 'react-router-dom'

function Routerrr() {
  return (
    <Router>

        <div>
            <nav> 
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/User'>User</Link>
                    </li> 
                </ul>
            </nav>
        </div>

        <Switch>

            <Route path='/About'>
                <About/>
            </Route>

            <Route path='/User'>
                <User/>
            </Route>

            <Route path='/'>
                <Home/>
            </Route>

               
        </Switch>
          

    </Router>

  )
}

function Home()
{
    return <h2>Hello Home</h2>
}
 

function About()
{
    return <h2>Hello About</h2>
}
  

function User()
{
    return <h2>Hello User</h2>
}

export default Routerrr;
