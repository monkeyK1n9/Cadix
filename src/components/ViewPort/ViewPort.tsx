import React, { useEffect } from "react";
import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

export const ViewPort = ({}) => {
    useEffect(() => {

        const container = document.getElementById("viewer-container");
        const viewer = new IfcViewerAPI({
            container,
            backgroundColor: new Color(0xffffff),
        });
        viewer.axes.setAxes();
        viewer.grid.setGrid();
        viewer.IFC.setWasmPath('../../')
        console.log(viewer)
        const input = document.getElementById("file-input");
        
        window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
        window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
        viewer.clipper.active = true;
        
        window.onkeydown = (event) => {
            if (event.code === "KeyP") {
                viewer.clipper.createPlane();
            } else if (event.code === "KeyO") {
                viewer.clipper.deletePlane();
            }
        };
    
        input?.addEventListener(
            "change",
        
            async (changed) => {
                const file = changed?.target?.files[0];
                const ifcURL = URL.createObjectURL(file);
                viewer.IFC.loadIfcUrl(ifcURL, true, () => console.log('Loading...'), (e: any) => console.log('Failed to load...', e));
            },
        
            false
        );
        // async function loadIfc(url) {
        //     const model = await viewer.IFC.loadIfcUrl(url);
        //     viewer.shadowDropper.renderShadow(model.modelID);
        //   }
        //   loadIfc('src\assets\Project2.ifc')
    }, [])


    return(
        <></>
    )
}