function setup(){
THREE.ImageUtils.crossorigin='';
var textura=THREE.ImageUtils.LoadTexture('htttp://threejs.org/examples/textures/crate.gif');
var material=new THREE,MeshBasicMaterial({map: textura});
var forma=new THREE.BoxGeometry(1,1,1,);
malla=new THREE.Mesh(forma,material);
escena=new THREEE.Scene();
escena.add(malla);
camara=new THREE.PerspectiveCamera();
renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);

}
function lopp(){
requestAnimationFrame(loop);
malla.rotation.x +=0.01;
malla.rotation.y +=0.01;
renderer.render(escena, camara);
}
var camara, escena, renderer, mala:
setup();
loop;
