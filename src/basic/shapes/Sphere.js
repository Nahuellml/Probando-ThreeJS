import * as THREE from 'three';

const geometry = new THREE.SphereGeometry(2,32,16);
const material = new THREE.MeshPhysicalMaterial({  color: 0xffff00, roughness: 0.1, metalness: 0.8 });

const sphere = new THREE.Mesh(geometry, material);

sphere.castShadow = true;
 
export default sphere;