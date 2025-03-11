const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("date");
const toggleFormatButton = document.getElementById("toggleFormat");


let is24hoursFormat = true;

function updateClockAndDate(){
    const now=new Date ();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    if(is24hoursFormat){
        const amPm = hours >=  12 ? "PM" : "AM";
        hours=hours % 12 ||12;
        clockElement.textContent=`${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${amPm}`;  
    }else{
        clockElement.textContent=`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }

    const day=now.getDate();
    const month=now.toLocaleDateString("default", {month:"long"});
    const year=now.getFullYear();

    dateElement.textContent=`${day} ${month} ${year}`
}
    

function pad(number) {
    return number < 10 ? `0${number}` : number;
}

toggleFormatButton.addEventListener("click", () => {
    is24hoursFormat = !is24hoursFormat;
    toggleFormatButton.textContent = is24hoursFormat
        ? "Switching to the 12hrs System"
        : "Switching to the 24hrs System"
})


setInterval(updateClockAndDate, 1000);

updateClockAndDate();