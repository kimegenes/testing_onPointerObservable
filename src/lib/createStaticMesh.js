import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

// StandardMaterial needed
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

//merge mesh - using this for mergemesh function
//import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import { Mesh } from "@babylonjs/core/Meshes/mesh";

// then call static method directly
//const mergedMeshes: Nullable<Mesh> = Mesh.MergeMeshes([sphere, cube, ground]);

export function createStaticMesh(scene, ground) {
  //merge mesh
  //var newMesh = BABYLON.Mesh.MergeMeshes([sphere, ground]);
  let sphere = MeshBuilder.CreateSphere("Sphere", { diameter: 1 });

  var newMesh = Mesh.MergeMeshes([ground]);
  //console.log("newMesh", newMesh);
  return newMesh;
}
