const user = "pollito1337";

fetch(`https://api.github.com/users/${user}/repos`)
.then(r => r.json())
.then(data => {

  repos.innerHTML = data.map(r => `
    <a class="repo" href="${r.html_url}" target="_blank">
      <b>${r.name}</b><br>
      <small>${r.language || "unknown"} ⭐${r.stargazers_count}</small>
    </a>
  `).join("");

});