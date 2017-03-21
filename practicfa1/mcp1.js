var troncoForma = new THREE.CylinderGeometry(1.5,2,7,10,6,false);
//var cubierta1Forma = new THREE. BoxGeometry(6,.2,6);
var cubierta2Forma = new THREE.SphereGeometry(2.5, 25, 25);
//var conForma = new THREE.CylinderGeometry(1,2,2,10,6,false);
//var baForma = new THREE.CylinderGeometry(2,2,1,10,6,false);
//var ba2Forma = new THREE.CylinderGeometry(3,3,1,20,32,false);
var ba3Forma = new THREE.ConeGeometry( 2, 6, 32 );


troncoForma.translate(0,7,0);
//baForma.translate(0,2,0);
//ba2Forma.translate(0,6,0);
//conForma.translate(0,1,0);
//cubierta1Forma.translate(0,1,0);
cubierta2Forma.translate(0,13,0);
ba3Forma.translate(0,8,0);

var toncoMalla= new THREE.Mesh(troncoForma);
//var conMalla= new THREE.Mesh(conForma);
//var baMalla= new THREE.Mesh(baForma);
//var ba2Malla= new THREE.Mesh(ba2Forma);
var ba3Malla= new THREE.Mesh(ba3Forma);
//var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
var cubierta2Malla= new THREE.Mesh(cubierta2Forma);

var torreForma = new THREE.Geometry();

torreForma.merge(toncoMalla.geometry, toncoMalla.matrix);
//torreForma.merge(conMalla.geometry, conMalla.matrix);
//torreForma.merge(baMalla.geometry, baMalla.matrix);
//torreForma.merge(ba2Malla.geometry, ba2Malla.matrix);
torreForma.merge(ba3Malla.geometry, ba3Malla.matrix);
//torreForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
torreForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);

var material= new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

torreMalla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
