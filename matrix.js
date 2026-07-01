const c = document.getElementById("bg");
const x = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

let y = Array(100).fill(0);

function draw(){
x.fillStyle="rgba(0,0,0,0.08)";
x.fillRect(0,0,c.width,c.height);

x.fillStyle="#00ffcc";

for(let i=0;i<100;i++){
let t = String.fromCharCode(0x30A0 + Math.random()*96);
x.fillText(t,i*15,y[i]*15);
y[i]++;
if(y[i]*15 > c.height) y[i]=0;
}

requestAnimationFrame(draw);
}
draw();