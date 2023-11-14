"use client"

import React from 'react'
import * as OBC from "openbim-components"
import * as THREE from "three"
import Project from "@/assets/Project.ifc"

export const ViewPort = ({modelId = "", isTemplateProject = false}) => {
  const [modelCount, setModelCount] = React.useState(0)

  React.useEffect(() => {
    const initialise = async () => {
      try {
        const container = document.getElementById('viewerContainer') as HTMLElement;

        const components = new OBC.Components();
        components.scene = new OBC.SimpleScene(components);
        components.renderer = new OBC.SimpleRenderer(components, container);
        components.camera = new OBC.SimpleCamera(components);
        components.raycaster = new OBC.SimpleRaycaster(components);

        components.init();

        const grid = new OBC.SimpleGrid(components);

        const scene = components.scene.get();

        const fragments = new OBC.FragmentManager(components);
        let ifcLoader = new OBC.FragmentIfcLoader(components);

        ifcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
        ifcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

        // const excludedCats = [
        //   WEBIFC.IFCTENDONANCHOR,
        //   WEBIFC.IFCREINFORCINGBAR,
        //   WEBIFC.IFCREINFORCINGELEMENT,
        // ];
        
        // for(const cat of excludedCats) {
        //   ifcLoader.settings.excludedCategories.add(cat);
        // }
        ifcLoader.settings.wasm = {
          path: "https://unpkg.com/web-ifc@0.0.43/",
          // path: "../../wasm",
          absolute: true
        }

        const buffer = Buffer.from(Project)
        const uint8Array = new Uint8Array(buffer);
        const model = await ifcLoader.load(uint8Array, "main");
        // const model = await fragments.load(buffer);
        console.log("finished loading")

        const boxMaterial = new THREE.MeshStandardMaterial({ color: '#6528D7' });
        const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
        const cube = new THREE.Mesh(boxGeometry, boxMaterial);
        cube.position.set(0, 1.5, 0);
        scene.add(cube);

        scene.add(model)
      }
      catch (err) {
        console.log(err);
      }

    }

    initialise()
  }, [])

  const viewerContainerStyle: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    position: "relative",
    gridArea: "viewer"
  }

  const titleStyle: React.CSSProperties = {
    position: "absolute",
    top: "15px",
    left: "15px"
  }

  return (
    <>
      <div id="viewerContainer" style={viewerContainerStyle}>
      </div>
    </>
  )
}