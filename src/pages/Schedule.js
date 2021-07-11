import React from 'react'
import TimetableSlot from '../components/schedule/TimetableSlot'
import '../css/schedule.css'
import timetableData from '../data/timetableData'
import arrowLeft from '../assets/Images/schedule/arrow-left.svg'
import arrowRight from '../assets/Images/schedule/arrow-right.svg'

function Schedule() {

    // const startDate = new Date(2021, 6, 30)
    const startDate = new Date(2021, 6, 20)
    let today = new Date()
    const todayIndex=today.getDay()
    console.log("today's index: "+todayIndex)

    // for(let i=0; i<7; i++){
    //     if(todayIndex===i+1) {
    //         console.log("i="+ i)
    //         startDate.setDate(todayIndex-i)
    //     } else if(today.getDay()===0){
    //         console.log("i="+ i)
    //         startDate.setDate(todayIndex-6)
    //     }
    // }


    for(let i=0; i<7; i++){
        if(today.getDay()===i+1) {
            console.log("i="+ i)
            startDate.setDate(today.getDate()-i)
        } else if(today.getDay()===0){
            console.log("i="+ i)
            startDate.setDate(today.getDate()-6)
        }
    }

const weekdays =[]

    for(let i=0; i<5; i++){
        weekdays[i] = new Date(startDate)
        weekdays[i].setDate(weekdays[i].getDate()+i)
    }
    
    // const today = new Date(2021, 8, 16)
    // const today = new Date(2021, 6, 9 )
    // const thisMonday = new Date(2021, 6, 9 )

    //     for(let i=0; i<7; i++){
    //         if(today.getDay()===i+1) {
    //             console.log("i="+i)
    //             thisMonday.setDate(today.getDate()-i)
    //         } else if(today.getDay()===0){
    //             console.log("i="+i)
    //             thisMonday.setDate(today.getDate()-6)
    //         }
    //     }

    const Monday = weekdays[0].getDate() 
    const Tuesday = weekdays[1].getDate() 
    const Wednesday = weekdays[2].getDate() 
    const Thursday = weekdays[3].getDate() 
    const Friday = weekdays[4].getDate()
    
     
    const MondayMonth = findMonth( weekdays[0].getMonth() )
    const TuesdayMonth = findMonth( weekdays[1].getMonth() )
    const WednesdayMonth = findMonth( weekdays[2].getMonth() ) 
    const ThursdayMonth = findMonth (weekdays[3].getMonth() )
    const FridayMonth = findMonth( weekdays[4].getMonth() )

        
    function findMonth(date){
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
        const month = months[date]
        return month
    }
    
     

    return (
        <div id="schedule-page">
           <div id="schedule-wrapper">
                        <div className="schedule-blank"></div>
                        <div className="schedule-arrows">
                            <span className="schedule-arrow last-week"><img src={arrowLeft}/></span>
                            <span className="schedule-arrow next-week"><img src={arrowRight}/></span>
                        </div>
                        <div className="schedule-times schedule-times-8">8:00</div>
                        <div className="schedule-times schedule-times-9">9:00</div>
                        <div className="schedule-times schedule-times-10">10:00</div>
                        <div className="schedule-times schedule-times-11">11:00</div>
                        <div className="schedule-times schedule-times-12">12:00</div>
                        <div className="schedule-times schedule-times-13">13:00</div>

                        <div 
                        className={`mon-date schedule-date ${today.getDay()=== 1 ? "timetable-today" : ""}`}
                        >MON<br/>
                        {Monday} {MondayMonth}
                         </div>
                         <div
                          className={`tue-date schedule-date ${today.getDay()=== 2 ? "timetable-today" : ""}`}
                          >TUE <br/>
                        {Tuesday} {TuesdayMonth}
                         </div>
                         <div
                          className={`wed-date schedule-date ${today.getDay()=== 3 ? "timetable-today" : ""}`}
                          >WED <br/>
                        {Wednesday} {WednesdayMonth}
                        </div>
                        <div 
                        className={`thurs-date schedule-date ${today.getDay()=== 4 ? "timetable-today" : ""}`}
                        >THURS <br/>
                        {Thursday} {ThursdayMonth}
                        </div>
                        <div 
                        className={`fri-date schedule-date ${today.getDay()=== 5 ? "timetable-today" : ""}`}
                        >FRI <br/>
                        {Friday} {FridayMonth}
                        </div>

                        <div id="timetable-wrapper">
                           <div className= {` timetable-day timetable-mon ${today.getDay() === 1 ? "timetable-today" : ""} `} >
                               <TimetableSlot day="tue" subject={timetableData[0].subject} time={timetableData[0].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[1].subject} time={timetableData[1].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[2].subject} time={timetableData[2].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[3].subject} time={timetableData[3].time} location={timetableData[0].location}/>
                              
                           </div> 
            
                           <div className= {` timetable-day timetable-tues ${today.getDay() === 2 ? "timetable-today" : ""} `}>
                               <TimetableSlot day="tue" subject={timetableData[0].subject} time={timetableData[0].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[1].subject} time={timetableData[1].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[2].subject} time={timetableData[2].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[3].subject} time={timetableData[3].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[4].subject} time={timetableData[4].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[5].subject} time={timetableData[5].time} location={timetableData[0].location}/>

                           </div> 

                           <div className= {` timetable-day timetable-wed ${today.getDay() === 3 ? "timetable-today" : ""} `}>
                                <TimetableSlot day="tue" subject={timetableData[0].subject} time={timetableData[0].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[1].subject} time={timetableData[1].time} location={timetableData[0].location}/>
                    
                               <TimetableSlot day="tue" subject={timetableData[3].subject} time={timetableData[3].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[4].subject} time={timetableData[4].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[5].subject} time={timetableData[5].time} location={timetableData[0].location}/>

                     
                           </div> 

                           <div className= {` timetable-day timetable-thurs ${today.getDay() === 4 ? "timetable-today" : ""} `} > 
                               <TimetableSlot day="tue" subject={timetableData[1].subject} time={timetableData[1].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[2].subject} time={timetableData[2].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[3].subject} time={timetableData[3].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[4].subject} time={timetableData[4].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[5].subject} time={timetableData[5].time} location={timetableData[0].location}/>

                           </div> 

                           <div className= {` timetable-day timetable-fri ${today.getDay() === 5 ? "timetable-today" : ""} `}>
                           <TimetableSlot day="tue" subject={timetableData[0].subject} time={timetableData[0].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[1].subject} time={timetableData[1].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[2].subject} time={timetableData[2].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[3].subject} time={timetableData[3].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[4].subject} time={timetableData[4].time} location={timetableData[0].location}/>
                               <TimetableSlot day="tue" subject={timetableData[5].subject} time={timetableData[5].time} location={timetableData[0].location}/>


                           </div> 


                        </div>
           </div>
        </div>
    )
}

export default Schedule
