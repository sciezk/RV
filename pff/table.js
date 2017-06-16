var figura = new THREE.Shape();

var escena = new THREE.Scene();
var mesh;
var i; var j;

var material = new THREE.MeshBasicMaterial();
for(i=1; i<9; i++){
	for(j=1; j<9; j++){
	mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1));
	mesh.position.x=1.1*i;
	mesh.position.z=1.1*j;
	escena.add(mesh);
	}
}

var campoVision = 60; // grados
var relacionAspecto = window.innerWidth/window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;

var camara = new THREE.PerspectiveCamera (campoVision, relacionAspecto, planoCercano, planoLejano);

// var camara = new THREE.PerspectiveCamera();
camara.position.x = 5;
camara.position.y = 15;
camara.position.z = 40;

var cubo = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshNormalMaterial() ); // 2, 2, 2
cubo.rotateY(Math.PI/4);
cubo.position.x = 5;
cubo.position.y = 1.5;
cubo.position.z = -2;

var esfera1 = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial() ); // 1
esfera1.position.x = 2; // 5
esfera1.position.y = 1.8;
esfera1.position.z = 1;

var esfera2 = new THREE.Mesh(new THREE.SphereGeometry(2), new THREE.MeshNormalMaterial() ); // 1
esfera2.position.x = 10; // 5
esfera2.position.y = 0.0;
esfera2.position.z = -16;

escena.add(esfera1);
escena.add(esfera2);
escena.add(cubo);


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
