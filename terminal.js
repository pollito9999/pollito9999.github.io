const cmd = document.getElementById("cmd");
const out = document.getElementById("out");

function print(t){
  out.innerHTML += `> ${t}<br>`;
  out.scrollTop = out.scrollHeight;
}

cmd.addEventListener("keydown", async (e)=>{
if(e.key !== "Enter") return;

let v = cmd.value.toLowerCase();
print(v);

if(v === "help"){
  print("commands: github / repos / clear / ask <text>");
}

else if(v === "github"){
  window.open("https://github.com/pollito1337");
  print("opening github...");
}

else if(v === "repos"){
  const r = await fetch(`https://api.github.com/users/pollito1337/repos`).then(r=>r.json());
  print(r.slice(0,5).map(x=>"• "+x.name).join("<br>"));
}

else if(v.startsWith("ask")){
  let q = v.replace("ask","");
  let answers = [
    "analysis complete: you're building something insane.",
    "system response: continue coding.",
    "neural link stable.",
    "creativity level: high."
  ];
  print(answers[Math.floor(Math.random()*answers.length)]);
}

else if(v === "clear"){
  out.innerHTML="";
}

else{
  print("unknown command. type help");
}

cmd.value="";
});