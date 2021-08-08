import React from 'react'
import {Link, useParams } from 'react-router-dom'
import Logo from '../assets/Images/common/logo.svg'
import ProfilePicture from '../assets/Images/common/profile-picture.png'
import Search from '../assets/Images/common/search.svg'

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
  
          <div className="nav-header">
              <div className="nav-header-wrapper">
                <div className="logo">
                  <img src={Logo}/>
                </div>
                <div className="welcome">Hello Erik, it's good to see you again!</div>
                <div className="search">
                  <img src={Search}/>
                  <input type="text" placeholder="Search"/>
                </div>
                <div className="profile-picture">
                   <img src={ProfilePicture}/>
                </div>
              </div>
          </div>
  
            <div id="navbar">

    
                <ul className="nav-list">
                  <HeaderLink  page="Schedule" selected={page === 'Schedule'} />
                  <HeaderLink  page="Library" selected={page === 'Library'} />

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
