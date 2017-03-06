var puntos = [];
for ( var i=0; i<80; i++){
  puntos.push(new THREE.Vector3(Math.sin(i),Math.cos(i),0));
}

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh(forma, material);
malla.rotateX(Math.PI / 2);

var escena=new THREE.Scene();
escena.add(malla);
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
