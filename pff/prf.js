//Texturas
var Cafeo = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('madera.jpg') });
var Cafeb = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('blanco metalico.jpg') });
var Marco = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('cristal.jpg') });
var GrisLiso = new THREE.MeshLambertMaterial({color: 0x9F9492});
var BlancoLiso = new THREE.MeshLambertMaterial({color: 0xF5F5F5});

  ///////////////////////////////////////////Tablero////////////////////////////////////////////////////////////////
   var lado = 10;
   var forma = new THREE.BoxBufferGeometry(lado,lado,lado);
   cubos = [];
   var material = Cafeb;
   
   for (var i=0;i<=7;i++){
   for (var j=0;j<=7;j++){
       if ((i+j) % 2 == 0){
           material= Cafe;
           }
       else{
           material= Gris;
           }
       cubo = new THREE.Mesh(forma ,material);
       cubo.position.x = (j+1)*lado;
       cubo.position.z = (-i-1)*lado;
       cubos.push(cubo)

       }
   }

   orilla1 = new THREE.BoxGeometry( 90, 10, 5 ); //Superior
   var material1 = Marco;
   marco1 = new THREE.Mesh( orilla1, material1 );
   marco1.translateZ(-87.5);
   marco1.translateX(45);
   marco1.receiveShadow = true;

   orilla2 = new THREE.BoxGeometry( 5, 10, 90 ); //Derecha
   var material2 = Marco;
   marco2 = new THREE.Mesh( orilla2, material2);
   marco2.translateZ(-45);
   marco2.translateX(87.5);
   marco2.receiveShadow = true;

   orilla3 = new THREE.BoxGeometry( 90, 10, 5 ); //Izquierda
   var material3 = Marco;
   marco3 = new THREE.Mesh( orilla3, material3);
   marco3.translateZ(-2.5);
   marco3.translateX(45);
   marco3.receiveShadow = true;

   orilla4 = new THREE.BoxGeometry( 5, 10, 80 ); //Baja
   var material4 = Marco;
   marco4 = new THREE.Mesh( orilla4, material4);
   marco4.translateZ(-45);
   marco4.translateX(2.5);
   marco4.receiveShadow = true;
   
   //Agregar tablero a  escena
   escena.add(marco1, marco2, marco3, marco4);
   
   for(var q=0; q<=63; q++){
      cubos[q].receiveShadow = true;
      escena.add(cubos[q]);
   }
