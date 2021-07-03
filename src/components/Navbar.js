import React from 'react'
import {Link} from 'react-router-dom'

function Navbar () {


        return (
      <div className="App">
  
          <div className="nav-header">Welcome, Erik</div>
  
            <div id="navbar">

    
                <ul className="nav-list">
                    <Link to= {"/schedule"}>
                    <li className="nav-item ">
                    <span className="nav-link">Schedule</span>
                  </li>
                    </Link>
                    <Link to ="/library">
                    <li className="nav-item ">
                    <span className="nav-link">Library</span>
                  </li>
                  </Link>
 
                  <li className="nav-item ">
                    <span className="nav-link">Page 3</span>
                  </li>
                  <li className="nav-item ">
                    <span className="nav-link">Page 4</span>
                  </li>
                  <li className="nav-item ">
                    <span className="nav-link">Page 5</span>
                  </li>
                  <li className="nav-item ">
                    <span className="nav-link">Page 6</span>
                  </li>
                </ul>
  
            </div>

  
      </div>
    );
  }

  

export default Navbar;
