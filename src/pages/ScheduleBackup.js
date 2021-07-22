import React, { useState, useEffect} from 'react'
import TimetableSlot from '../components/schedule/TimetableSlot'
import '../css/schedule.css'
// import timetableData from '../data/timetableDataRandom'
import timetableData from '../data/timetableDataLarge'
import arrowLeft from '../assets/Images/schedule/arrow-left.svg'
import arrowRight from '../assets/Images/schedule/arrow-right.svg'

function Schedule() {

    // initialise today's daye
    let today = new Date(2021, 6, 20)
    // initialise the Monday that starts this week
    const thisMonday = new Date()
    // 0=sunday to 6=saturday
    const todayIndex=today.getDay()

    //set this Monday
    for(let i=0; i<7; i++){
        if(todayIndex===i+1) {
            thisMonday.setDate(today.getDate()-i)
        } else if(todayIndex===0){
            thisMonday.setDate(today.getDate()-6)
        }
    }

    // const displayMonday = thisMonday

    const [displayMonday, setDisplayMonday]= useState(thisMonday)
    
    // set the display
    const weekdays =[]
    for(let i=0; i<5; i++){
        weekdays[i] = new Date(displayMonday)
        weekdays[i].setDate(weekdays[i].getDate()+i)
    }
    
   
    const days = []
    const months = []
    for(let i=0; i<5; i++){
         days[i] =weekdays[i].getDate()
         months[i] = findMonth( weekdays[i].getMonth() )
    }
        
    function findMonth(date){
        const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
        const month = monthName[date]
        return month
    }

    //arrow function
    const [countWeek, setCountWeek] = useState(0);
    function HandleRightArrow(){
        setCountWeek(countWeek+1)
        displayMonday.setDate(displayMonday.getDate()+7)

    }

    function HandleLeftArrow(){
        setCountWeek(countWeek-1)
        displayMonday.setDate(displayMonday.getDate()-7)
        console.log("displayMonday: "+displayMonday)
        console.log("thisMonday: "+thisMonday)
        console.log("today.getDay(): "+today.getDay())
    }

    const mondayTimetable = timetableData.map(sortMondayLessons)
    const tuesdayTimetable = timetableData.map(sortTuesdayLessons)
    const wednesdayTimetable = timetableData.map(sortWednesdayLessons)
    const thursdayTimetable = timetableData.map(sortThursdayLessons)
    const fridayTimetable = timetableData.map(sortFridayLessons)
  

    // filter the data to only select the lessons for the correct day

    function sortMondayLessons(lesson){
        if (lesson.date.getDay()===1
        && lesson.weekbeginning.getDate() === displayMonday.getDate() 
        && lesson.weekbeginning.getMonth() === displayMonday.getMonth() 
        && lesson.weekbeginning.getFullYear() === displayMonday.getFullYear()
        )
        {
          return <TimetableSlot timetableData={lesson} time2="time" key={lesson.id} />
        }
    }


    function sortTuesdayLessons(lesson){
        if (lesson.date.getDay()===2
        && lesson.weekbeginning.getDate() === displayMonday.getDate() 
        && lesson.weekbeginning.getMonth() === displayMonday.getMonth() 
        && lesson.weekbeginning.getFullYear() === displayMonday.getFullYear())
        {
          return <TimetableSlot timetableData={lesson} time2="time" key={lesson.id} />
        }
    }

    function sortWednesdayLessons(lesson){
        if (lesson.date.getDay()===3
        && lesson.weekbeginning.getDate() === displayMonday.getDate() 
        && lesson.weekbeginning.getMonth() === displayMonday.getMonth() 
        && lesson.weekbeginning.getFullYear() === displayMonday.getFullYear())
        {
          return <TimetableSlot timetableData={lesson} time2="time" key={lesson.id} />
        }
    }

    function sortThursdayLessons(lesson){
        if (lesson.date.getDay()===4
        && lesson.weekbeginning.getDate() === displayMonday.getDate() 
        && lesson.weekbeginning.getMonth() === displayMonday.getMonth() 
        && lesson.weekbeginning.getFullYear() === displayMonday.getFullYear())
        {
          return <TimetableSlot timetableData={lesson} time2="time"  key={lesson.id} />
        }
    }

    function sortFridayLessons(lesson){
        if (lesson.date.getDay()===5
        && lesson.weekbeginning.getDate() === displayMonday.getDate() 
        && lesson.weekbeginning.getMonth() === displayMonday.getMonth() 
        && lesson.weekbeginning.getFullYear() === displayMonday.getFullYear())
        {
          return <TimetableSlot timetableData={lesson} time2="time" key={lesson.id} />
        }
    }


    return (
        <div id="schedule-page">
           <div id="schedule-wrapper">
                        <div className="schedule-blank"></div>
                        <div className="schedule-arrows">
                            <span onClick={HandleLeftArrow} className="schedule-arrow last-week"><img src={arrowLeft}/></span>
                            <span onClick={HandleRightArrow} className="schedule-arrow next-week"><img src={arrowRight}/></span>
                    
                        </div>
                        <div className="schedule-times schedule-times-8">8:00</div>
                        <div className="schedule-times schedule-times-9">9:00</div>
                        <div className="schedule-times schedule-times-10">10:00</div>
                        <div className="schedule-times schedule-times-11">11:00</div>
                        <div className="schedule-times schedule-times-12">12:00</div>
                        <div className="schedule-times schedule-times-13">13:00</div>



                        
                        <div 
                        className={`mon-date schedule-date ${today.getDay()=== 1 && thisMonday===displayMonday ? "timetable-today-top" : ""}`}
                        >
                            <div className="schedule-title">
                                <span>MON</span>
                                <span>{days[0]} {months[0]}</span>
                            </div>
                                
                         </div>
                         <div
                          className={`tue-date schedule-date ${today.getDay()=== 2 && thisMonday===displayMonday ? "timetable-today-top" : ""}`}
                          >
                            <div className="schedule-title">
                                <span>TUE</span>
                                <span>{days[1]} {months[1]}</span>
                            </div>
                         </div>
                         <div
                          className={`wed-date schedule-date ${today.getDay()=== 3 && thisMonday===displayMonday? "timetable-today-top" : ""}`}
                          >
                            <div className="schedule-title">
                                <span>WED</span>
                                <span>{days[2]} {months[3]}</span>
                            </div>
                        </div>
                        <div 
                        className={`thurs-date schedule-date ${today.getDay()=== 4 && thisMonday===displayMonday ? "timetable-today-top" : ""}`}
                        >
                            <div className="schedule-title">
                                <span>THU</span>
                                <span>{days[3]} {months[3]}</span>
                            </div>
                        </div>
                        <div 
                        className={`fri-date schedule-date ${today.getDay()=== 5  && thisMonday===displayMonday ? "timetable-today-top" : ""}`}
                        >
                            <div className="schedule-title">
                                <span>FRI</span>
                                <span>{days[4]} {months[4]}</span>
                            </div>
                        </div>

                        <div id="timetable-wrapper">
                         <div className= {` timetable-day timetable-mon ${today.getDay() === 1 && thisMonday===displayMonday ? "timetable-today" : ""} `} >
                             {mondayTimetable}
                        </div>


                        <div className= {` timetable-day timetable-tue ${today.getDay() === 2 && thisMonday===displayMonday ? "timetable-today" : ""} `} >
                             {tuesdayTimetable}
                        </div>


                        {/* <div className= {` timetable-day timetable-tue ${today.getDay() === 2 && thisMonday===displayMonday ? "timetable-today" : ""} `} >
                             {tuesdayTimetable}
                        </div> */}
                        <div className= {` timetable-day timetable-wed ${today.getDay() === 3 && thisMonday===displayMonday ? "timetable-today" : ""} `} >
                             {wednesdayTimetable}
                        </div>
                        <div className= {` timetable-day timetable-thurs ${today.getDay() === 4 && thisMonday===displayMonday ? "timetable-today" : ""} `} >
                             {thursdayTimetable}
                        </div>
                        <div className= {` timetable-day timetable-fri ${today.getDay() === 5 && thisMonday===displayMonday ? "timetable-today" : ""} `} >
                             {fridayTimetable}
                        </div>
                          


                    </div>
                    <span className="sch-illustration"></span>
                </div>

                
        </div>
    )
}

export default Schedule
