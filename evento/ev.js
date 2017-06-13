var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// end template here

var geom = new THREE.BoxGeometry(10, 10, 10);
var mat = new THREE.MeshBasicMaterial({color: "red"});
var cube = new THREE.Mesh(geom, mat);

scene.add(cube);
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 20;

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

// White directional light at 70% intensity shining from the top.
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
scene.add( directionalLight );

// movement
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    // up
    if (keyCode == 87) {
        cube.position.y += 1;
        // down
    } else if (keyCode == 83) {
        cube.position.y -= 1;
        // left
    } else if (keyCode == 65) {
        cube.position.x -= 1;
        // right
    } else if (keyCode == 68) {
        cube.position.x += 1;
        // space
    } else if (keyCode == 32) {
        cube.position.x = 0.0;
        cube.position.y = 0.0;
    }
    render();
};

var render = function() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.02;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
};

render();
