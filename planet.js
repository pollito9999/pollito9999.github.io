const container = document.getElementById("planet");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,1,0.1,1000);

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(400,400);
container.appendChild(renderer.domElement);

const geo = new THREE.SphereGeometry(1.5,32,32);
const mat = new THREE.MeshBasicMaterial({
  wireframe:true,
  color:0x00ffff
});

const planet = new THREE.Mesh(geo,mat);
scene.add(planet);

camera.position.z = 4;

function animate(){
requestAnimationFrame(animate);
planet.rotation.y += 0.01;
planet.rotation.x += 0.005;
renderer.render(scene,camera);
}
animate();