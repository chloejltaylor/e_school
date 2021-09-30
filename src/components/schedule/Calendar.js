import React, {useState, useEffect} from 'react'
import arrowLeft from '../../assets/Images/schedule/arrow-left.svg'
import arrowRight from '../../assets/Images/schedule/arrow-right.svg'


function Calendar() {



    const allMonths = ["January", "February","March","April","May","June","July","August","September","October","November","December"]
    const today = new Date(2022,8,8);
    const thisMonth = today.getMonth();
    const [firstDateOfMonth, setFirstDateOfMonth] = useState( new Date(today.getFullYear(), today.getMonth(), 1 ));
    const [firstDayOfMonth, setFirstDayOfMonth] = useState( new Date(today.getFullYear(), today.getMonth(), 1 ).getDay());
    const [lastDateOfMonth, setLastDateOfMonth] = useState(new Date(today.getFullYear(), today.getMonth()+1, 0).getDate());
    const [monthDisplayCount, setMonthDisplayCount] = useState(thisMonth)
    const [monthCount, setMonthCount] = useState(0)

    //empty array for the months 7 x 6 grid
    let allDates = Array(42).fill(<span></span>)

    //fill in this month's dates
    for(let i=0;i<lastDateOfMonth;i++){
            allDates[i+firstDayOfMonth]=<span class="date-this-month">{i+1}</span>;
    }
    if(monthCount===0){
        allDates[firstDayOfMonth+today.getDate()-1]=<span class="today-circle">{today.getDate()}</span>
    }


    //fill in previous month's dates
    let lastDateOfPreviousMonth=new Date(2022,8,8); // current date
    lastDateOfPreviousMonth.setDate(1); 
    lastDateOfPreviousMonth.setHours(-1); 
 
    for(let i=0; i<firstDayOfMonth;  i++){
        allDates[i]=<span className="inactive-month">{lastDateOfPreviousMonth.getDate()-firstDayOfMonth+1+i}</span>
    }
   

    //fill in next month's dates
    if(lastDateOfMonth+firstDayOfMonth>35) {    
        for(let i=lastDateOfMonth+firstDayOfMonth; i<42;  i++){
            allDates[i]=<span className="inactive-month">{i-lastDateOfMonth-firstDayOfMonth+1}</span>
        }
    } else {
        for(let i=lastDateOfMonth+firstDayOfMonth; i<35;  i++){
            allDates[i]=<span className="inactive-month">{i-lastDateOfMonth-firstDayOfMonth+1}</span>
        }
    }

    

    //arrows display previous and next month



    useEffect(() => {
        setFirstDateOfMonth(new Date(today.getFullYear(), today.getMonth()+monthCount, 1 ))
        setFirstDayOfMonth(firstDateOfMonth.getDay())
        setLastDateOfMonth(new Date(today.getFullYear(), today.getMonth()+1+monthCount, 0).getDate())
        
        

        });

    function PreviousMonth(){
        monthDisplayCount === 0 ? setMonthDisplayCount(11) : setMonthDisplayCount(monthDisplayCount-1)
        setMonthCount(monthCount-1)
        
    }

    function NextMonth(){
        monthDisplayCount === 11 ? setMonthDisplayCount(0) : setMonthDisplayCount(monthDisplayCount+1)
        setMonthCount(monthCount+1)
    }

    return(
    <div id="schedule-calendar">
           <div id="schedule-calendar-header">
            <span className="calender-month">{allMonths[monthDisplayCount]}</span>
            <span>
                <span onClick={PreviousMonth} className="schedule-calendar-arrow last-month"><img src={arrowLeft}/></span>
                <span onClick={NextMonth} className="schedule-calendar-arrow next-month"><img src={arrowRight}/></span>
            </span>
           </div>
           <div id="schedule-calendar-wrapper">
                <span className="schedule-calendar-months">SU</span>
                <span className="schedule-calendar-months">MO</span>
                <span className="schedule-calendar-months">TU</span>
                <span className="schedule-calendar-months">WE</span>
                <span className="schedule-calendar-months">TH</span>
                <span className="schedule-calendar-months">FR</span>
                <span className="schedule-calendar-months">SA</span>
                {allDates}
           </div>
       </div>
    )
}

export default Calendar