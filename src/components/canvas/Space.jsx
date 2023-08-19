import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";
const Space = () => {
  const space = useGLTF("./space/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.01} />
      <primitive
        object={space.scene}
        scale={0.025}
        position={[0, 0, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const SpaceCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 28 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Space />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default SpaceCanvas;
