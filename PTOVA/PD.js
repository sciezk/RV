var troncoForma = new THREE.CylinderGeometry(.25, .5, 1);
var esferaForma = new THREE.SphereGeometry(.65);
var elipseForma=new THREE.SphereGeometry(0.12);
esferaForma.translate(0,1,0);
elipseForma.translate(0,0,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var elipseMalla = new THREE.Mesh(elipseForma);

var peonForma=new THREE.Geometry();
var peon.merge(troncoMalla.geometry, troncoMalla.matrix);
var peon.merge(esferaMalla.geometry, esferaMalla.matrix);
var peon.merge(elipseMalla.geometry, esferaMalla.matrix);
var Material=new THREE.MeshNormalMaterial();
var peonMalla= new THREE.Mesh(peonForma, Material);
var escena = new THREE.Scene();
escena.add(peonMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
