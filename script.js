// ----------------------  Digital Clock -------------------------
function clock(){
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let period = document.getElementById('period');
    let dateElement = document.getElementById('date');

    let now = new Date();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h>= 12 ? "PM" : "AM";

    if(h > 12){h = h -12;};

    h = ( h < 10 ) ? "0" + h : h;
    m = ( m < 10 ) ? "0" + m : m;
    s = ( s < 10 ) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;

    let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    let fullDate = now.toLocaleDateString('en-GB', options);
    dateElement.innerHTML = fullDate;

}
;setInterval(clock,1000);


