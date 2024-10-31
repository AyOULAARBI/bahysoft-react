
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html } from "@react-three/drei"
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei'
function Loader() {
    const { progress, active } = useProgress()

    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

const Model = ({ url }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={[1, 1, 1]} position={[0, -1, 0]} />
}
export default function Scene() {
    return (
        <Canvas dpr={[1, 1.5]} style={{ height: window.innerWidth < 768 ? "50vh" : '700px' }}
            className="h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px]
             bg-[#f0f0f0] md:bg-transparent" >
            {/* <color attach="background" args={["#f0f0f0"]}  /> */}
            <PerspectiveCamera makeDefault position={[0, 2, 4]} fov={75} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Suspense fallback={<Loader />}>
                <Model url="/images/pos_machine.glb" />
                <Environment preset="studio" />
            </Suspense>
            <OrbitControls

                autoRotate={true}
                autoRotateSpeed={5}
                enableZoom={true}
                enablePan={true}
                minDistance={0}
                maxDistance={3}
            />
        </Canvas>
    )
}