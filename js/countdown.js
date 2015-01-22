//change the text below to reflect your own,
var before = "Valentines Day!";
var current = "Today is Valentines Day!";
var montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");


function countdown(yr,m,d)
{
year=yr;month=m;day=d

var today=new Date()
var currentYear=today.getYear()
if (currentYear < 1000)
{
currentYear+=1900
}
var currentMonth=today.getMonth()
var currentDay=today.getDate()
var currentHour=today.getHours()
var currentMinute=today.getMinutes()
var currentSecond=today.getSeconds()
var todayDate=montharray[currentMonth]+" "+currentDay+", "+currentYear+" "+currentHour+":"+currentMinute+":"+currentSecond
futureDate=montharray[m-1]+" "+d+", "+yr
dd=Date.parse(futureDate)-Date.parse(todayDate)
dday=Math.floor(dd/(60*60*1000*24)*1)
dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
if(dday==0&&dhour==0&&dmin==0&&dsec==1)
{
document.forms.count.count2.value=current
return
}
else
document.forms.count.count2.value="Only "+dday+ " days, "+dhour+" hours, "+dmin+" minutes, and "+dsec+" seconds left until "+before
setTimeout("countdown(year,month,day)",1000)
}
//enter the count down date using the format year/month/day
countdown(2015,02,14)