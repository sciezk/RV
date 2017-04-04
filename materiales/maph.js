function setup(){
var forma= new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshPhongMaterial({color:'#08cc00'});
malla= new THREE.Mesh(forma, material);

 var LuzPuntual= new THREE.PointLight(0xFFFFFF);
 LuzPuntual.position.x=10;
 LuzPuntual.position.y=10;
 LuzPuntual.position.z=10;
 
escena= new THREE.Scene();
escena.add(malla);
escena.add(LuzPuntual);

camara= new THREE.PerspectiveCamera();
camara.position.z=5;

renderer =new THREE.WebGLRenderer();
renderer.setsize(Window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}
function loop(){

 requestAnimationFrame(loop);
 
 malla.rotation.x+=0.01;
 mallla.rotation.y +=0.01;
 
 renderer.render(escena,camara);
}

var camara, escena, renderer, malla;
setup();
loop();
