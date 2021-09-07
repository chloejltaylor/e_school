import React from 'react'
import {Link, useParams } from 'react-router-dom'
import Logo from '../assets/Images/common/logo.svg'
import ProfilePicture from '../assets/Images/common/profile-picture.png'
import Search from '../assets/Images/common/search.svg'
import ScheduleSelected from '../assets/Images/common/schedule-selected.svg'
import Subjects from '../assets/Images/common/subjects.svg'
import Homeworks from '../assets/Images/common/homeworks.svg'
import Library from '../assets/Images/common/library.svg'
import Grades from '../assets/Images/common/grades.svg'

const HeaderLink = ({ path, selected, title, icon, iconSelected }) => {

  return (
   
    <li className= { selected ? 'nav-item-active' : 'nav-item'}>
      <Link
        to={`${path}`}
        className
      >
        <span>{title}</span> 
        <img src={selected ? iconSelected : icon}/>
      </Link>
      
    </li>

    );
};

function Navbar () {
  const { page } = useParams();

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
              <HeaderLink
                title="Schedule" 
                path="/schedule" 
                selected={page === 'schedule'} 
                icon={ScheduleSelected}
                iconSelected={ScheduleSelected}
              />
              <HeaderLink 
                title="Subjects" 
                path="/subjects" 
                selected={page === 'subjects'} 
                icon={Subjects}
                iconSelected={Subjects}
              />
              <HeaderLink 
                title="Homeworks" 
                path="/homeworks" 
                selected={page === 'homeworks'}
                icon={Homeworks}
                iconSelected={Homeworks} 
              />
              <HeaderLink 
                title="Library" 
                path="/library" 
                selected={page === 'library'} 
                icon={Library}
                iconSelected={Library}
              />
              <HeaderLink 
                title="Grades/Points" 
                path="/grades" 
                selected={page === 'grades'}
                icon={Grades} 
                iconSelected={Grades} 
              />
            </ul>
        </div>


    </div>
  );
}

  

export default Navbar;
