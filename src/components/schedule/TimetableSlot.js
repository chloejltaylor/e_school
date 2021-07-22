import React from 'react'
import locationIcon from '../../assets/Images/schedule/location-icon.png'


function TimetableSlot(props) {

    return(
    <div className="timetable-item">
        <div className={`timetable-item-wrapper 
        ${
            props.timetableData.subject==="Mathematics" ? "sch-maths" 
            : props.timetableData.subject==="Geography" ? "sch-geography"
            : props.timetableData.subject==="History" ? "sch-history"
            : props.timetableData.subject==="English" ? "sch-english"
            : props.timetableData.subject==="Biology" ? "sch-biology"
            : ""}
            `}>
            
            <div>
                <strong><div className="sch-subject">{props.timetableData.subject}</div></strong>
                <span className="sch-time">{props.timetableData.time}</span>
                <div className="sch-location"><img src={locationIcon}/>{props.timetableData.location}</div>
            </div>
        <span className={`sch-test-wrapper ${props.timetableData.test===true ? "show-test" : "hide-test"}`}>
                <span>test</span>
            </span>

        </div>
    </div>
    )
}

export default TimetableSlot