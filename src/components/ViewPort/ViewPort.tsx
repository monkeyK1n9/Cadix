'use client'

import React, { useEffect } from "react";
import * as THREE from 'three';
import * as OBC from 'openbim-components';

export const ViewPort = ({modelId="", isTemplateProject = false}) => {
    async function loadIfcAsFragments(loader: OBC.FragmentIfcLoader, scene: THREE.Scene) {
        try {

            const file = await fetch('./Project.ifc');
            console.log("haha")
            const data = await file.arrayBuffer();
            const buffer = new Uint8Array(data);
            const model = await loader.load(buffer, "Main Toolbar");
            console.log("hoho")
            scene.add(model);
            console.log("done")
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {

        const container = document.getElementById("viewer-container") as HTMLElement;

        const components = new OBC.Components();
        components.scene = new OBC.SimpleScene(components);
        components.renderer = new OBC.SimpleRenderer(components, container);
        components.camera = new OBC.SimpleCamera(components);
        components.raycaster = new OBC.SimpleRaycaster(components);

        components.init();

        const scene = components.scene.get();
        scene.castShadow = true;
        
        //adjusting scene and camera
        components.camera.get().lookAt(0, 0, 0);
        components.camera.get().position.set(10, 10, 10);

        //adding grid
        const grid = new OBC.SimpleGrid(components);

        //create random cube
        // const boxMaterial = new THREE.MeshStandardMaterial({ color: '#6528D7' });
        // const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
        // const cube = new THREE.Mesh(boxGeometry, boxMaterial);
        // cube.position.set(0, 1.5, 0);
        // scene.add(cube);

        //importing object if template
        
        
        // let fragments = new OBC.FragmentManager(components);
        let fragmentIfcLoader = new OBC.FragmentIfcLoader(components);

        fragmentIfcLoader.settings.wasm = {
            path: "https://unpkg.com/web-ifc@0.0.43/",
            absolute: true,
        }

        fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
        fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;
            
            
        

        // if (Boolean(isTemplateProject)) {
            loadIfcAsFragments(fragmentIfcLoader, scene)
        // }

        //adding some light to the scene
        const light = new THREE.AmbientLight();
        scene.add(light);

        // const viewer = new THREE.IfcViewerAPI({
        //     container,
        //     backgroundColor: new THREE.Color(0xffffff),
        // });
        // viewer.axes.setAxes();
        // viewer.grid.setGrid();
        // viewer.IFC.setWasmPath('../../')
        // console.log(viewer)
        // const input = document.getElementById("file-input");
        
        // window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
        // window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
        // viewer.clipper.active = true;
        
        // window.onkeydown = (event) => {
        //     if (event.code === "KeyP") {
        //         viewer.clipper.createPlane();
        //     } else if (event.code === "KeyO") {
        //         viewer.clipper.deletePlane();
        //     }
        // };
    
        // input?.addEventListener(
        //     "change",
        
        //     async (changed) => {
        //         const file = changed?.target?.files[0];
        //         const ifcURL = URL.createObjectURL(file);
        //         viewer.IFC.loadIfcUrl(ifcURL, true, () => console.log('Loading...'), (e: any) => console.log('Failed to load...', e));
        //     },
        
        //     false
        // );
        // async function loadIfc(url) {
        //     const model = await viewer.IFC.loadIfcUrl(url);
        //     viewer.shadowDropper.renderShadow(model.modelID);
        //   }
        //   loadIfc('src\assets\Project2.ifc')

        return () => {fragmentIfcLoader.dispose();}
    }, [])


    return(
        <div id="viewer-container" style={{
            width: '100vw',
            height: '100vh',
        }}></div>
    )
}