//import * as THREE from 'three';

import light from './basic/Light.js';
import renderer from './basic/Renderer.js';
import resize from './basic/Resize.js';
import scene from './basic/Scene.js';
import camera from './basic/Camera.js';
import cube from './basic/shapes/Cube.js';
import plane from './basic/shapes/Plane.js';
import sphere from './basic/shapes/Sphere.js';
import sphere2 from './basic/shapes/Sphere2.js';
import controls from './basic/OrbitControls.js';

scene.add(light);
scene.add(plane);
scene.add(cube);
scene.add(sphere);
scene.add(sphere2);
/* 
const spotLight = new THREE.SpotLight( 0xffffff, 4.5 );
				spotLight.position.set( 0, 1500, 200 );
				spotLight.angle = Math.PI * 0.2;
				spotLight.decay = 0;
				spotLight.castShadow = true;
				spotLight.shadow.camera.near = 200;
				spotLight.shadow.camera.far = 2000;
				spotLight.shadow.bias = - 0.000222;
				spotLight.shadow.mapSize.width = 1024;
				spotLight.shadow.mapSize.height = 1024;
				//scene.add( spotLight ); */

sphere.position.set(2,2,2);
sphere2.position.set(-4,2,2);
camera.position.set(0,10,10);

camera.lookAt(plane.position);

let isJumping = false;

function randomColor() {
  return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}

function changeCubeColor() {
  cube.material.color.set(randomColor());
  //sphere.material.color.set(randomColor());
}

window.addEventListener('click', changeCubeColor);
sphere.rotation.x = -0.4;

let orbitalRadius = 5;
let angularSpeed = 0.5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  
  sphere.rotateY(0.008);

  //Calcular la posición del objeto orbitante
  let time = Date.now() * 0.001; //convertir de segundos a milisegundos
  let x = sphere.position.x + orbitalRadius * Math.cos(angularSpeed * time);
  let z = sphere.position.z + orbitalRadius * Math.sin(angularSpeed * time);

  sphere2.position.set(x, 2, z);

  //scene.rotation.y += 0.01;
  // Si el cubo no está saltando, lo hace saltar
  if (!isJumping) {
    cube.position.y += 0.02; // Incrementa la posición en Y para simular el salto
    // Si el cubo alcanza cierta altura, lo hace descender
    if (cube.position.y >= 1.5) {
        isJumping = true; // Establece el estado de salto a verdadero
    }
} else {
    cube.position.y -= 0.02; // Disminuye la posición en Y para simular el descenso
    // Si el cubo vuelve al suelo, restablece el estado de salto a falso
    if (cube.position.y <= 0) {
        cube.position.y = 0; // Asegura que el cubo no baje más allá del suelo
        isJumping = false; // Establece el estado de salto a falso para que pueda saltar de nuevo
    }
} 
  controls.update();
  renderer.render(scene, camera);
}
animate();
//console.log(scene, camera, renderer, cube);
resize.start(renderer);