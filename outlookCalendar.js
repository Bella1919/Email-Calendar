
var meetingDetail={
    url:"https://outlook.live.com/calendar/0/deeplink/compose?",
    path:"path=/calendar/action/compose",
    //path require string
    rru:"addevent",
    //rru:require string
    startDate:"2021-05-24T19:30:00+02:00",
    // require format:yyyy-mm-ddThh:mm:ss+UTC Time zone offset 
    //eg:May 24,2021 19:30 UTC+02:00(Europe/Paris)-->2021-05-24T19:30:00+02:00
    endDate:"2021-05-24T20:00:00+02:00",
    // require format:yyyy-mm-ddThh:mm:ss+UTC Time zone offset 
    //eg:May 24,2021 20:00 UTC+02:00(Europe/Paris)-->2021-05-24T20:00:00+02:00
    subject:"Meeting",
    //subject require  string
    body:"example meeting",
    //body require  text  description of event
}



this.addToCalendar()
function addToCalendar(){
    
    let api = `${meetingDetail.url}&rru=${meetingDetail.rru}&startdt=${meetingDetail.startDate}&enddt=${meetingDetail.endDate}&subject=${meetingDetail.subject}&body=${meetingDetail.body}`


   let aObj =  document.getElementById("addOutlookCalendar")
   aObj.href = api
   console.log(aObj.href)
}
