import React from 'react'
import {Link, useParams } from 'react-router-dom'

function Navbar () {

  const { page } = useParams();

  const HeaderLink = ({ page, selected }) => {
    const title = page
  
    return (
     
      <li className= { selected ? 'nav-item-active' : 'nav-item'}>
        <Link
          to={`/${page}`}
          className>
          {title}
        </Link>
        
      </li>

      );
  };


        return (
      <div className="App">
  
          <div className="nav-header">Welcome, Erik</div>
  
            <div id="navbar">

    
                <ul className="nav-list">
                  <HeaderLink  page="Schedule" selected={page === 'Schedule'} />
                  <HeaderLink  page="Library" selected={page === 'Library'} />



                    {/* <Link to= {"/schedule"}>
                    <li className="nav-item ">
                    <span className="nav-link">Schedule</span>
                  </li>
                    </Link>
                    <Link to ="/library">
                    <li className="nav-item ">
                    <span className="nav-link">Library</span>
                  </li>
                  </Link> */}
 
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
