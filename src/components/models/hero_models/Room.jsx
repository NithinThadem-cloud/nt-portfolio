import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
    // Load the GLB model and animations
    const gltf = useGLTF("/models/nithin-time.glb");
    const groupRef = useRef();
    const { actions } = useAnimations(gltf.animations, groupRef); // Extract animations
    const screensRef = useRef();

    // Debug: Log the GLTF data
    console.log("GLTF Data:", gltf);

    // Use existing materials from the .glb file
    const bodyMaterial = gltf.materials?.avaturn_body_material;
    const hair0Material = gltf.materials?.avaturn_hair_0_material;
    const lookMaterial = gltf.materials?.avaturn_look_0_material;
    const shoesMaterial = gltf.materials?.avaturn_shoes_0_material;

    // Define a custom material for the glasses if needed
    const glassesMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
    });

    // Play animations when the component mounts
    useEffect(() => {
        if (actions) {
            Object.values(actions).forEach((action) => {
                try {
                    action.play(); // Try to play the animation
                } catch (error) {
                    console.warn(`Failed to play animation: ${error.message}`);
                }
            });
        }
    }, [actions]);

    return (
        <group {...props} dispose={null}>
            {/* Add lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={1} />

            {/* Conditionally render SelectiveBloom if screensRef is valid */}
            {screensRef.current && (
                <EffectComposer>
                    <SelectiveBloom
                        selection={screensRef.current}
                        intensity={1.5}
                        luminanceThreshold={0.2}
                        luminanceSmoothing={0.9}
                        blendFunction={BlendFunction.ADD}
                    />
                </EffectComposer>
            )}

            {/* Group for animations */}
            <group ref={groupRef} scale={2.5}>
                {/* Render the avatar body and link it to screensRef */}
                <mesh
                    ref={screensRef} // Link screensRef to this mesh
                    geometry={gltf.scene.children.find((child) => child.name === "avaturn_body")?.geometry}
                    material={bodyMaterial}
                >
                    <primitive object={gltf.scene} /> {/* Ensure the entire scene is rendered */}
                </mesh>

                {/* Render the first hairstyle */}
                <mesh
                    geometry={gltf.scene.children.find((child) => child.name === "avaturn_hair_0")?.geometry}
                    material={hair0Material}
                />

                {/* Render the facial features ("look") */}
                <mesh
                    geometry={gltf.scene.children.find((child) => child.name === "avaturn_look_0")?.geometry}
                    material={lookMaterial}
                />

                {/* Render the shoes */}
                <mesh
                    geometry={gltf.scene.children.find((child) => child.name === "avaturn_shoes_0")?.geometry}
                    material={shoesMaterial}
                />

                {/* Render the glasses */}
                {gltf.scene.children.find((child) => child.name === "avaturn_glasses_0") && (
                    <mesh
                        geometry={gltf.scene.children.find((child) => child.name === "avaturn_glasses_0")?.geometry}
                        material={gltf.materials?.avaturn_glasses_0_material || glassesMaterial}
                    />
                )}
            </group>
        </group>
    );
}

useGLTF.preload("/models/nithin-time.glb");