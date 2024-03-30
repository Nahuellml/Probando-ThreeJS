import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import renderer from './Renderer';
import camera from './Camera';

const controls = new OrbitControls(camera, renderer.domElement);

export default controls;