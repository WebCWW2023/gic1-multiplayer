import * as THREE from "three";
import { positionGUI, scaleGUI } from "../common/CommonFunction.js";
import { objectArray } from "../game.js";

let glassColor = new THREE.Color(0x575757);
let glassOpacity = 0.4;
const UpdateMesh = (cityGroup, hall, gui) => {

    let glassObjectsNames = ['wall7', 'Glass001', 'glass002', 'glass3', 'glass1004', 'Mesh070_2', 'Mesh1002_1', 'Box25759', 'Glass', 'Mesh069_4', 'Mesh066', 'Mesh875', 'Mesh065_2', 'pCube1', 'Mesh063_1', 'glass1003', 'Mesh_11', 'Mesh917_1', 'Mesh072', 'mid_wall', 'glass1', 'Mesh1045_1', 'Mesh1044', 'glass05', 'polySurface8', 'polySurface74', 'polySurface24', 'Mesh076_1'];
    glassObjectsNames.map(item => {
        let glassObject = hall.scene.getObjectByName(item);
        glassObject.material.transparent = true;
        glassObject.material.opacity = glassOpacity;
    })

    let tower = hall.scene.getObjectByName("Mesh085_2");
    tower.material.transparent = true;
    tower.material.opacity = 1;
    let grillAngle = hall.scene.getObjectByName("GRILL_ANGLE'002");
    grillAngle.material.transparent = true;
    grillAngle.material.opacity = 1;
    grillAngle.material.color = new THREE.Color(0xffffff);
    let glassCollider = hall.scene.getObjectByName("Arc001");
    glassCollider.material.transparent = true;
    glassCollider.material.opacity = 0;

    let water = hall.scene.getObjectByName("Mesh359_1");
    water.material.color = new THREE.Color(0x1B3F64);
    let fountain = hall.scene.getObjectByName("FOUNTAIN_water008");
    fountain.material.color = new THREE.Color(0x0199D4);
    fountain.material.transparent = true;
    fountain.material.opacity = 0.7;

    // var texture = new THREE.TextureLoader().load('../../static/texture/Ballon_1.jpg');
    // texture.flipY = false;
    // texture.wrapS = THREE.RepeatWrapping 
    // let sphere = hall.scene.getObjectByName("Sphere011");
    // sphere.material.map = texture
}

const addObjectToArray = (object) => {
    switch (object.material.name) {
        case 'Tree_1':
            break;
        case 'Trees_2':
            break;
        case 'Trees_3':
            break;
        default:
            objectArray.push(object);
            break;
    }
}
export { UpdateMesh, addObjectToArray }
