function rotation(){
const clock = document.querySelectorAll(".hand");
const hr = document.querySelector("#hh-hand");
const mm = document.querySelector("#mm-hand");
const ss = document.querySelector("#ss-hand");
const time=new Date;
const h=time.getHours();
const m=time.getMinutes();
const s=time.getSeconds();
ss.style.transform = `rotate(${6 * s}deg)`;
mm.style.transform = `rotate(${6 * m}deg)`;
hr.style.transform = `rotate(${30 * h+m/2}deg)`;
}
setInterval(rotation,1000);
