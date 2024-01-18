let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

setInterval(()=>{
    let day = new Date();
    let hr = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();
    let hrotate = (30*hr)+(min/2);
    let mrotate = 6*min;
    let srotate = 6*sec;

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
})