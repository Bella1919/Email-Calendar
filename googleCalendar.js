
var meetingDetail={
    url:"https://calendar.google.com/calendar/render?",
    action:"TEMPLATE",
    //action require string
    text:"Meeting",
    //action require string
    startDate:"20210524T193000",
    //startDate require format：yyyymmddThhmmss 
    //eg:May 24th 2021,19:30-->20210524T193000
    endDate:"20210524T200000",
    //endDate require format：yyyymmddThhmmss 
    //eg:May 24th 2021,20:00-->20210524T193000
    timeZone:"Europe/Paris",
    //timeZone:event timezone
    details:"example meeting"
    //details:description of event text
}



this.addToCalendar()
function addToCalendar(){
    
    let api = `${meetingDetail.url}action=${meetingDetail.action}&text=${meetingDetail.text}&dates=${meetingDetail.startDate}/${meetingDetail.endDate}&ctz=${meetingDetail.timeZone}&details=${meetingDetail.details}`


   let aObj =  document.getElementById("addGoogleCalendar")
   aObj.href = api
   console.log(aObj.href)
}
