var troncoForma = new THREE.DodecahedronGeometry(3,3);
var cubierta1Forma = new THREE. ConeGeometry( 5, 20, 32 );
var cubierta2Forma = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);


troncoForma.translate(0,4,0);
cubierta1Forma.translate(0,1,0);
cubierta2Forma.translate(0,10,0);

var toncoMalla= new THREE.Mesh(troncoForma);
var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
var cubierta2Malla= new THREE.Mesh(cubierta2Forma);

var torreForma = new THREE.Geometry();

torreForma.merge(toncoMalla.geometry, toncoMalla.matrix);
torreForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
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
