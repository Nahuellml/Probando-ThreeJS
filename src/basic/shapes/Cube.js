import * as THREE from 'three';
const geometry = new THREE.BoxGeometry( 2, 2, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true;

export default cube;