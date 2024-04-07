const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let radius = myCanvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9 ;

setInterval(canvas, 1000);

 function canvas() {
    drawClockDial();
    addNumbers();
    drawHands();
}

let drawClockDial = () => {
    const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, "lightblue");
    grad.addColorStop(0.5, "pink");
    grad.addColorStop(1, "blue");

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#333";
    ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
    ctx.fill();
}

let drawHands = () => {
    const now = new Date();

    ctx.lineCap = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#333";

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let hourAngle = ((4 * Math.PI) / (24 * 60 * 60)) * (hour * 60 * 60 + minute * 60 + second);
    let minuteAngle = ((2 * Math.PI) / (60 * 60)) * (minute * 60 + second);
    let secondAngle = ((2 * Math.PI) / 60) * second; 

    drawHand(hourAngle, radius * 0.5, 5);
    drawHand(minuteAngle, radius * 0.75, 5);
    drawHand(secondAngle, radius * 0.8, 1);
}

let drawHand = function(angle, len, lineWidth) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(-Math.PI / 2);
    ctx.lineWidth = lineWidth;
    ctx.rotate(angle);
    ctx.lineTo(len, 0);
    ctx.rotate(-angle);
    ctx.rotate(Math.PI / 2);
    ctx.stroke();
}

let addNumbers = () => {
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let num = 1; num <= 12; ++num) {
        let ang = num * (Math.PI / 6);
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

