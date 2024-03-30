import * as THREE from 'three';

const geometry = new THREE.SphereGeometry(0.7,32,16);
const material = new THREE.MeshPhysicalMaterial({  color: 0xffffff, roughness: 0.1, metalness: 0.8 });

const sphere2 = new THREE.Mesh(geometry, material);

sphere2.castShadow = true;
 
export default sphere2;