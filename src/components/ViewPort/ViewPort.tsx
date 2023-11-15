"use client"

import React, { useEffect, useState } from 'react'
import * as OBC from "openbim-components"
import * as THREE from "three"
import { getDownloadURL, ref } from 'firebase/storage'
import {storage} from "../../../firebase-config"

export const ViewPort = ({modelId = ""}) => {


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
        components.uiEnabled = false;

        const grid = new OBC.SimpleGrid(components);

        const scene = components.scene.get();

        //@ts-ignore
        components.scene.setup()
        //@ts-ignore
        scene.lookAt(0, 0, 0);

        if (modelId == "project_template") {

          let ifcLoader = new OBC.FragmentIfcLoader(components);
  
          ifcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
          ifcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;
  
          ifcLoader.settings.wasm = {
            path: "https://unpkg.com/web-ifc@0.0.43/",
            absolute: true
          }
          
          const url = await getDownloadURL(ref(storage, "Project.ifc"))
          const file = await fetch(url)
          const data = await file.arrayBuffer();
          const buffer = new Uint8Array(data)
          const model = await ifcLoader.load(buffer, "main");
  
          scene.add(model)
        }

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