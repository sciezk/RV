//revolucion extrsion vertices composicion
var puntos = [];
for ( var i = 0; i <= 50; i ++ ) {
    puntos.push(new THREE.Vector2(
    var x = Math.random() * (80 - 1) + 1    //Math.random() * (max - min) + min
    var y = Math.random() * (80 - 1) + 1
    var z = Math.random() * (10 - 1) + 1
    ));

    
}
var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


