//revolucion extrsion vertices composicion
var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    var x = Math.random() * (80 - 1) + 1    //Math.random() * (max - min) + min
    var y = Math.random() * (80 - 1) + 1
    var z = Math.random() * (80 - 1) + 1

    var dotGeometry = new THREE.Geometry();
    puntos.push(dotGeometry);
    dotGeometry.vertices.push(new THREE.Vector3( x, y, z));
    var dotMaterial = new THREE.PointsMaterial( { size: 3, sizeAttenuation: false, color: 0xFF0000 } );
    var punto = new THREE.puntos( dotGeometry, dotMaterial );

    scene.add(dot);
}
  //  puntos.push( new THREE.Vector2(
    //                        Math.sin( i * 0.2 ) * 15 + 50,
      //                      (  i - 5 ) * 2 ) );
//}
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


