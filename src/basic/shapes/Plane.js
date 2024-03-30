import * as THREE from 'three';
const geometry = new THREE.PlaneGeometry( 20, 20 );
const material = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
plane.rotation.x += Math.PI * .5;
plane.position.set(0,0,0);
 

plane.receiveShadow = true;

export default plane;