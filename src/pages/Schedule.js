import React, { useState} from 'react'

import '../css/schedule.css'
import Timetable from '../components/schedule/Timetable'
import Calendar from "../components/schedule/Calendar"

function Schedule() {

    //display calendar function
    
    const [calendar, setCalendar] = useState (null)
    const [calendarShowing, setCalendarShowing] = useState(false)

    const [timetable, setTimetable] = useState (<Timetable/>)


function ToggleCalendarOn(){
        if(calendarShowing===false)
        {
         setCalendar(<Calendar/>)
         setTimetable(<div className="dim"><Timetable/></div>)
         setCalendarShowing(true)
         }
        else{
         setCalendar(null)
         setCalendarShowing(false)
         }
    }


   function ToggleCalendarOff(){
     setCalendar(null)
     setCalendarShowing(false)
     setTimetable(<Timetable/>)
     

}


    return (
        <div id="schedule-page">
            
            <div
             onClick={ToggleCalendarOn} 
             className="calendar">
             </div>
            {calendar}
        
            <div onClick={ToggleCalendarOff}>
                    {timetable}


            </div>


                
        </div>
    )
}

export default Schedule
