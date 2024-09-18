import {PerspectiveCamera} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import React, {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import { easing } from 'maath';
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import {Selection, EffectComposer, Outline } from '@react-three/postprocessing';

const Hero = () => {
  /*const x = useControls('', {
            positionX: {
                value: 0,
                min: -10,
                max: 10
            },
            positionY: {
                value: 0,
                min: -5,
                max: 5
            },
            positionZ: {
                value: 0,
                min: -10,
                max: 10
            },
            rotationX: {
                value: 0,
                min: -10,
                max: 10
            },
            rotationY: {
                value: 0,
                min: -10,
                max: 10
            },
            rotationZ: {
                value: 0,
                min: -10,
                max: 10
            },
            scale: {
                value: 0,
                min: -10,
                max: 10
            }

    }) */
    const isSmall = useMediaQuery ({maxWidth: 440});
    const isMobile = useMediaQuery ({maxWidth: 768});
    const isTablet = useMediaQuery ({ minWidth: 768, maxWidth: 1024});
    const isDesktop = useMediaQuery ({minWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isDesktop);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl font-medium text-neutral-600 text-center font-generalsans">Mount and Blade 2 : Bannerlord Group
                    <span className="waving-hand"></span>
                </p>
                <p className="hero_tag text-white">Czechoslovak Corps
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* <Leva/> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        {/* <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} /> */}
                        <CameraRig />
                    <PerspectiveCamera position={[60, 60, 60]} zoom={100} fov={90} />
                        <HackerRoom
                            position={sizes.deskPosition}
                            rotation={[0, 45.55, 0]}
                            scale={(sizes.deskScale)*50}
                        />
                        <ambientLight intensity={5} />
                        <directionalLight position={[10, 10, 10]} intensity={2.5} />
                        <Selection>
                            <EffectComposer multisampling={8} autoClear={false}>
                                <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
                            </EffectComposer>
                        </Selection>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
function CameraRig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0 + (state.pointer.x * state.viewport.width) / 5, (15 + state.pointer.y * state.viewport.height ) / 5, 5.5], 0.5, delta)
        state.camera.lookAt(0, 0, 0)
    })
}

export default Hero

