function compareTime(time1 , time2){
        let dateTime1 = new Date(time1);
        let dateTime2 = new Date(time2);
        console.log(dateTime1,dateTime2);
        if(dateTime1.getDate() == dateTime2.getDate())
            return dateTime1.getTime() < dateTime2.getTime();
        return dateTime1.getDate() < dateTime2.getDate() ;
}

module.exports = {
    compareTime,
}