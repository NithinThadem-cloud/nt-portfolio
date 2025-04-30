import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
    // Refs for character, screens, and planet
    const groupRef = useRef(); // For character animations
    const screensRef = useRef(); // For screen model
    const planetRef = useRef(); // For planet model

    // Load the GLB models
    const characterGltf = useGLTF("/models/nithin-time.glb");
    const screenGltf = useGLTF("/models/screen.glb");
    const planetGltf = useGLTF("/models/starry_night.glb"); // Load the planet model

    // Extract animations for the character
    const { actions } = useAnimations(characterGltf.animations, groupRef);

    // Debug: Log the GLTF data
    console.log("Character GLTF Data:", characterGltf);
    console.log("Screen GLTF Data:", screenGltf);
    console.log("Planet GLTF Data:", planetGltf);

    // Use existing materials from the .glb files
    const bodyMaterial = characterGltf.materials?.avaturn_body_material;
    const hair0Material = characterGltf.materials?.avaturn_hair_0_material;
    const lookMaterial = characterGltf.materials?.avaturn_look_0_material;
    const shoesMaterial = characterGltf.materials?.avaturn_shoes_0_material;

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
            {/* Enhanced Lighting */}
            <ambientLight intensity={0.4} color="#ffffff" /> {/* Soft ambient light */}
            <directionalLight
                position={[1, 1, 1]}
                intensity={1}
                color="#ffffff"
            /> {/* Main directional light */}
            <pointLight
                position={[5, 5, 5]}
                intensity={2}
                color="#ffffff"
            /> {/* Additional point light for depth */}

            {/* Render the planet as the deepest background */}
            <mesh
                ref={planetRef}
                position={[0, 5, -50]} // Move further back
                scale={1000} // Increase scale to fill the background
            >
                <primitive object={planetGltf.scene} />
            </mesh>

            {/* Render the screen model as background */}
            <mesh
                ref={screensRef}
                position={[0, 1.5, -26]} // Position the screen behind the character
                scale={20} // Scale the screen model as needed
            >
                <primitive object={screenGltf.scene} />
            </mesh>

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

            {/* Group for character animations */}
            <group ref={groupRef} scale={3.2} position={[0, 0, 0]}> {/* Center the character */}
                {/* Render the avatar body */}
                <mesh
                    geometry={characterGltf.scene.children.find((child) => child.name === "avaturn_body")?.geometry}
                    material={bodyMaterial}
                >
                    <primitive object={characterGltf.scene} /> {/* Ensure the entire scene is rendered */}
                </mesh>

                {/* Render the first hairstyle */}
                <mesh
                    geometry={characterGltf.scene.children.find((child) => child.name === "avaturn_hair_0")?.geometry}
                    material={hair0Material}
                />

                {/* Render the facial features ("look") */}
                <mesh
                    geometry={characterGltf.scene.children.find((child) => child.name === "avaturn_look_0")?.geometry}
                    material={lookMaterial}
                />

                {/* Render the shoes */}
                <mesh
                    geometry={characterGltf.scene.children.find((child) => child.name === "avaturn_shoes_0")?.geometry}
                    material={shoesMaterial}
                />

                {/* Render the glasses */}
                {characterGltf.scene.children.find((child) => child.name === "avaturn_glasses_0") && (
                    <mesh
                        geometry={characterGltf.scene.children.find((child) => child.name === "avaturn_glasses_0")?.geometry}
                        material={characterGltf.materials?.avaturn_glasses_0_material || glassesMaterial}
                    />
                )}
            </group>
        </group>
    );
}

// Preload all models
useGLTF.preload("/models/nithin-time.glb");
useGLTF.preload("/models/screen.glb");
useGLTF.preload("/models/starry_night.glb");