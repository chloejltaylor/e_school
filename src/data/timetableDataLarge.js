const firstDayOfSchool = new Date(2021, 6, 12)
const data = []
const totalWeeks = 30
const subjects = ["Mathematics", "English", "Biology", "Chemistry", "Physics", "Mathematics", "Spanish", "Geography",  "English", "PE", "Mathematics", "English", "Biology", "Chemistry", "Spanish", "Geography"]
const timings = ["8 - 8:45", "9 - 9:45", "10 - 10:45", "11 - 11:45", "12 - 12:45", "13 - 13:45"]
const lessonsPerDay = [5, 4, 6, 6, 3, 4, 5, 6]
const lessonsArray = []
for(let p=0; p<5*totalWeeks; p++){
    lessonsArray.push(...lessonsPerDay)
}

const weeks= []
const times= []

for (let j=0;j<totalWeeks;j++){
    //make an array of indices for the dates and times possible in a week
    weeks[j] = []
    times[j] = []
    if(Number.isInteger(j/3)){
    for (let i=0;i<5;i++){
        for(let q=0; q<lessonsPerDay[i]; q++){
            let newDate = new Date (firstDayOfSchool.valueOf())
            newDate.setDate(firstDayOfSchool.getDate()+i+(7*j))
            weeks[j].push(newDate)
            times[j].push(q)

        }
    } 
} else if(Number.isInteger(j/2)){
        for (let i=0;i<5;i++){
            for(let q=0; q<lessonsPerDay[i+2]; q++){
                let newDate = new Date (firstDayOfSchool.valueOf())
                newDate.setDate(firstDayOfSchool.getDate()+i+(7*j))
                weeks[j].push(newDate)
                times[j].push(q)

            }
        } 
    } else {
        for (let i=0;i<5;i++){
            for(let q=0; q<lessonsPerDay[i+1]; q++){
                let newDate = new Date (firstDayOfSchool.valueOf())
                newDate.setDate(firstDayOfSchool.getDate()+i+(7*j))
                weeks[j].push(newDate)
                times[j].push(q)

            }
        } 
    }
 }

// make an array of indexes for all the dates and times possible
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

    // the subject of the lesson k is the next element in the array n, looping around from n=0 to n= subjects.length until k=data.length


    const totalSubjects=[]
    for(let n=0; n<40; n++){
        totalSubjects.push(...subjects)
    }


    data[k].subject = totalSubjects[k]





    // one in nine chance of having a test
    if(Number.isInteger(k/9)){
        data[k].test = true
    }

    

}
export default data