import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  useCursor,
  MeshPortalMaterial,
  CameraControls,
  useGLTF,
  useAnimations,
  Gltf,
  Text,
  Preload,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing, geometry } from "maath";
import { suspend } from "suspend-react";
import "./Project.css";

extend(geometry);
const regular = import("@pmndrs/assets/fonts/inter_regular.woff");
const medium = import("@pmndrs/assets/fonts/inter_medium.woff");

const Project = () => {
  const ref = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  return (
    <>
      <Canvas
        flat
        camera={{ fov: 75, position: [0, 0, 20] }}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
      >
        <color attach="background" args={["#f0f0f0"]} />
        <Frame
          id="01"
          name={`Galaxy`}
          bg="black"
          position={[-1.15, 0, 0]}
          rotation={[0, 0.5, 0]}
        >
          <SolarAnimatedModel />
        </Frame>
        <Frame id="02" name={`Orrery`}>
          <Environment
            files="Galaxy.hdr"
            backgroundRotation={[0, Math.PI / 2, 0]}
            environmentIntensity={2}
            environmentRotation={[0, Math.PI / 2, 0]}
          />
          <AnimatedModel />
        </Frame>
        <Frame
          id="03"
          name="Earth"
          bg="#d1d1ca"
          position={[1.15, 0, 0]}
          rotation={[0, -0.5, 0]}
        >
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr" />
          {/* <Gltf src="earth_cartoon.glb" scale={2} position={[0, -0.8, -4]} /> */}
          <AnimatedMod />
        </Frame>
        <Rig />
        <Preload all />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <a
          style={{ position: "absolute", top: 90, left: 40, fontSize: "13px" }}
          className="blue-gradient_text"
          goback="true"
          onClick={() => setLocation("/")}
        >
          {params ? (
            <div
              className="h-10 w-10 rounded-lg bg-white
            flex items-center justify-center shadow-md font-bold"
            >
              <p className="blue-gradient_text">Back</p>
            </div>
          ) : (
            "double click to enter portal"
          )}
        </a>
      </div>{" "}
    </>
  );
};

// Component to load and animate the GLTF model
const AnimatedModel = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("Orrery1.glb");
  const { actions } = useAnimations(animations, modelRef);

  // Rotate the model on each frame
  useFrame(() => {
    Object.values(actions).forEach((action) => {
      action.setEffectiveTimeScale(0.1); // Slow down the animation speed by half
      action.play();
    });
  });

  return <primitive ref={modelRef} object={scene} position={[0, -1.5, -3]} />;
};

const SolarAnimatedModel = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("solar.glb");
  const { actions } = useAnimations(animations, modelRef);

  // Rotate the model on each frame
  useFrame(() => {
    Object.values(actions).forEach((action) => {
      action.setEffectiveTimeScale(0.1); // Slow down the animation speed by half
      action.play();
    });
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      position={[0, -0.4, -3]}
      rotation={[0.4, 0, -0.2]}
    />
  );
};

const AnimatedMod = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("earth_cartoon.glb");
  const { actions } = useAnimations(animations, modelRef);

  // Rotate the model on each frame
  useFrame(() => {
    Object.values(actions).forEach((action) => {
      action.setEffectiveTimeScale(0.1); // Slow down the animation speed by half
      action.play();
    });
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      position={[0, -0.4, -3]}
      rotation={[0.4, 0, -0.2]}
    />
  );
};

function Frame({
  id,
  name,
  author,
  bg,
  width = 1,
  height = 1.61803398875,
  children,
  ...props
}) {
  const portal = useRef();
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  useFrame((state, dt) =>
    easing.damp(portal.current, "blend", params?.id === id ? 1 : 0, 0.2, dt)
  );
  return (
    <group {...props}>
      <Text
        font={suspend(medium).default}
        fontSize={0.25}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.375, 0.715, 0.01]}
        material-toneMapped={false}
      >
        {name}
      </Text>
      <Text
        font={suspend(regular).default}
        fontSize={0.1}
        anchorX="right"
        position={[0.4, -0.659, 0.01]}
        material-toneMapped={false}
      >
        /{id}
      </Text>
      <Text
        font={suspend(regular).default}
        fontSize={0.04}
        anchorX="right"
        position={[0.0, -0.677, 0.01]}
        material-toneMapped={false}
      >
        {author}
      </Text>
      <mesh
        name={id}
        onDoubleClick={(e) => (
          e.stopPropagation(), setLocation("/item/" + e.object.name)
        )}
        onPointerOver={(e) => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial
          ref={portal}
          events={params?.id === id}
          side={THREE.DoubleSide}
        >
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}

function Rig({
  position = new THREE.Vector3(0, 0, 2),
  focus = new THREE.Vector3(0, 0, 0),
}) {
  const { controls, scene } = useThree();
  const [, params] = useRoute("/item/:id");
  useEffect(() => {
    const active = scene.getObjectByName(params?.id);
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25));
      active.parent.localToWorld(focus.set(0, 0, -2));
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
  });
  return (
    <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
  );
}

export default Project;
