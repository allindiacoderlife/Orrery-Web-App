import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  useAnimations,
  Environment,
  Center,
  Gltf,
} from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "./store";

const Earth = () => {
  return (
    <Canvas className="bg-white">
      <ambientLight intensity={0.5} />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr" />
      <CameraRig>
        <Center>
          <AnimatedModel />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? -state.viewport.width / 10 : 0, 0, 2],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 7, -state.pointer.x / 5, 6],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
};

const AnimatedModel = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("earth.glb");
  const { actions } = useAnimations(animations, modelRef);

  // Rotate the model on each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
      modelRef.current.rotation.x += 0.005;
    }
    Object.values(actions).forEach((action) => {
      action.setEffectiveTimeScale(0.5); // Slow down the animation speed by half
      action.play();
    });
  });

  return <primitive ref={modelRef} object={scene} position={[0, -1.5, -3]} />;
};

export default Earth;
