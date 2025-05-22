import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useState, useEffect } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
    const isMobile = useMediaQuery({query: "(max-width: 768px)"});
    const isTablet = useMediaQuery({query: "(max-width: 1024px)"});

    // State to track whether the 3D model has loaded
    const [, setIsLoaded] = useState(false);

    // Simulate loading delay or handle actual asset loading
    useEffect(() => {
        // Simulate a delay for loading assets (replace with actual loader logic)
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000); // Adjust the delay based on your asset loading time

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);



    return (
        <Canvas
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0, // Ensure the canvas is behind DOM elements
            }}
            camera={{position: [0, 0, 15], fov: 45}}
        >
            {/* Deep blue ambient light */}
            <ambientLight intensity={4} color="#90d4ff"/>
            {/* Configure OrbitControls to enable panning and control zoom based on device type */}
            <OrbitControls
                enablePan={false} // Enable panning (dragging)
                enableZoom={!isTablet} // Disables zoom on tablets
                maxDistance={20} // Maximum distance for zooming out
                minDistance={5} // Minimum distance for zooming in
                minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
                maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
            />

            <Suspense fallback={null}>
                <HeroLights/>
                <Particles count={50}/>
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, 0, 0]}
                >
                    <Room/>
                </group>
            </Suspense>
        </Canvas>
    );
};

export default HeroExperience;