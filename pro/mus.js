//Create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add( listener );

//Create the PositionalAudio object (passing in the listener)
var sound = new THREE.PositionalAudio( listener );

//Load a sound and set it as the PositionalAudio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/song.ogg', function( buffer ) {
	sound1.setBuffer( buffer );
	sound1.setRefDistance( 20 );
	sound1.play();
});

//Create an object for the sound to play from
var sphere = new THREE.SphereGeometry( 20, 32, 16 );
var material = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
var mesh = new THREE.Mesh( sphere, material );
scene.add( mesh );

//Finally add the sound to the mesh
mesh.add( sound );
