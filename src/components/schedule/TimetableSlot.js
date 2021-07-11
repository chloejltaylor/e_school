import React from 'react'

function TimetableSlot(props) {

    return(
    <div className="timetable-item">
        <div className="timetable-item-wrapper">
            <p className="subject">{props.subject}</p>
            <p className="time">{props.time}</p>
            <p className="location">{props.location}</p>
        </div>
    </div>
    )
}

export default TimetableSlot