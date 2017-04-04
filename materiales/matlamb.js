function setup(){
var forma= new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({color:'#08cc00'});
malla= new THREE.Mesh(forma, material);

escena= new THREE.scene();
escena.add(malla);

camara= new THREE.Pespectivecamera();
camara.position.z=5;

renderer =new THREE.WebGLRenderer();
renderer.setsize(Window.innerHeight*.95,window.innerHeight*.95);
document.body.appendchild(renderer.domElement);
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

