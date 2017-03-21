function Setup(){
escena=new THREE.Scan();
camara=new THREE.PerspectiveCamera(
 75,window.innerwidth/window.innerheight,0.1,100
 
 );
camara.position.==5;
renderer=new THREE.webGLRenderer();
renderer.setsize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
malla= new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshNormalMaterial();
escena.add(malla);
}
function loop(){
function setup(){

	escena = new THREE.Scene();
	camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
	camara.position.z=5;
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window-innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	malla = new THREE.Mesh(new THREE.SphereGeometry(1), new THREEE.MeshNormalMaterial());
	escena.add(malla);
}


function loop(){

	requestAnimationFrame(loop);
	
	malla.rotation.x += 0.01;
	malla.rotation.y += 0.01;
	renderer.render(escena, camara);

}

var malla, camara, renderer, escena;

setup();
loop();

malla.rotation.x
malla.rotation.y
 setup();
 loop();
}
