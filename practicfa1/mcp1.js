var troncoForma = new THREE.CylinderGeometry(1.5,2,7,10,6,false);
var cubierta2Forma = new THREE.SphereGeometry(2.5, 25, 25);
var baForma = new THREE.CylinderGeometry(3,3,1,10,6,false);
var ba3Forma = new THREE.ConeGeometry( 2, 6, 32 );


troncoForma.translate(0,8,0);
baForma.translate(0,4,0);
cubierta2Forma.translate(0,13,0);
ba3Forma.translate(0,11,0);

var toncoMalla= new THREE.Mesh(troncoForma);
var baMalla= new THREE.Mesh(baForma);
var ba3Malla= new THREE.Mesh(ba3Forma);
var cubierta2Malla= new THREE.Mesh(cubierta2Forma);

var torreForma = new THREE.Geometry();

torreForma.merge(toncoMalla.geometry, toncoMalla.matrix);
//torreForma.merge(conMalla.geometry, conMalla.matrix);
torreForma.merge(baMalla.geometry, baMalla.matrix);
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
