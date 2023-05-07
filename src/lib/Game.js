import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

export default class Game {
  constructor(canvas) {
    this.engine = new Engine(canvas, true);
    this.scene = new Scene(this.engine);
    this.canvas = canvas;
  }

  setup() {
    var camera = new ArcRotateCamera("camera", 0, 0, 10, new Vector3(0, 0, 0), this.scene);
    camera.setPosition(new Vector3(40, 40, -50));
    camera.attachControl(this.canvas, true);

    // SETTING UP SCENE
    var light = new HemisphericLight("light1", new Vector3(0, 1, 0), this.scene);
    light.intensity = 0.7;

    let ground = MeshBuilder.CreateGround("ground1", { width: 50, height: 50, subdivisions: 2 }, this.scene);
    ground.position.y -= 1;

    //TESTING onPointerObservable - returns null/false
    this.scene.onPointerObservable.add((pointerInfo) => {
      console.log(pointerInfo.pickInfo.hit);
      console.log(pointerInfo.type);
      console.log(pointerInfo.pickInfo.pickedMesh);
    });
  }

  run() {
    this.engine.runRenderLoop(() => this.scene.render());

    // Resize event handling
    window.addEventListener("resize", () => {
      this.engine.resize();
    });
  }
}
