
var meetingDetail={
    url:"https://calendar.yahoo.com/?",
    v:"60",
    //path require must be 60
    title:"meeting",
    //rru:require text
    ST:"20210524T173000Z",
    //  Event start time in UTC. Will be converted to the user's time zone.format:yyyymmddThhmmss 
    //eg:May 24,2021 19:30 UTC+02:00(Europe/Paris)-->20210524T173000Z
    ET:"20210524T180000Z",
    // Event end time in UTC. Will be converted to the user's time zone.format:yyyymmddThhmmss
    //eg:May 24,2021 20:00 UTC+02:00(Europe/Paris)-->20210524T180000Z
}



this.addToCalendar()
function addToCalendar(){
    
    let api = `${meetingDetail.url}&v=${meetingDetail.v}&ST=${meetingDetail.ST}&ET=${meetingDetail.ET}&title=${meetingDetail.title}`


   let aObj =  document.getElementById("addYahooCalendar")
   aObj.href = api
   console.log(aObj.href)
}
