function clock(){
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let period = document.getElementById('period');

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
};

setInterval(clock,1000);


// 1. Accessing the body and applying styles
document.body.style.minHeight = "80vh";
document.body.style.background = "#2e2e45";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

// 2. Creating the digital clock container
const digitalClock = document.createElement("div");
digitalClock.className = "digital-clock";
digitalClock.style.color = "#fff";
digitalClock.style.background = "#2d2f38";
digitalClock.style.width = "425px";
digitalClock.style.padding = "20px 45px";
digitalClock.style.borderRadius = "10px";
digitalClock.style.position = "relative";
digitalClock.style.display = "flex";
digitalClock.style.alignItems = "center";
digitalClock.style.justifyContent = "center";
document.body.appendChild(digitalClock);

// 3. Adding glowing animation to the digital clock
const glowingAnimation = `
  @keyframes glowing {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = glowingAnimation;
document.head.appendChild(styleSheet);

// Adding the glowing effect
digitalClock.style.setProperty("animation", "glowing 5s ease infinite");
digitalClock.style.setProperty(
  "background",
  "linear-gradient(45deg, rgb(2, 130, 250), rgb(252, 26, 10), rgb(9, 243, 134))"
);
digitalClock.style.setProperty("background-size", "200% 200%");

// 4. Adding inner elements (hours, minutes, dots)
const hours = document.createElement("div");
hours.id = "hours";
hours.textContent = "12";
hours.style.fontSize = "8em";
hours.style.fontWeight = "600";
hours.style.padding = "0 10px";
hours.style.lineHeight = "125px";
hours.style.background = "-webkit-linear-gradient(90deg, blue, white)";
hours.style.webkitTextFillColor = "transparent";
hours.style.webkitBackgroundClip = "text";
digitalClock.appendChild(hours);

const dots = document.createElement("div");
dots.id = "dots";
dots.textContent = ":";
dots.style.fontSize = "4em";
dots.style.color = "gray";
dots.style.transform = "translateY(-3px)";
digitalClock.appendChild(dots);

const minutes = document.createElement("div");
minutes.id = "minutes";
minutes.textContent = "45";
minutes.style.fontSize = "5em";
minutes.style.fontWeight = "600";
minutes.style.marginLeft = "10px";
minutes.style.transform = "translateY(10px)";
minutes.style.background = "-webkit-linear-gradient(90deg, orchid, white)";
minutes.style.webkitTextFillColor = "transparent";
minutes.style.webkitBackgroundClip = "text";
digitalClock.appendChild(minutes);

// 5. Adding period (AM/PM) and seconds
const rightDown = document.createElement("div");
rightDown.className = "right-down";
rightDown.style.marginLeft = "10px";
digitalClock.appendChild(rightDown);

const period = document.createElement("div");
period.id = "period";
period.textContent = "PM";
period.style.fontSize = "1.8em";
period.style.fontWeight = "600";
period.style.color = "yellow";
period.style.marginLeft = "10px";
rightDown.appendChild(period);

const seconds = document.createElement("div");
seconds.id = "seconds";
seconds.textContent = "30";
seconds.style.fontSize = "1.8em";
seconds.style.fontWeight = "600";
seconds.style.color = "white";
seconds.style.marginLeft = "10px";
rightDown.appendChild(seconds);

// 6. Updating the clock dynamically
setInterval(() => {
  const now = new Date();
  hours.textContent = String(now.getHours()).padStart(2, "0");
  minutes.textContent = String(now.getMinutes()).padStart(2, "0");
  seconds.textContent = String(now.getSeconds()).padStart(2, "0");
  period.textContent = now.getHours() >= 12 ? "PM" : "AM";
}, 1000);
