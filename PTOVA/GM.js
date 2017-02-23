var figura = new THREE.Shape();
figura.moveTo(10, 10);

figura.RoundedRect().setSize(100,40).
    setRadius(10);
//revolucion extrsion vertices composicion
var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
