// var data = require('./detail.js')

var originalStartDate = "May 24,2021 19:30" //UTC Time
var originalEndDate = "May 24,2021 20:00"   //UTC Time
var eventTitle = "Meeting"
var eventDescription ="dacxi meeting"
var timeZone ="Europe/Paris"


function getCurrentTime(d){
    let date = new Date(d);
    let year = date.getFullYear()
    let month = zeroFill(date.getMonth()+1)
    let day = zeroFill(date.getDate())
    let hour = zeroFill(date.getHours())
    let minite = zeroFill(date.getMinutes())
    let second = zeroFill(date.getSeconds())

    let finalDate = `${year}${month}${day}T${hour}${minite}${second}`
   
    return finalDate //yyyymmddThhmmss

}
function zeroFill(i){
    if(i>=0 && i<=9){
        i = "0"+i
        return i
    }else{
        return i
    }
}


var meetingDetail={
    url:"https://calendar.google.com/calendar/render?",
    action:"TEMPLATE",
    text:this.eventTitle,
    startDate:getCurrentTime(originalStartDate),//yyyymmddThhmmss
    endDate:getCurrentTime(originalEndDate),//yyyymmddThhmmss
    timeZone:this.timeZone,//timeZone
    details:this.eventDescription//description
}



this.addToCalendar()
function addToCalendar(){
    
    let api = `${meetingDetail.url}action=${meetingDetail.action}&text=${meetingDetail.text}&dates=${meetingDetail.startDate}/${meetingDetail.endDate}&ctz=${meetingDetail.timeZone}&details=${meetingDetail.details}`


   let aObj =  document.getElementById("addCalendar")
   aObj.href = api
   console.log(aObj.href)
}
