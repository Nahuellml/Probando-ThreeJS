
import * as THREE from 'three';
const light = new THREE.AmbientLight( 0x404040 ); // soft white light


const directionalLight = new THREE.DirectionalLight(0xffffff, 1 );

directionalLight.position.set(0,10,10);

//Configuración de sombras para la luz
directionalLight.castShadow = true;

// Propiedades adicionales de sombra
directionalLight.shadow.mapSize.width = 4096; // Ancho del mapa de sombras
directionalLight.shadow.mapSize.height = 4096; // Alto del mapa de sombras
directionalLight.shadow.camera.near = 0.1; // Distancia cercana de la cámara de sombras
directionalLight.shadow.camera.far = 5000; // Distancia lejana de la cámara de sombrasa

const helper = new THREE.DirectionalLightHelper(directionalLight, 10)

light.add( directionalLight );
light.add(helper);


export default light;