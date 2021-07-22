const firstDayOfSchool = new Date(2021, 5, 7)
const data = []
const totalWeeks = 30
const subjects = ["Mathematics", "English", "Biology", "Chemistry", "Physics", "Spanish", "Geography",  "PE"]
const timings = ["8 - 8:45", "9 - 9:45", "10 - 10:45", "11 - 11:45", "12 - 12:45", "13 - 13:45"]

const weeks= []
const times= []
for (let j=0;j<totalWeeks;j++){
    weeks[j] = []
    times[j] = []
    for (let i=0;i<5;i++){
        for(let k=0; k<Math.floor(Math.random()*3+4); k++){
            let newDate = new Date (firstDayOfSchool.valueOf())
            newDate.setDate(firstDayOfSchool.getDate()+i+(7*j))
            weeks[j].push(newDate)
            times[j].push(k)
        }
    }
}

// make an array of all the dates possible
const weeksArray = []
const timesArray = []

for(let l=0; l<totalWeeks; l++){
        weeksArray.push(...weeks[l])
        timesArray.push(...times[l])
}

// const firstMonday = []
for (let k=0; k<weeksArray.length; k++){
    data[k] = {
        id:k,
        subject: "",
        time: "",
        test: false,
        location: "online"
    }
    data[k].date = weeksArray[k]
    data[k].weekbeginning = new Date (weeksArray[k].valueOf())
    data[k].time = timings[timesArray[k]]

    for(let i=0; i<7; i++){
        if(data[k].date.getDay()===i+1) {
            data[k].weekbeginning.setDate(data[k].weekbeginning.getDate()-i)

        } else if(data[k].date.getDay()===0){
            data[k].weekbeginning.setDate(data[k].weekbeginning.getDate()-6)
        }
    }

    data[k].subject = subjects[Math.floor(Math.random()*subjects.length)]
    // one in ten chance of having a test
    if(Math.floor(Math.random()*10)===0){
        data[k].test = true
    }

}
console.log(data)
console.log("data[135].weekbeginning is: " + data[135].weekbeginning + " and data[135].date is: " + data[135].date + "and data[135].date.getDate() is: "+data[135].date.getDate())

export default data