import light from './basic/Light.js';
import renderer from './basic/Renderer.js';
import resize from './basic/Resize.js';
import scene from './basic/Scene.js';
import camera from './basic/camera.js';
import cube from './basic/shapes/Cube.js';
import plane from './basic/shapes/Plane.js';

scene.add( cube );
scene.add( light );
scene.add( plane );

camera.position.set(2,2,2);

camera.lookAt(cube.position);

function animate() {
	requestAnimationFrame( animate );
  cube.rotation.y += 0.01
	renderer.render( scene, camera );
}
animate();
//console.log(scene, camera, renderer, cube);
resize.start(renderer);