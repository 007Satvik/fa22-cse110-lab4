function timeRn(){
    let d = new Date();
    time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timeRn, 1000);
