import * as THREE from "three";
import { bannerNameArray } from "../game.js";

var texture1 = new THREE.TextureLoader().load('../static/texture/banner.jpg');
texture1.flipY = false;
texture1.minFilter = THREE.LinearFilter;



let glassColor = new THREE.Color(0x575757);
const wallGlassMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5, color: glassColor });
const banner1_material = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });

const UpdateMaterial = (object) => {

    let type;
    switch (object.material.name) {
        case 'BANNER_SCREEN':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'Ballon_1.jpg':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;

        case 'hoarding1':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding2':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding3':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding4':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding5':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'hoarding6':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'vray_banner':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_1':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_2':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_3':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_4':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_5':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_6':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_7':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'vray_banner.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_1.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_2.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_3.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_4.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_5.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_6.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_7.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'vray_banner.001':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_1.001':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_2.001':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_3.001':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_4.001':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_5.002':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_6.001':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_7.001':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'vray_banner.003':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_1.003':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_2.003':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_3.003':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_4.003':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_5.006':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_6.003':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_7.003':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'vray_banner.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_1.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_2.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_3.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_4.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_5.008':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_6.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_7.004':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        case 'vray_banner.005':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_1.005':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_2.005':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_3.005':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_4.005':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_5.010':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_6.005':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;
        case 'vray_banner_7.005':
            object.material.map = texture1;
            bannerNameArray.push(object.name);
            break;


        default:
            break;
    }



}

export { UpdateMaterial }