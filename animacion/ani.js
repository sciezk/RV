function Setup(){
escena=new THREE.Scan();
camara=new THREE.PerspectiveCamera(
 75,window.innerwidth/window.innerheight,0.1,100
 
 );
camara.position.==5;
renderer=new THREE.webGLRenderer();
renderer.setsize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
malla= new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshNormalMaterial();
escena.add(malla);
}
function loop(){


malla.rotation.x
malla.rotation.y
}
